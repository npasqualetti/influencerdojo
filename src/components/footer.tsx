// @ts-nocheck

import Link from 'next/link';
import {
  Github,
  GithubIcon,
  Instagram,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from 'lucide-react';


export function Footer() {
  return (
    <>
    <div className='dark:border-zinc-800 border-zinc-200 border-y'>
    <div className='m-auto max-w-7xl px-4 py-20'>
      <div className='grid gap-x-8 gap-y-12 sm:grid-cols-5'>
        <div className='col-span-2 flex flex-col gap-6'>
          <Link href='/'>
            <img src='/logo.png' className='h-10 w-10 rounded-full' alt="Homepage Image"/>
          </Link>
          <p className="text-sm opacity-80">© Influencer Dojo LLC. All rights reserved.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-medium text-neutral-600'> PRODUCT</p>
          <Link
            href='/#pricing'
            className='text-base hover:underline'
            >
            <p>Pricing</p>
          </Link>
          <Link
            href='/#features'
            className='text-base hover:underline'
            >
            <p>Features</p>
          </Link>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-medium text-neutral-600'>COMPANY</p>
          <Link
            href="https://shocking-breadfruit-e34.notion.site/5b29295dcf4543989975bfec4949d1f0?v=c31ab442161d4d5a8f32cce1e064fe90&pvs=4"
            rel="noopener noreferrer" 
            target="_blank"
            className='text-base hover:underline'
            >
            <p>Free Guides</p>
          </Link>
          <Link
            href='/blog'
            className='text-base hover:underline'
            >
            <p>Blog</p>
          </Link>
          <Link
            href='mailto:support@influencerdojo.com'
            className='text-base hover:underline'
            >
            <p>Support</p>
          </Link>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-medium text-neutral-600'>LEGAL</p>
          <Link
            href='/terms'
            className='text-base hover:underline'
            >
            <p>Terms of Service</p>
          </Link>
          <Link
            href='/privacy'
            className='text-base hover:underline'
            >
            <p>Privacy Policy</p>
          </Link>
          <Link
            href='mailto:support@influencerdojo.com'
            className='text-base hover:underline'
            >
            <p>Don&quot;t Sell My Data</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </>
    );
}
