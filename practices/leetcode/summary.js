const ls = require("lodash");

const template = `
- [MM.01 ](2021/MM/01.md)
- [MM.02 ](2021/MM/02.md)
- [MM.03 ](2021/MM/03.md)
- [MM.04 ](2021/MM/04.md)
- [MM.05 ](2021/MM/05.md)
- [MM.06 ](2021/MM/06.md)
- [MM.07 ](2021/MM/07.md)
- [MM.08 ](2021/MM/08.md)
- [MM.09 ](2021/MM/09.md)
- [MM.10 ](2021/MM/10.md)
- [MM.11 ](2021/MM/11.md)
- [MM.12 ](2021/MM/12.md)
- [MM.13 ](2021/MM/13.md)
- [MM.14 ](2021/MM/14.md)
- [MM.15 ](2021/MM/15.md)
- [MM.16 ](2021/MM/16.md)
- [MM.17 ](2021/MM/17.md)
- [MM.18 ](2021/MM/18.md)
- [MM.19 ](2021/MM/19.md)
- [MM.20 ](2021/MM/20.md)
- [MM.21 ](2021/MM/21.md)
- [MM.22 ](2021/MM/22.md)
- [MM.23 ](2021/MM/23.md)
- [MM.24 ](2021/MM/24.md)
- [MM.25 ](2021/MM/25.md)
- [MM.26 ](2021/MM/26.md)
- [MM.27 ](2021/MM/27.md)
- [MM.28 ](2021/MM/28.md)
- [MM.29 ](2021/MM/29.md)
- [MM.30 ](2021/MM/30.md)
- [MM.31 ](2021/MM/31.md)`;

const modifyMonth = (month) => {
  console.log(ls.split(template, "MM").join(month));
};
