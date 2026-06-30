import { NextResponse } from "next/server";
import sitemap from "../../sitemap";

const HOST = "www.tecorbitron.com";
const KEY = process.env.INDEXNOW_KEY ?? "be73f414919a2669ef35c19a2b1cf00c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

/**
 * GET /api/indexnow?secret=YOUR_SECRET
 * GET /api/indexnow?secret=YOUR_SECRET&urls=https://www.tecorbitron.com/,https://www.tecorbitron.com/blog/some-post
 *
 * - With no `urls` param: pulls every URL from sitemap.ts (incl. dynamic
 *   Sanity blog/case-study pages) and submits all of them.
 * - With `urls`: submits only the comma-separated list you pass in —
 *   use this right after publishing/updating a single page.
 *
 * Protect this route with INDEXNOW_SECRET in your environment so randoms
 * can't trigger mass re-submissions.
 */
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const secret = searchParams.get("secret");
    if (process.env.INDEXNOW_SECRET && secret !== process.env.INDEXNOW_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const urlsParam = searchParams.get("urls");

        const urlList = urlsParam
            ? urlsParam.split(",").map((u) => u.trim())
            : (await sitemap()).map((entry) => entry.url);

        if (urlList.length === 0) {
            return NextResponse.json(
                { error: "No URLs to submit" },
                { status: 400 },
            );
        }

        const res = await fetch("https://api.indexnow.org/IndexNow", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                host: HOST,
                key: KEY,
                keyLocation: KEY_LOCATION,
                urlList,
            }),
        });

        // IndexNow returns 200/202 with an empty body on success
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            return NextResponse.json(
                {
                    error: "IndexNow submission failed",
                    status: res.status,
                    detail: text,
                },
                { status: 502 },
            );
        }

        return NextResponse.json({
            success: true,
            submittedCount: urlList.length,
            urls: urlList,
        });
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to submit to IndexNow", detail: String(err) },
            { status: 500 },
        );
    }
}
