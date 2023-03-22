import { SZAMLISTA } from "./adat.js";
console.log(SZAMLISTA);
$(function () {
  keveres1(SZAMLISTA);
});
function keveres1(lista) {
  let van;
  let megKeverIndex = [];
  let szamok;
  while (megKeverIndex.length < 6) {
    szamok = Math.floor(Math.random() * 6);
    van = false;
    let index = 0;
    while (index < megKeverIndex.length && !(szamok == megKeverIndex[index])) {
      index++;
    }
    if (van == false) {
      megKeverIndex.push(szamok);
    }
  }
  console.log(megKeverIndex);
  return megKeverIndex;
}
