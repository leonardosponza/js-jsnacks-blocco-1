// snack1
var primaparola = prompt ('inserisci testo');
var secondaparola = prompt ('inserisci testo');

var primaparola = secondaparola.length;
var secondaparola = primaparola.length;

if(primaparola < secondaparola){
    document.getElementById('nomi').innerHTML = primaparola + ' ' + secondaparola;
} else if (secondaparola < primaparola){
    document.getElementById('nomi').innerHTML = secondaparola + ' ' + primaparola;
}
