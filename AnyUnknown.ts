const numberBig = (Number as any).MAX_SAFE_INTEGER
console.log("number Big")
console.log(numberBig)



let num:any = 5
console.log("num.........");
console.log(num)
num = "6"
console.log(num)



let value:unknown;
value = 4;
value = true
value = "jyoti";
if(typeof value === "number"){
    console.log(value+10)
}else if(typeof value === "boolean"){
    console.log("boolean = "+value)
}else{
    console.log("string = "+value)
}
