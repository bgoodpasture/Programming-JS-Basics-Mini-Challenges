var banana = 5
var apple = 6
console.log(banana + apple);

var peach = "hot chocolate"
var orange = " cold chocolate"
console.log(peach + orange);

var pies = ["cherry","rubarb","blackbery" ];
var cakes = ["vanilla", "chocolate", "pistachio"];
var deserts = [pies, cakes];
console.log(deserts[1][2] + " and " + deserts[0][1]);

var sum = 15;
if (sum < 100){
  alert ("variable is less than 100");
}else{
  alert(sum +" is greater than 100")
}

if (peach == orange){
  alert ("banana pudding");
} else {
  alert ("applesauce");
}

function getName (name){
  alert ("you've entered "+ name)
}
getName(prompt("enter name"))

function noArguements (){
  console.log("no arguements");
}
noArguements ()

function doorPrize(doorNumber) {
  if(doorNumber == 1){
    alert("your prize is banana")
  }else if(doorNumber == 2){
   alert("your prize is a apple")
  }else if(doorNumber == 3){
   alert("your prize is avacado")
  }else{
   alert("nothing for you")
  }
}
doorPrize(3)
