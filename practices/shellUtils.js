const shellJs = require("shelljs")

const baseSrc = 'E:\\Projects\\project-github\\little-code\\leetcode\\2021\\04'

for (let i = 1; i <= 31; i++) {
    let j = i < 10 ? `0${i}` : i;
    shellJs.cp(`${baseSrc}\\template.tmpl`, `${baseSrc}\\${j}.md`)
}