import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, company, email, phone, description } = body;

        if (!name || !email || !phone || !description) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        await resend.emails.send({
            from: "Tecorbitron <noreply@tecorbitron.com>",
            to: process.env.CONTACT_EMAIL || "info@tecorbitron.com",
            replyTo: email,
            subject: `TSPL Project Inquiry - ${name}`,
            template: {
                id: "new-project-inquiry",
                variables: {
                    name: name,
                    company: company,
                    email: email,
                    phone: phone,
                    description: description,
                },
            },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch {
        return NextResponse.json(
            { error: "Failed to send inquiry" },
            { status: 500 },
        );
    }
}
