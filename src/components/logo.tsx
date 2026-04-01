import { Code2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Code2 className="size-8 p-1.5 bg-primary text-primary-foreground rounded-md" />
      <span className="text-lg font-bold">FetchAPI</span>{" "}
    </Link>
  );
}
