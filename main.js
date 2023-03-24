import { SZAMLISTA, SZOVEGLISTA,OBJEKTUMLIST } from "./adat.js";

/* console.log(SZAMLISTA); */
$(function () {
  /* let kevertIndexLista = keveres1(SZAMLISTA); */
 /* console.log(SZOVEGLISTA);
  rendezes1(SZOVEGLISTA);
  console.log(SZOVEGLISTA);*/




  /*console.log(SZAMLISTA);
  keveres2(SZAMLISTA);
  console.log(SZAMLISTA);*/
  console.log(OBJEKTUMLIST);
  rendezesKorSzerint(OBJEKTUMLIST);
  rendezesNevSzerint(OBJEKTUMLIST);
  console.log(OBJEKTUMLIST)
  /*  console.log(kevertIndexLista);
  for (let index = 0; index < SZAMLISTA.length; index++) {
    console.log(SZAMLISTA[kevertIndexLista[index]])
  } */
});
function rendezesKorSzerint(lista){
  lista.sort(function(a, b){
    return a.kor - b.kor;
  })
}
function rendezesNevSzerint(lista){
  lista.sort(function(a, b){
    return a.nev - b.nev;
  })
}
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
function rendezes1(lista) {
    /**ez szovegek eseten mukodik
     */
  lista.sort();
}
function rendezes2(lista){
    lista.sort(function(a, b){return a - b});/**szamoknal mukodik */
}
function keveres2(lista){
    lista.sort(function(a,b){return 0.5 - Math.random()})
}