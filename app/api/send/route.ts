import { NextResponse } from 'next/server';
import EmailTemplate from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John", product: "Resend" }),
    });

    return NextResponse.json(data);
  }
  catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}