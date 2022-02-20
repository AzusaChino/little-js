const shellJs = require("shelljs");
const path = require("path");
const fs = require("fs");

const SEP = path.sep;

const baseSrc = `E:${SEP}Projects${SEP}project-github${SEP}little-secret${SEP}src${SEP}life${SEP}daily`;

const doCombine = (obj) => {
  const { year, month } = obj;
  const targetFolder = `${baseSrc}${SEP}${year}`;
  const targetFile = `${targetFolder}${SEP}${month}.md`;
  // 1. create the target file
  shellJs.touch(targetFile);
  // 2. loop read files in folder, append to target file
  shellJs.cd(`${targetFolder}${SEP}${month}`);
  shellJs.ls("*.md").forEach((file) => {
    fs.writeFileSync(targetFile, shellJs.cat(file).toString() + "\n", {
      flag: "a+",
    });
  });
};

// doCombine({
//   year: "2021",
//   month: "12",
// });

const doSed = (obj) => {
  const { year } = obj;
  const targetFolder = `${baseSrc}${SEP}${year}`;
  shellJs.cd(targetFolder);
  shellJs.ls("*.md").forEach((file) => {
    shellJs.sed("-i", "## 简单总结", "**Conclusion**", file);
    shellJs.sed("-i", "## 简要记事", "**Thing**", file);
    shellJs.sed("-i", "## 学习记录", "**Learning**", file);
    shellJs.sed("-i", "## 其他", "**Extra**", file);
  });
};

const doSedV2 = (obj) => {
    const { year } = obj;
    const targetFolder = `${baseSrc}${SEP}${year}`;
    shellJs.cd(targetFolder);
    shellJs.ls("*.md").forEach((file) => {
      shellJs.sed("-i", "## Conclusion", "**Conclusion**", file);
      shellJs.sed("-i", "## Thing", "**Thing**", file);
      shellJs.sed("-i", "## Learning", "**Learning**", file);
      shellJs.sed("-i", "## Other", "**Extra**", file);
    });
  };

doSedV2({
  year: "2021",
});
