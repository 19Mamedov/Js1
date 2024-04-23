let number = [3,3,6,9,12,15];
console.log(number);

let numsay = number.length;


let cem = 0;
for (let i = 0; i < numsay; i++) {
    cem += number[i];
}
console.log("Ededlerin cemi:", cem);
console.log("Array's Length:",numsay);
let edediorta = cem / numsay;
console.log("Ededi Ortasi:",edediorta);

