import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle, Server } from "lucide-react";

export function Hero() {
    return (
      <div className="grid sm:grid-cols-2 grid-cols-1 flex-wrap max-w-7xl m-auto w-full px-4 sm:py-28 py-10">
        <div className="grid items-center w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl">
              Scale Your Company.
              <br />
              <span className="bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                Find Influencers Today.                 
              </span>
            </h1>
            <p className="py-6 text-sm sm:text-base lg:text-lg max-w-[40ch]">
                Search and export 10K+ curated leads from 15M+ TikTok, Youtube, and Instagram accounts.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <Button className="inline-flex font-display items-center text-sm justify-center rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 text-secondary hover:bg-opacity-80 h-11 px-8 gap-2">
                  <Link href="https://demo.influencerdojo.com" rel="noopener noreferrer" target="_blank">Try Demo</Link>
                  <Server size={16} />
                </Button>
                <Button className="inline-flex font-display items-center text-sm justify-center rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 text-secondary hover:bg-opacity-80 h-11 px-8 gap-2 ml-2">
                  <Link href="/auth/sign-in">Sign Up</Link>
                  <ChevronRightCircle size={16} />
                </Button>
              </div>
              <p>
                Data is updated weekly. Join <span className="font-semibold">100+</span> scaling agencies
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative sm:gap-0 gap-y-7 my-10 sm:my-0">
          <div className={"relative z-10"}>
            <div className="max-w-7xl z-10 border border-white/30 m-auto p-4 sm:p-8 bg-white/20 w-full rounded-3xl">
              <img
                src="/assets/dashboard.png"
                className="rounded-xl bg-black p-4 z-10"
                alt="Hero Image"
              />
            </div>
            <div className="top-20 bottom-20 w-full bg-gradient-conic from-rose-500 via-violet-400 to-amber-500 absolute z-[-1]" />
          </div>
        </div>
      </div>
  
    );
  }
  