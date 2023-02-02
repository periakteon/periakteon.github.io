// in-line yorum satırı

/*
multi-line yorum satırı
*/

/* ------------------------------- DEĞİŞKEN TANIMLAMA ------------------------------- */

var myName = "Masum";
var myLastName = "Gökyüz";

/*-----------------------------------------------------------*/
var myVar;  // değişken undefined olarak tanımlandı
myVar = 5;  // undefined olarak tanımlanan değişkene "5" değeri verdik

/*-----------------------------------------------------------*/
var myVar2;
myVar2 = 5;
var myNum;
myNum = myVar2;   // undefined olarak tanımlanan "myNum" da artık "myVar2" değişkenine eşit oldu, yani 5'e eşit.

/*-----------------------------------------------------------*/
var camelCaseVariable = "Değişkenler camelCaseVariable olarak tanımlanır";
var basHarflerHerZamanBuyuk;


/* ------------------------ "var" ve "let" ARASINDAKİ FARKLAR ------------------------------- */

var filozof = "Kant";
var filozof = "Platon";
console.log(filozof);  // "var" ile en son tanımlanan "filozof" değişkeni "Platon" olduğu için sonuç "Platon" olarak döner

let philosopher = "Kant";
let philosopher = "Platon";
console.log(philosopher); // bu ise hata verir çünkü "let" ile yalnızca tek bir kez değer atanabilir.
