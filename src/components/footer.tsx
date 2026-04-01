import { AnimationContainer } from "./animation-container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full px-[5%] border-t overflow-hidden">
      <AnimationContainer>
        <div className="max-w-7xl h-30 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 mx-auto">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="space-x-2">
              <span className="text-sm text-muted-foreground">by</span>
              <span className="text-primary font-semibold cursor-pointer">
                Kishan Raj Singh
              </span>
            </span>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">
              © 2026 FetchAPI. Open Source under MIT.
            </span>
          </div>
        </div>
      </AnimationContainer>
    </footer>
  );
}
