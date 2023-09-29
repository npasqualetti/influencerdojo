import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";

export function Hero() {
    return (
      <div className="grid sm:grid-cols-2 grid-cols-1 flex-wrap max-w-7xl m-auto w-full px-4 sm:py-28 py-10">
        <div className="grid items-center w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl">
              Scale Your Agency.
              <br />
              <span className="bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Find Influencers Today.                 
              </span>
            </h1>
            <p className="py-6 text-sm sm:text-base lg:text-lg max-w-[40ch]">
                Search and export 10K+ curated leads from 15M+ TikTok, Youtube, and Instagram accounts.
            </p>
            <div className="flex gap-2">
                <Link href={"https://demo.influencerdojo.com"} rel="noopener noreferrer" target="_blank">
                  <Button
                    className="rounded-full"
                    variant="ghost"
                    size="sm"
                  >
                    Demo
                    <ChevronRightCircle className="ml-2" size={16} />
                  </Button>
                </Link>
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
              <p className="mt-2">
                Data is updated weekly. Join <span className="font-semibold">100+</span> scaling agencies
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative sm:gap-0 gap-y-7 my-10 sm:my-0">
          <div style={{}} className="">
            <iframe
              className="w-full min-h-[275px] sm:min-h-[325px]"
              src="https://www.youtube.com/embed/B22lgdajizQ?si=6Avmd5j2mZrqulsf&start=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
  
    );
  }
  