function rendezesKorSzerint(lista){
    lista.sort(function(a, b){
      return a.kor - b.kor;
    })
  }
function rendezesNevSzerint(lista,kulcs){
  lista.sort(function(a, b){
    let ertek = 1
    if (a.kulcs >  b.kulcs) {
      ertek = -1
    }
    return ertek;/**vagy pozitiv vagy negativ ertek kll ide */
  })
}
function rendezes(lista,kulcs){
  if (typeof lista[0][kulcs] === "number") {
    rendezesKorSzerint(lista,kulcs)
  } else{
    rendezesNevSzerint(lista,kulcs)
  }
}
function rendezes2(lista,kulcs){
    lista.sort(function(a,b){
        
    })
}