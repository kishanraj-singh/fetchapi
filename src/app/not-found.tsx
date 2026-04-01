import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-6">
      <span>404 | This page could not be found.</span>

      <Link href="/">
        <Button variant="outline">
          <ArrowLeft /> Home page
        </Button>
      </Link>
    </div>
  );
}
