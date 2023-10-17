// ------ Data types ------- //

// String type -> " "  , ' ' , ` `;

// let a;

// let str: string;

// str = 22222;

// Number type -> 1, 1.12 , 0.34444 , -112 , 9999999

// let num: number;

// num = 12;

// // num = false;
// // num = null;

// console.log(num);

// // Boolean type -> true, false

// let load: boolean = true;
// load = false;

// // load = "loading . . .";
// console.log(load);

// // Undefined type -> undefined

// let undef: undefined = undefined;

// // Null type -> null

// let nul: null = null;

// // Object type -> Object

// // let person: object = {
// //     name: "Jahongir",
// //     age: 22,
// //     city: "New York",
// // };

// let person: {name: string; age: number; city: string; isLife: boolean; address: any} = {
//     name: "Jahongir",
//     age: 22,
//     city: "New York",
//     isLife: true,
//     address: "Buxoro",
// };

// person.address = true;
// console.log(person);

// // Any type ->

// let anyVar: any = 123;
// anyVar = "123";
// anyVar = true;
// anyVar = null;
// anyVar = undefined;
// anyVar = {};
// anyVar = [];

// // Function types -> Void function , Never  ,  Overload  , Siganture , Declaration , Expression , Arrow;

//  Void function

// function something(message: string): void {
//   console.log("sms: ", message);
// }

// something("Hello TS");

// Never type

// function never():never {
//     throw new Error("nimadur xato");
// }

// never()

// type Decloraton

// function add(a: number, b: number): string {
//   return `${a}+${b}=${a + b}`;
// }

// console.log(typeof add(12, 11));

// let l: number = 1000;

// tasks

// 1
//  function uzunlik(l: number): number {
//   return l / 100 ;
// }
// console.log(uzunlik(1000));

// 2
// function kg(m: number): number {
//   return m / 1000 ;
// }
// console.log(kg(1000));

// 3

// function add(a: number, b: number): void {
//   if(a>b){
//   console.log(a/b);

//   }
// }

// function add(a: number, b: number): number | string {
//   if (a > b) {
//     return Math.floor(a/b);
//   }
//   return " a soni  b sonidan kichik";
// }
// console.log(add(50, 30));

// 4

// function add(a: number): void {
//  console.log(Math.floor(a/10));
//  console.log(a%10);

// }
// add(25)

// 5

// function add(a: number): void {
//  console.log(Math.floor(a/10)+a%10);

// }

// add(25)

// 6

// function add(a: number): void {
//  console.log(Math.floor(a/10)*a%10);

// }

// add(25)

// 7

// function add(a: number): void {
//  console.log(Math.floor(a/100));

// }

// add(2530)

// 8

//  function add(a: number): number {
// return Math.floor(a/60)

// }

// add(2530)

// 1

// function add(a: number): string | string  {
//   if (a > 0) {
//     return `${a} soni musbat son`;
//   }
//     return `${a} soni manfiy son`;

// }
// console.log(add(-50));

// 2

// function add(a: number): string | string  {
//   if ( a  % 2 ==1 ) {
//     return `${a} soni toq  son`;
//   }
//     return `${a} soni juft son`;

// }
// console.log(add(51));

// 3

//  function add(a: number): string | string  {
//   if ( a  % 2) {
//     return `${a} soni juft son`;
//   }
//     return `${a} soni toq son`;

// }
// console.log(add(51));

// 4

// function add(a: number, b: number): string | string {
//   if (a > 0 && b > 0) {
//     return `${a} va ${b} sonlari 0 dan katta`
//   }
//   if (a > 0 && b < 0) {
//     return `${a} soni 0 dan katta ${b} soni 0 dan kichik`;
//   }
//    if (a < 0 && b > 0) {
//      return `${a} soni 0 dan kichik ${b} soni 0 dan katta`;
//    }
//   return `${a} va ${b} sonlari 0 dan kichik`;
// }
// console.log(add(-59, -80));

// 5

// function nimadur(a: number, b: number, c: number): boolean{
//   if(a > b && b > c){
//     return true
//   }
//   return false
// }
// console.log(nimadur(70,60,50));

// 6
// function nimadur(a: number, b: number, c: number): boolean{
//   if(a < b && b < c){
//     return true
//   }
//   return false
// }
// console.log(nimadur(50,70,60));

// 7

// function toq(a: number, b: number): boolean {
//   if ( a  % 2 ==1 && b % 2 ==1) {
//     return true;
//   }
//     return false;
// }

// console.log(toq(11,21));

// 8

// function toq(a: number, b: number, c: number, d:number): boolean {
//   if (a > 0 && b > 0 && c > 0 && d > 0  ) {
//     return true;
//   }
//   return false;
// }

// console.log(toq(10, 20, 30, 40));

// 9

//  function toq(a: number, b: number, c: number): boolean {
//   if (a > 0 && b > 0 && c < 0 ||
//       a > 0 && b < 0 && c > 0 ||
//       a < 0 && b > 0 && c > 0
//     ) {
//     return true;
//   }
//   return false;
// }

// console.log(toq(10, 20, -30));

// 10

// function haftaKuni(a: number): string {
//   switch (a) {
//     case 1:
//       return "Dushanba";
//     case 2:
//       return "Seshanba";
//     case 3:
//       return "Chorshanba";

//     case 4:
//       return "Payshanba";
//     case 5:
//       return "Juma";
//     case 6:
//       return "Shanba";
//     case 7:
//       return "Yakshanba";

//     default:
//       return "Bunday hafta kuni yuq";
//   }

// }
// console.log(haftaKuni(13));

// 11

// function oddNumber( num: number):number{
//  if( num % 2 == 0){
//   return num+=1
//  }
//  return num = num-1

// }

// console.log(oddNumber(3));

// 12

// function oddNumber( num: number):number{
//  if( num % 2 == 0){
//   return num+=3
//  }
//  return num = num-2

// }

// console.log(oddNumber(3));


// 13
// telefon nomerga qarab kompaniya nomi toping

// function kompaniya(telNumber: number):string {
//   switch (telNumber) {
//     case 99890123456:
//       return "Beeline";
//     case 998911234567:
//       return "Beeline";
//     case 998941234567:
//       return "Usell";
//     case 9989512345667:
//       return "Usel";
//     case 998991234567:
//       return "Uzmobile";
//     default:
//       return "Bunday aloqa kompaniyasi  yuq";
//   }

// }
// console.log(kompaniya(998911234567));

// 14

// function big(n: number, m:number):string{
//  if(n > m ){
//   return `${n} soni ${m} sonidan katta`
//  }
// if(n===m){
//   return `${m} soni ${n} soniga teng`;
// }
//  return `${m} soni ${n} sonidan katta`;
// }
// console.log(big (5, 6));

// 15

//  function toq(a: number, b: number, c: number): string {
//   if (a > b && a  > c ) {
//     return `${a} soni eng katta son`

//   }if( a < b && b > c){
//     return `${b} soni eng katta son`
//   }
//   if( a < c && b < c){
//     return `${c} soni eng katta son`
//   }
//  return `Hamma sonlar teng`
// }

// console.log(toq(10, 20, 30));

// 16

// function toq(a: number, b: number, c: number): string {
//   if (a < b && a < c) {
//     return `${a} soni eng kichik son`;
//   }
//   if (a > b && b < c) {
//     return `${b} soni eng kichik son`;
//   }
//   if (a > c && b > c) {
//     return `${c} soni eng kichik son`;
//   }
//   return `Hamma sonlar teng`;
// }

// console.log(toq(10, 20, 30));

// 17

// function genderFunc(gender: string):string{
//   if(gender==="male"){
//     return `he is a man 🧑`
//   }
//    if (gender === "female") {
//      return `he is a woman 👩`;
//    }
//   return `there is no such gender`;
// }

// console.log(genderFunc("male"));

// 18

// function stipendiya(a: number): string {
//   switch (a) {
//     case 1:
//       return "25000 sum";
//     case 2:
//       return "35000 sum";
//     case 3:
//       return "45000 sum";

//     case 4:
//       return "55000 sum";
//     case 5:
//       return "100000 sum";

//     default:
//       return "Bunday baho yuq";
//   }

// }
// console.log(stipendiya(4));

// 19

// function nimadur(num: number): string{
//   if(num%2==1 && num > 0){
//     return `${num} soni toq va musbat`
//   }
//   if (num % 2==1 && num < 0) {
//     return `${num} soni toq va manfiy`;
//   }
//    if (num % 2 && num > 0) {
//      return `${num} soni toq va musbat`;
//    }
//     if (num % 2 && num < 0) {
//       return `${num} soni toq va manfiy`;
//     }
//     return "bunaqa son mavjud emas"
// }
// console.log(nimadur(1234));

// 20

// function age(year: number):number{
//  return 2023 - year
// }
// console.log(age(1986));

// 21

// function nimadur(a:number, b:number, c:number):boolean{
//   if(a <= b && b <= c){
//     return true
//   }
//   return false
// }
// console.log(nimadur(3, 4, 5));

// 22

// function nimadur(a:number, b:number):boolean{
//   if(a % 2 || b % 2 == 1 ){
//     return true
//   }
//   if(a % 2 ==1 && b % 2){
//     return true
//   }
//   return false
// }
// console.log(nimadur(4,4));

// 23

// function nimadur(a:number, b:number, c:number):boolean{
//   if(a > 0 && b > 0 && c > 0){
//     return true
//   }
//   return false
// }
// console.log(nimadur(3, 4, -7));

// 24

// function nimadur(a:number, b:number, c:number):boolean{
//   if((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0 ) || (a < 0 && b < 0 && c > 0)){
//     return true
//   }
//   return false
// }
// console.log(nimadur(-3, 4, -7));

// =======================

// 25

// =======================

// 26

// ====================

// 27

// function komputer(komp: string):string {
//   switch (komp) {
//     case "mac":
//       return "25000 sum";
//     case "asus":
//       return "35000 sum";
//     case "acer":
//       return "45000 sum";
//     case "hp":
//       return "55000 sum";
//     case "lenovo":
//       return "100000 sum";
//     default:
//       return "Bunday kopmuter yuq";
//   }

// }
// console.log(komputer("nimadur"));


