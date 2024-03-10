import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard project showing desktop version"
            width={1000}
            height={760}
            className='hidden md:block'
            layout="intrinsic"/>
          <Image 
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard project showing mobile version"
            width={560}
            height={620}
            className='block md:hidden'
            layout="intrinsic"/>
            {/* setting width and height for your images prevents layout shift,
            The active selection you've provided is a property setting in a component in a TypeScript React file. The `layout="intrinsic"` is a property that's often used in the `Image` component from the `next/image` package in Next.js, a popular React framework.
            The `layout` property controls the size of the image, specifically how it scales and stretches. The value `"intrinsic"` means that the image will scale the dimensions down for smaller viewports but once it reaches the point where the image's original dimensions would be larger than the viewport, the image will not scale up and will instead maintain its original dimensions.
            This is useful when you want to ensure that the image maintains its aspect ratio regardless of the size of the viewport, but you don't want the image to become larger than its original size. It's a good choice when you want to optimize for smaller screens without sacrificing too much quality on larger screens.
             */}
        </div>
      </div>
    </main>
  );
}
