const path = require("path");
const shellJs = require("shelljs");
const moment = require("moment");

const SEP = path.sep;

// 2022.02.11 adapt to the format of mdbook
const baseSrc = `E:${SEP}Projects${SEP}project-github${SEP}little-code${SEP}src`;

const createLcFiles = (obj) => {
  const { year, month } = obj;
  const targetSrc = `${baseSrc}${SEP}${year}${SEP}${month}`;
  shellJs.mkdir("-p", targetSrc);
  for (let i = 1; i <= 31; i++) {
    let j = i < 10 ? `0${i}` : i;
    const date_str = `${year}-${month}-${j}`;
    const date = moment(date_str);
    if (date.isValid()) {
      shellJs.cp(
        `${baseSrc}${SEP}template${SEP}daily.tmpl`,
        `${targetSrc}${SEP}${j}.md`
      );
      shellJs.sed(
        "-i",
        "DATE",
        `${year}-${month}-${j}`,
        `${targetSrc}${SEP}${j}.md`
      );
    }
  }
};

createLcFiles({
  year: "2022",
  month: "03",
});
