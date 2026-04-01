import fs from "fs";
import path from "path";

export function getData<T>(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    `${fileName}.json`,
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T[];
}
