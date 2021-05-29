const shell = require("shelljs");
const lodash = require("lodash");

const tmplFolder = `template`;
const javaPackage = `cn.az.code`;

// create daily lc files
const createFiles = (year = `2021`, month = `june`) => {
  const baseFolder = "E:\\Projects\\project-github\\little-code";
  const javaBasePackage = "java\\src\\main\\java\\cn\\az\\code";
  const arr = [
    { folder: "cpp", ext: "cc" },
    { folder: "go", ext: "go", tmpl: "go.tmpl" },
    { folder: "python", ext: "py" },
  ];
  const folder = `java`;
  const tmpl = `java.tmpl`;
  return (m, d, title) => {
    const kebabTitle = lodash.kebabCase(title);
    const javaTitle = up(lodash.camelCase(title));

    arr.forEach(({ folder, ext, tmpl }) => {
      if (tmpl) {
        shell.cp(
          `${baseFolder}\\${folder}\\${tmplFolder}\\${tmpl}`,
          `${baseFolder}\\${folder}\\${year}\\${month}\\${kebabTitle}.${ext}`
        );
        shell.sed(
          "-i",
          `PKG`,
          `package ${month}`,
          `${baseFolder}\\${folder}\\${year}\\${month}\\${kebabTitle}.${ext}`
        );
      } else {
        shell.cd(`${baseFolder}\\${folder}\\${year}\\${month}`);
        shell.touch(`${kebabTitle}.${ext}`);
      }
    });

    shell.cp(
      `${baseFolder}\\${folder}\\${tmplFolder}\\${tmpl}`,
      `${baseFolder}\\${javaBasePackage}\\year${year}\\${month}\\${javaTitle}.java`
    );
    shell.cd(`${baseFolder}\\${javaBasePackage}\\year${year}\\${month}`);
    shell.sed(
      `-i`,
      "PKG",
      `${javaPackage}.year${year}.${month};`,
      `${javaTitle}.java`
    );
    shell.sed(`-i`, "DATE", `${year}-${m}-${d}`, `${javaTitle}.java`);
    shell.sed(`-i`, "CLZ", `${javaTitle}`, `${javaTitle}.java`);
  };
};

const up = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

const createMayFiles = createFiles("2021", "may");

createMayFiles(`05`, `29`, "Demo Test");
