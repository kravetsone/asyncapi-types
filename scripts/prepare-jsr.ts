import { execSync } from "node:child_process";
import fs from "node:fs";

const version = execSync("npm pkg get version")
    .toString()
    .replace(/"|\n/gi, "");

const jsrConfig = JSON.parse(String(fs.readFileSync("jsr.json")));

jsrConfig.version = version;

fs.writeFileSync("jsr.json", JSON.stringify(jsrConfig, null, 4));

try {
    execSync("bun x @teidesu/slow-types-compiler@latest fix --entry jsr.json");
} catch (error) {
    console.error(error);
}

console.log("Prepared to release on JSR!");
