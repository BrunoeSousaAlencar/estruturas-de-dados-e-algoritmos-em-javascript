// Operadores Bitwise 
//aula sobre o assunto: https://youtu.be/JbGf_hd6g_Q



/*  &(E)
    Só será 1 se, na mesma coluna os dois forem 1,
    caso contrario é 0,
*/

let n1 = 10; // codigo binario: 1010
let n2 = 12; // codigo binario: 1100

let res1 = n1 & n2; 

console.log(res1); // resualtado covertido é(&): 8
                  // resultado em números binarios(&): 1000




             
/* |(Ou)
   Só irá ser 0, se os dois forem 0,
   caso um deles sejá 1 ou os dois, dará 1.
*/

let s1 = 10; // codigo binario: 1010
let s2 = 11; // codigo binario: 1011

let res2 = s1 | s2;

console.log(res2); // resualtado covertido é(|): 11
                  // resultado em números binarios(|): 1011




/* ^(Ou exclusivo(Xor)) 
   Se na coluna estiver um 1 e 1, o resultado será 0,
   se 0 for 0, resualtado será 0 novamente,
   só irá ser 1, caso sejá 1 e 0 na mesma coluna.
*/

let t1 = 10; // codigo binario: 1010
let t2 = 11; // codigo binario: 1011

let res3 = t1 ^ t2;

console.log(res3); // resualtado covertido é(^): 1
                  // resultado em números binarios(^): 1




/* <<(Deslocamento para esquerda(left shift))
    Desloca todos os números para esquerda.

*/
let d1 = 30;

let res4 = d1 << 1;

console.log(res4); // dobra o valor.


/* >>(Deslocamento para direita(left shift))
   Desloca todos os números para direita.
 */

   let d2 = 90;

   let res5 = d2 >> 1;
   
   console.log(res5); //divide pela metade o valor.