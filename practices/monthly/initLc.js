const lodash = require("lodash");
const shellJs = require("shelljs");
const moment = require("moment");

const baseReadme = `
 | Date                        | No  | Level | Tag  | Title  |
 | --------------------------- | --- | ----- | ---- | ------ |
 | [2022-MM-01](MM/01.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-02](MM/02.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-03](MM/03.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-04](MM/04.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-05](MM/05.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-06](MM/06.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-07](MM/07.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-08](MM/08.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-09](MM/09.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-10](MM/10.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-11](MM/11.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-12](MM/12.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-13](MM/13.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-14](MM/14.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-15](MM/15.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-16](MM/16.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-17](MM/17.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-18](MM/18.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-19](MM/19.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-20](MM/20.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-21](MM/21.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-22](MM/22.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-23](MM/23.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-24](MM/24.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-25](MM/25.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-26](MM/26.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-27](MM/27.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-28](MM/28.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-29](MM/29.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-30](MM/30.md) | 39 | easy  | tree | [title](url) |
 | [2022-MM-31](MM/31.md) | 39 | easy  | tree | [title](url) |`;

const baseSrc = `E:\\Projects\\project-github\\little-code\\leetcode`;

const createLcFiles = (obj) => {
  const { year, month } = obj;
  const targetSrc = `${baseSrc}\\${year}\\${month}`;
  shellJs.mkdir("-p", targetSrc);
  for (let i = 1; i <= 31; i++) {
    let j = i < 10 ? `0${i}` : i;
    const date_str = `${year}-${month}-${j}`;
    const date = moment(date_str);
    if (date.isValid()) {
      shellJs.cp(`${baseSrc}\\template\\daily.tmpl`, `${targetSrc}\\${j}.md`);
      shellJs.sed(
        "-i",
        "DATE",
        `${year}-${month}-${j}`,
        `${targetSrc}\\${j}.md`
      );
    }
  }

  console.log(lodash.split(baseReadme, "MM").join(month));
};

createLcFiles({
  year: "2022",
  month: "01",
});
