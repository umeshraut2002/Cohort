let teaType = ["black Tea", "Masala Tea", "Oolong Tea", "Green Tea", "White Tea"];
teaType.push("lemeon Tea");

console.log(teaType);

const index = teaType.indexOf("Oolong Tea");

console.log(index);

if(index > -1){
    teaType.splice(index, 1);
    console.log(index)
    console.log(teaType);
}