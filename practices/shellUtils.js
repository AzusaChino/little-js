const shell = require("shelljs");

const baseLc = `| Date                        | No  | Level | Tag  | Title        |
 | --------------------------- | --- | ----- | ---- | ------------ |
 | [2021-04-01](2021/04/01.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-02](2021/04/02.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-03](2021/04/03.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-04](2021/04/04.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-05](2021/04/05.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-06](2021/04/06.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-07](2021/04/07.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-08](2021/04/08.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-09](2021/04/09.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-10](2021/04/10.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-11](2021/04/11.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-12](2021/04/12.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-13](2021/04/13.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-14](2021/04/14.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-15](2021/04/15.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-16](2021/04/16.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-17](2021/04/17.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-18](2021/04/18.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-19](2021/04/19.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-20](2021/04/20.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-21](2021/04/21.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-22](2021/04/22.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-23](2021/04/23.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-24](2021/04/24.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-25](2021/04/25.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-26](2021/04/26.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-27](2021/04/27.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-28](2021/04/28.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-29](2021/04/29.md) | 104 | easy  | tree | [title](url) |
 | [2021-04-30](2021/04/30.md) | 104 | easy  | tree | [title](url) |`;

const copyFile = () => {
  const baseSrc =
    "E:\\Projects\\project-github\\little-code\\leetcode\\2021\\05";
  // const baseSrc = "E:\\Projects\\project-github\\little-secret\\life\\daily\\2021\\05";
  for (let i = 1; i <= 31; i++) {
    let j = i < 10 ? `0${i}` : i;
    shell.cp(`${baseSrc}\\template.tmpl`, `${baseSrc}\\${j}.md`);
    shell.sed("-i", "date", `2021-05-${j}`, `${baseSrc}\\${j}.md`);
  }
};

const demo = function () {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git");
    shell.exit(1);
  }

  // Copy files to release dir
  shell.rm("-rf", "out/Release");
  shell.cp("-R", "stuff/", "out/Release");

  // Replace macros in each .js file
  shell.cd("lib");
  shell.ls("*.js").forEach(function (file) {
    shell.sed("-i", "BUILD_VERSION", "v0.1.2", file);
    shell.sed("-i", /^.*REMOVE_THIS_LINE.*$/, "", file);
    shell.sed(
      "-i",
      /.*REPLACE_LINE_WITH_MACRO.*\n/,
      shell.cat("macro.js"),
      file
    );
  });
  shell.cd("..");

  // Run external tool synchronously
  if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.echo("Error: Git commit failed");
    shell.exit(1);
  }
};

const changeWord = () => {
  // const location = "E:\\Projects\\project-github\\little-go\\examples";
  const loc =
    "E:\\Projects\\project-github\\little-secret\\life\\daily\\2021\\05";
  shell.cd(loc);
  // shell.ls("*.go").forEach((f) => {
  //   shell.sed("-i", "main", "init", f);
  // });
  shell.ls("README.md").forEach((f) => shell.sed("-i", "04", "05", f));
};
