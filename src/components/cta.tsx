import Link from "next/link";
import { Button } from "@/components/ui/button";
export function CTA() {
    return (
      <div className="flex flex-col w-full items-center py-28">
        <div className="flex flex-col items-center px-4">
          <h1 className="text-2xl sm:text-4xl text-center font-normal pb-4 bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            Join 100+ agencies already scaling
          </h1>
          <p className="text-center text-sm w-fit rounded-lg ">
           Find Influencers to work with today.
          </p>
        </div>
          <div className="flex justify-center py-20">
            <a href="/auth/sign-in">
            <Link href={"https://www.influencerdojo.com/auth/sign-in/"}>
              <Button 
                className="rounded-full ml-2"
                variant="ghost"
                size="sm"
              >
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="black"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap ml-2"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </Button>
            </Link>
          </a>
      </div>
    </div>
  
    )
  }