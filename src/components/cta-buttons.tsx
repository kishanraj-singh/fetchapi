"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export function CtaButtons() {
  const handleExplore = () => {
    const section = document.getElementById("explore");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-4 [&_button]:w-35">
      <Link href="#explore">
        <Button size="lg" onClick={handleExplore}>
          Get started
        </Button>
      </Link>

      <Link href="https://github.com/kishanraj-singh/fetchapi" target="_blank">
        <Button variant="outline" size="lg">
          <FaGithub />
          Github
        </Button>
      </Link>
    </div>
  );
}
