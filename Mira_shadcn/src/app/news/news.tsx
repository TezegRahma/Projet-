/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fmd9WdFEwan
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Nav from "@/components/user/Nav";

export default function News() {
  return (
    <div className="grid gap-4 lg:gap-6">
     <Nav/>
      <div className="pt-16"> {/* Add padding top to prevent content from being hidden under the fixed navbar */}
      <div className="px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 container">
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 1"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Scientists make breakthrough in cancer research</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A brief summary of the article. It is a very interesting piece of news that will captivate the
                  readers.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">Health</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">2 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 2"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">New study reveals the impact of social media on mental health</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The article discusses the findings of a comprehensive study on the effects of social media usage on
                  mental well-being.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">Lifestyle</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">5 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 3"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Exclusive interview with the cast of the upcoming blockbuster movie
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our entertainment correspondent sits down with the stars to discuss their experiences while filming
                  the highly anticipated movie.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">Entertainment</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">1 hour ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 4"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Breaking: Political leaders reach a historic agreement on climate change
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our reporters provide in-depth coverage of the negotiations and the key points of the agreement.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">World</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">3 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 4"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Breaking: Political leaders reach a historic agreement on climate change
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our reporters provide in-depth coverage of the negotiations and the key points of the agreement.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">World</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">3 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 4"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Breaking: Political leaders reach a historic agreement on climate change
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our reporters provide in-depth coverage of the negotiations and the key points of the agreement.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">World</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">3 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 4"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Breaking: Political leaders reach a historic agreement on climate change
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our reporters provide in-depth coverage of the negotiations and the key points of the agreement.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">World</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">3 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 4"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Breaking: Political leaders reach a historic agreement on climate change
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our reporters provide in-depth coverage of the negotiations and the key points of the agreement.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">World</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">3 hours ago</time>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden border dark:border-gray-700">
            <Link className="flex-1" href="#">
              <img
                alt="News article 4"
                className="object-cover w-full aspect-16/9"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Breaking: Political leaders reach a historic agreement on climate change
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our reporters provide in-depth coverage of the negotiations and the key points of the agreement.
                </p>
              </div>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
              <div className="flex-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">World</span>
              </div>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">3 hours ago</time>
            </div>
          </div>
        </div>
      </div>
        <div className="px-4">
          <div className="container py-8 flex justify-center">
            <Button>Load More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
