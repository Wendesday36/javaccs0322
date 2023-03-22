import  {SZAMLISTA} from "./adat.js";
console.log(SZAMLISTA)
$(function(){
    keveres1(SZAMLISTA)
})
function keveres1(lista){
    
        let van
        let megKever=[]
        let szamok
        while (megKever.length<6) {
        szamok=Math.floor(Math.random()*6)
        van=false
        for (let index = 0; index < megKever.length; index++) {
        if (szamok==megKever[index]){
        van=true
        }
        
        }
        if (van==false)
        {
        megKever.push(szamok)
        }
        
        }
        console.log(megKever)
        return megKever
        }
