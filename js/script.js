// snack1
var prima = prompt ('inserisci testo');
var seconda = prompt ('inserisci testo');

var primalunghezza = seconda.length;
var secondalunghezza = prima.length;

if(prima < seconda){
    document.getElementById('nomi').innerHTML = prima + ' ' + seconda;
} else if (seconda < prima){
    document.getElementById('nomi').innerHTML = seconda + ' ' + prima;
}
