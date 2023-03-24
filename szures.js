
function szuresFajtaSzerint(lista){
    const SZURTLISTA  =lista.flter(function(a){
        return a["fajta"]=== "keverek"
    })
    return SZURTLISTA;
}