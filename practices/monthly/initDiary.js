const shellJs = require("shelljs");

const tmplFolder = "template";
const diaryTmpl = "diary.tmpl";
const readmeTmpl = "readme.tmpl";

const init = (
  baseSrc = "E:\\Projects\\project-github\\little-secret\\life\\daily",
  year = `2021`,
  month = `07`
) => {
  const templateSrc = `${baseSrc}\\${tmplFolder}`;
  const targetSrc = `${baseSrc}\\${year}\\${month}`;
  // create target folder
  shellJs.mkdir(targetSrc);
  // shellJs.cd(templateSrc);
  // copy templates
  shellJs.cp(`${templateSrc}\\${diaryTmpl}`, `${targetSrc}\\${diaryTmpl}`);
  shellJs.cp(`${templateSrc}\\${readmeTmpl}`, `${targetSrc}\\README.md`);

  shellJs.sed("-i", "month", `${month}`, `${targetSrc}\\README.md`);

  // init files
  shellJs.cd(targetSrc);
  for (let i = 1; i <= 31; i++) {
    let j = i < 10 ? `0${i}` : `${i}`;
    shellJs.cp(`${diaryTmpl}`, `${j}.md`);
    shellJs.sed("-i", "date", `${year}-${month}-${j}`, `${j}.md`);
  }
  shellJs.rm(`${diaryTmpl}`);
};

init();
