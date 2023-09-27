// @ts-nocheck

import { getSignedInUser } from "@/lib/auth/helper";
import Sidebar from "../../components/sidebar";
import { Footer}  from "@/components/footer"
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSignedInUser();

  return (
    <div className="w-full relative">
      <div className="flex sm:flex-row flex-col items-start sm:gap-x-8">
        <Sidebar session={session} />
        <div className="w-full ">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
