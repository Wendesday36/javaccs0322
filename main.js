import { SZAMLISTA } from "./adat.js";
console.log(SZAMLISTA);
$(function () {
  let kevertIndexLista = keveres1(SZAMLISTA);
  console.log(kevertIndexLista);
  for (let index = 0; index < SZAMLISTA.length; index++) {
    console.log(SZAMLISTA[kevertIndexLista[index]])
  }
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

  return megKeverIndex;
}
