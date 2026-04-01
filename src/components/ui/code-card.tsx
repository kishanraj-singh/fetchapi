import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./card";

export function CodeCard({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("w-fit gap-0 p-0", className)}>
      <CardHeader className="flex flex-row gap-2 p-4 border-b">
        <div className="size-2 rounded-full bg-red-500" />
        <div className="size-2 rounded-full bg-yellow-500" />
        <div className="size-2 rounded-full bg-green-500" />
      </CardHeader>
      <CardContent className="h-full gap-4 p-4 bg-slate-900 overflow-auto">
        {children}
      </CardContent>
    </Card>
  );
}

export function CodeCardCode({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <pre
      className={cn(
        "text-green-500 whitespace-pre-wrap wrap-break-word",
        className,
      )}
    >
      <code>{children}</code>
    </pre>
  );
}
