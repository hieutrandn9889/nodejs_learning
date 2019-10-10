// node inspect index : command to debugger
//bam C den cuoi debugger 
// bam n de next tung dong
//bam repl: xem gia tri vd rept >> total, number, numbers, parseFloat(number) 
// sb(16) >> nhay den dong 16
console.log("hello");
debugger;
var arithmeticMean = (numbers) => {
    var total = 0
    debugger;
    for(let number in numbers){
        total = total + parseFloat(number);
        console.log(`total is: ${total}, number is: ${number}, parsefloat is: ${parseFloat(number)}`)
    }
    console.log(`Result is: ${total/ numbers.length}`)
}
arithmeticMean([1,2,3,4,5])
/**
hello
total is: 0, number is: 0, parsefloat is: 0
total is: 1, number is: 1, parsefloat is: 1
total is: 3, number is: 2, parsefloat is: 2
total is: 6, number is: 3, parsefloat is: 3
total is: 10, number is: 4, parsefloat is: 4
Result is: 2
 */