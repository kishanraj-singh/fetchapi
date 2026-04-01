import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { Star } from "lucide-react";
import { AnimationContainer } from "./animation-container";
import ThemeToggleButton from "./theme-toggle-button";

export function Header() {
  return (
    <header className="w-full px-[5%] fixed top-0 left-0 z-10 backdrop-blur-3xl overflow-hidden">
      <AnimationContainer reverse>
        <div className="max-w-7xl h-18 flex items-center justify-between mx-auto">
          <Logo />

          <div className="flex gap-3">
            <ThemeToggleButton />

            <Link
              href="https://github.com/kishanraj-singh/fetchapi"
              target="_blank"
            >
              <Button variant="outline" className="md:hidden">
                <FaGithub />
              </Button>
              <Button variant="outline" className="hidden md:flex">
                <FaGithub />
                Github <Star className="fill-yellow-500 text-transparent" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimationContainer>
    </header>
  );
}
