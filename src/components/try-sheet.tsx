"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CodeCard, CodeCardCode } from "./ui/code-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Spinner } from "./ui/spinner";
import { Copy, X } from "lucide-react";
import { Api, Endpoint } from "@/types";
import { toast } from "sonner";

export function TrySheet({ api }: { api: Api }) {
  const [selectedIndex, setSelectedIndex] = useState("0");
  const [response, setResponse] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const selectedEndpoint = api.endpoints[parseInt(selectedIndex)];
  const BASE_URL = typeof window !== "undefined" ? window.location.origin : "";

  const handleRunRequest = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch(`${BASE_URL}/${selectedEndpoint.path}`, {
        method: selectedEndpoint.method,
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch {
      setResponse(
        JSON.stringify({ success: false, message: "Request failed" }, null, 2),
      );
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${BASE_URL}/${selectedEndpoint.path}`,
      );
      toast.success("Copied!");
    } catch {
      toast.error("Copied failed!");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex-1">
          Try it
        </Button>
      </SheetTrigger>

      <SheetContent className="gap-0 overflow-y-auto" showCloseButton={false}>
        <div className="h-full flex flex-col gap-4 p-4">
          <SheetHeader className="flex flex-row items-center gap-3 px-0">
            <SheetTitle>{api.title}</SheetTitle>
            <Badge
              variant="outline"
              className="bg-primary/10 border-primary text-primary"
            >
              REST API
            </Badge>
            <SheetClose asChild>
              <Button
                variant="outline"
                size="icon-xs"
                className="absolute right-3"
              >
                <X />
              </Button>
            </SheetClose>
          </SheetHeader>

          <span className="text-xs text-muted-foreground">SELECT ENDPOINT</span>
          <Select
            value={selectedIndex.toString()}
            onValueChange={setSelectedIndex}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Placeholder" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {api.endpoints.map((endpoint: Endpoint, index: number) => (
                  <SelectItem key={index} value={index.toString()}>
                    <span className="text-green-500">{endpoint.method}</span>
                    {endpoint.path}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              disabled={loading}
              onClick={handleRunRequest}
              className="flex-1"
            >
              {loading ? <Spinner /> : "▶︎ Run Request"}
            </Button>
            <Button variant="outline" onClick={copyToClipboard}>
              <Copy /> Copy
            </Button>
          </div>

          <span className="text-xs text-muted-foreground">RESPONSE</span>
          <CodeCard className="w-full h-full">
            {response ? (
              <CodeCardCode>{response}</CodeCardCode>
            ) : (
              <CodeCardCode className="text-muted-foreground">
                {loading ? "// Fetching..." : "// Click run to see response"}
              </CodeCardCode>
            )}
          </CodeCard>
        </div>
      </SheetContent>
    </Sheet>
  );
}
