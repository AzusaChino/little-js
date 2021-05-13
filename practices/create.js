const shell = require("shelljs");
const lodash = require("lodash");

// create daily lc files
const createFiles = (year, month) => {
  const baseFolder = "E:\\Projects\\project-github\\little-code";
  const javaBasePackage = "java\\src\\main\\java\\cn\\az\\code";
  const arr = [
    { folder: "cpp", ext: "cc" },
    { folder: "go", ext: "go" },
    {
      folder: "python",
      ext: "py",
    },
  ];
  return (title) => {
    const kebabTitle = lodash.kebabCase(title);
    const javaTitle = up(lodash.camelCase(title));

    arr.forEach(({ folder, ext }) => {
      shell.cd(`${baseFolder}\\${folder}\\${year}\\${month}`);
      shell.touch(`${kebabTitle}.${ext}`);
    });

    shell.cd(`${baseFolder}\\${javaBasePackage}\\year${year}\\${month}`);
    shell.touch(`${javaTitle}.java`);
  };
};

const up = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

const createMayFiles = createFiles("2021", "may");

// createMayFiles("");
