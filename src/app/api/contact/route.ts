import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, company, service, budget, message } = body;

        // Validation
        if (!name || !email || !message || !service) {
            return NextResponse.json(
                { error: "Required fields missing" },
                { status: 400 },
            );
        }

        await resend.emails.send({
            from: "Tecorbitron Website <noreply@tecorbitron.com>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `New Inquiry — ${service} — ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #0c3146; padding: 24px 32px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: #00d060; margin: 0; font-size: 20px;">New Project Inquiry</h1>
                        <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 13px;">via tecorbitron.com</p>
                    </div>

                    <div style="background: #f2f6f9; padding: 32px; border-radius: 0 0 12px 12px;">

                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed; width: 140px;">
                                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a;">Name</span>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 14px; font-weight: 600; color: #0c3146;">${name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a;">Email</span>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <a href="mailto:${email}" style="font-size: 14px; font-weight: 600; color: #00a34b;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a;">Phone</span>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 14px; font-weight: 600; color: #0c3146;">${phone || "—"}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a;">Company</span>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 14px; font-weight: 600; color: #0c3146;">${company || "—"}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a;">Service</span>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 14px; font-weight: 600; color: #0c3146;">${service}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a;">Budget</span>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #dde6ed;">
                                    <span style="font-size: 14px; font-weight: 600; color: #0c3146;">${budget || "—"}</span>
                                </td>
                            </tr>
                        </table>

                        <div style="margin-top: 24px;">
                            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b8a9a; margin: 0 0 8px;">Project Brief</p>
                            <div style="background: white; border: 1px solid #dde6ed; border-radius: 8px; padding: 16px;">
                                <p style="font-size: 14px; color: #3d5c6e; line-height: 1.7; margin: 0;">${message}</p>
                            </div>
                        </div>

                        <div style="margin-top: 24px; padding: 16px; background: #e6faf0; border-radius: 8px; border-left: 3px solid #00d060;">
                            <p style="font-size: 12px; color: #007a38; margin: 0; font-weight: 600;">
                                💡 Reply directly to this email to respond to ${name}
                            </p>
                        </div>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 },
        );
    }
}
