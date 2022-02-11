const shellJs = require("shelljs");
const moment = require("moment");
const path = require("path");

const SEP = path.sep;

const tmplFolder = "template";
const diaryTmpl = "diary.tmpl";
const readmeTmpl = "readme.tmpl";

// 2022.02.11 adapt to the format of mdbook
const baseSrc = `E:${SEP}Projects${SEP}project-github${SEP}little-secret${SEP}src${SEP}life${SEP}daily`;

const createDiary = (obj) => {
  const { year, month } = obj;
  const templateSrc = `${baseSrc}${SEP}${tmplFolder}`;
  const targetSrc = `${baseSrc}${SEP}${year}${SEP}${month}`;
  // create target folder
  shellJs.mkdir(`-p`, targetSrc);
  // shellJs.cd(templateSrc);
  // copy templates
  shellJs.cp(
    `${templateSrc}${SEP}${diaryTmpl}`,
    `${targetSrc}${SEP}${diaryTmpl}`
  );
  shellJs.cp(
    `${templateSrc}${SEP}${readmeTmpl}`,
    `${targetSrc}${SEP}README.md`
  );

  shellJs.sed("-i", "year", `${year}`, `${targetSrc}${SEP}README.md`);
  shellJs.sed("-i", "month", `${month}`, `${targetSrc}${SEP}README.md`);

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
