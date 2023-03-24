import { OBJEKTUMLIST } from "./adat";

function szuresFajtaSzerint(lista,kulcs,szuresiFeltetel){
    const SZURTLISTA  =lista.flter(function(a){
        return a[kulcs].includes(szuresiFeltetel)
    })
    return SZURTLISTA;
}
const NEVINPUTELEM  =$("#nev")
const FAJTAINPUTELEM = $("#fajta")
NEVINPUTELEM.on("keyup",function(){
    let nevErtek =NEVINPUTELEM.val()
    let szurtList = szuresFajtaSzerint(OBJEKTUMLIST,"nev",nevErtek);
    console.log(szurtList)
})

