// [---변수들 가지고 오기---]
import * as Vars from '../Datas/var.js';

// [---박스 가져오기---]
export const H = document.getElementById("Hea") || null;
export const N = document.getElementById("Nav") || null;
export const S_S = document.getElementById("Sec_Search") || null;
export const S_T = document.getElementById("Sec_Tag") || null;
export const S_R = document.getElementById("Sec_Result") || null;
export const F = document.getElementById("Foo") || null;

// [---H1 가져오기---]
export const H1_T = document.getElementById("H1_Title") || null;

// [---H3 가져오기---]
export const H3_V = document.getElementById("H3_Version") || null;
export const H3_M = document.getElementById("H3_MadeBy") || null;

// [---버튼 가져오기---]
export const Btn_Project = document.getElementById("Btn_Project") || null;
export const Btn_Sets = document.getElementById("Btn_Sets") || null;
export const Btn_Help = document.getElementById("Btn_Help") || null;
export const Btn_Search = document.getElementById("Btn_Search") || null;

// [---Code---]
if (H3_V !== null) H3_V.innerText = Vars.ProjectMeta.Last_Version;
if (H3_M !== null) H3_M.innerText = "Made By " + Vars.ProjectMeta.Author + ` In 26-06-08`;

// [---Event---]
if (H1_T !== null) {
    H1_T.addEventListener('click', () => {
        location.href = Vars.ProjectMeta.link + "/index.html";
    });
}
Btn_Project.addEventListener('click', () => {
    location.href = Vars.ProjectMeta.link + "/Projects/Projects.html";
});
Btn_Sets.addEventListener('click', () => {
    location.href = Vars.ProjectMeta.link + "/Sets/Sets.html";
});
Btn_Help.addEventListener('click', () => {
    location.href = Vars.ProjectMeta.link + "/Help/Help.html";
});