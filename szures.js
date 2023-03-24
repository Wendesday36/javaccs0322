
function szuresFajtaSzerint(lista,kulcs,szuresiFeltetel){
    const SZURTLISTA  =lista.flter(function(a){
        return a[kulcs]=== szuresiFeltetel
    })
    return SZURTLISTA;
}