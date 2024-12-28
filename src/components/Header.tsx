"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname()

  return (
    <header className="bg-background h-12 p-2 sticky top-0 z-20">
      <div className="mx-auto max-w-7xl flex h-8 items-center justify-between w-full px-1">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <img src="/images/elvehavn_1.jpg" alt="avatar" className="rounded-full m-1" width={30} height={30} />
            <h1 className="hidden sm:block text-xl font-bold italic">
              Thomas N. Jensen
            </h1>
          </Link>
        </div>
        <ul className="flex items-center gap-2">
          <li className={path === "/" ? "active" : ""}>
            <Link
              href="/"
              className="flex justify-center items-center gap-2 ml-0"
              title="Home"
            >
              Home
            </Link>
          </li>
          <li className={path === "/projects" ? "active" : ""}>
            <Link 
              href="/projects"
              className="flex justify-center items-center gap-2 ml-0"
              title="Projects"
            >
              Projects
            </Link>
          </li>
          <li className={path === "/about" ? "active" : ""}>
            <Link
              href="/about"
              className="flex justify-center items-center gap-2 ml-0"
              title="About"
            >
              About
            </Link>
          </li>
          <li className={path === "/contact" ? "active" : ""}>
            <Link
              href="/contact"
              className="flex justify-center items-center gap-2 ml-0"
              title="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
