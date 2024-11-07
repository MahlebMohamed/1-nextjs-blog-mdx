"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Icons } from "./icons";

export default function MainNav() {
  const pathname = useParams();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="ml-6 flex items-center space-x-1">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name} </span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.toString() === "/blog"
            ? "text-foreground"
            : "text-foreground/50",
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.toString() === "/about"
            ? "text-foreground"
            : "text-foreground/50",
        )}
      >
        About
      </Link>
    </nav>
  );
}
