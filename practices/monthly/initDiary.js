const shellJs = require("shelljs");
const moment = require("moment");

const tmplFolder = "template";
const diaryTmpl = "diary.tmpl";
const readmeTmpl = "readme.tmpl";
const baseSrc = "E:\\Projects\\project-github\\little-secret\\life\\daily";

const createDiary = (obj) => {
  const { year, month } = obj;
  const templateSrc = `${baseSrc}\\${tmplFolder}`;
  const targetSrc = `${baseSrc}\\${year}\\${month}`;
  // create target folder
  shellJs.mkdir(`-p`, targetSrc);
  // shellJs.cd(templateSrc);
  // copy templates
  shellJs.cp(`${templateSrc}\\${diaryTmpl}`, `${targetSrc}\\${diaryTmpl}`);
  shellJs.cp(`${templateSrc}\\${readmeTmpl}`, `${targetSrc}\\README.md`);

  shellJs.sed("-i", "year", `${year}`, `${targetSrc}\\README.md`);
  shellJs.sed("-i", "month", `${month}`, `${targetSrc}\\README.md`);

  // init files
  shellJs.cd(targetSrc);
  for (let i = 1; i <= 31; i++) {
    let j = i < 10 ? `0${i}` : `${i}`;
    const date_str = `${year}-${month}-${j}`;
    const date = moment(date_str);
    if (date.isValid()) {
      shellJs.cp(`${diaryTmpl}`, `${j}.md`);
      const weekday = date.format("ddd");
      shellJs.sed("-i", "date", `${date_str} ${weekday}`, `${j}.md`);
    }
  }
  shellJs.rm(`${diaryTmpl}`);
};

createDiary({
  year: "2022",
  month: "01",
});
