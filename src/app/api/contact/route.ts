import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("Contact form submission received:", {
      name,
      email,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, integrate with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'hello@om.dev',
    //   subject: `New Project Inquiry from ${name}`,
    //   text: `Service: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your project inquiry has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or email directly." },
      { status: 500 }
    );
  }
}
