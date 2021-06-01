// snack1
// var prima = prompt ('inserisci testo');
// var seconda = prompt ('inserisci testo');

// var primalunghezza = seconda.length;
// var secondalunghezza = prima.length;

// if(prima < seconda){
//     document.getElementById('nomi').innerHTML = prima + ' ' + seconda;
// } else if (seconda < prima){
//     document.getElementById('nomi').innerHTML = seconda + ' ' + prima;
// }


// snack2
//   var somma = 0

//  for (var i = 0; i < 5 ; i++) {
//        numero = parseInt(prompt('inserisci numero'));
//         somma += numero;
//       }
//       document.getElementById('som').innerHTML = somma;
//       console.log(somma);
    
     

// while(i < 5){
//        numero = parseInt(prompt('inserisci numero'));
//         somma += numero;
//         i++;
//       }
//   document.getElementById('som').innerHTML = somma;
//   console.log(somma);
  
//   var i = 0


// snack3

var array = [];

for (var i = 0; i < 6 ; i++) {
          var numero = parseInt(prompt('inserisci numero'));
           if(numero % 2 != 0 ){
              array.push(numero);
        }     
 }
     
    
 console.log(array);