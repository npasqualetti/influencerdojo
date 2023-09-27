import { Resend } from 'resend';
import MagicLinkEmail from './templates/magic-link';
import { serverEnv } from '@/env/server';

export const resend = new Resend(serverEnv.RESEND_SECRET);

export async function sendMagicLinkEmail(to: string, signInLink: string) {
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [to],
        subject: 'Welcome!',
        react: MagicLinkEmail({ signInLink: signInLink, sentTo: to }),
    });
}