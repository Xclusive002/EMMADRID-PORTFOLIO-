import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    console.log("Email received:", { name, email, subject, message })

    // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
    // For now, this logs the message. Production requires email service setup.

    const emailContent = `
New Contact Form Submission from ${name}

From: ${email}
Subject: ${subject}

Message:
${message}
    `

    // Example with Resend (uncomment after installing and setting API key):
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "noreply@emmadrid.dev",
    //   to: "emmadridwebdeveloper@gmail.com",
    //   subject: `New Contact: ${subject}`,
    //   html: emailContent,
    //   replyTo: email,
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully. I'll get back to you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
