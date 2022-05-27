// --------task 3 operators/----\\


var array =[];
var sum = 0;
var mult = 1;
var div = [];
var value;
for (i = 1; i <= 3; i++){
    var arrayValu = prompt("enter your numbers");
    passnumbers = Number(arrayValu);
    sum += passnumbers
    mult*=passnumbers
    array.push(passnumbers);
    if (passnumbers =! 0) {
        div.push(passnumbers)
    }
}
document.write(`<h1> your entered  ${array.join("-5")}</h1>`)
document.write(`<h2>the sum of ${array.join("+")} =  ${sum}</h2>`)
document.write(`<h2>the mltubla ${array.join("x")} = ${mult}</h2>`)
document.write( `<h2>the mltubla ${ array.join( "/" ) } = ${ div }</h2>` )
