import { getServerSession } from "next-auth";
import { authOptions } from "./options";
import { redirect } from "next/navigation";
import { prisma } from "../database";

export async function getSignedInUser() {
    const session = await getServerSession(authOptions);
    console.log(session)
    if (!session) {
        const freeDemo = {
            user: {
              name: 'Demo User',
              email: 'demo@test.com',
              image: '',
              id: '',
              first_name: 'Demo',
              last_name: 'User',
              onboarded: true,
              phone_number: '1234567890',
              stripe_customer_id: '',
              role: 'Guest'
            }
          }
        return freeDemo
    }

    if (session.user.onboarded == false) {
        redirect("/onboarding/account")
    }

    return session;
}