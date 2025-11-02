import fs from "fs";
import path from "path";

const ROOT_DIR = path.resolve("./reactRouter/src");

function checkImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const importRegex = /import .* from ['"](.+)['"]/g;
  const issues = [];

  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath.startsWith(".") || importPath.startsWith("..")) continue;

    const absPath = path.resolve(path.dirname(filePath), importPath);
    const realFile =
      fs.existsSync(absPath) && fs.statSync(absPath).isFile()
        ? absPath
        : [".js", ".jsx", ".ts", ".tsx"].map((ext) => absPath + ext).find(fs.existsSync);

    if (realFile) {
      const actualName = path.basename(realFile);
      const expectedName = path.basename(importPath);
      if (actualName !== expectedName) {
        issues.push({ file: filePath, importPath, actualName });
      }
    }
  }

  return issues;
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) results = results.concat(walk(filePath));
    else if (filePath.endsWith(".js") || filePath.endsWith(".jsx")) results.push(filePath);
  });
  return results;
}

const allFiles = walk(ROOT_DIR);
let allIssues = [];

for (const file of allFiles) {
  allIssues = allIssues.concat(checkImportsInFile(file));
}

if (allIssues.length === 0) {
  console.log("✅ No case-sensitive import issues found!");
} else {
  console.log("⚠️ Case-sensitive import mismatches detected:\n");
  allIssues.forEach((issue) => {
    console.log(
      `File: ${issue.file}\n  Import: '${issue.importPath}' → Actual file: '${issue.actualName}'\n`
    );
  });
}
