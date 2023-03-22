import { SZAMLISTA } from "./adat.js";
console.log(SZAMLISTA);
$(function () {
  keveres1(SZAMLISTA);
});
function keveres1(lista) {
  let van;
  let megKeverIndex = [];
  let szamok;
  while (megKeverIndex.length < lista.length) {
    szamok = Math.floor(Math.random() * lista.length);
    van = false;
    let index = 0;
    while (index < megKeverIndex.length && !(szamok == megKeverIndex[index])) {
      index++;
    }
    if (index >= megKeverIndex.length) {
      megKeverIndex.push(szamok);
    }
  }
  console.log(megKeverIndex);
  return megKeverIndex;
}
