var weight = [32,38,42,45,43,34,36,41,48,35]
var sum = 0
function setup() {
  createCanvas(400,400);
for (i=0;i<weight.length;i++){
  sum = sum + weight[i]
}

var av = sum / weight.length
console.log (av)

}

function draw() 
{
  background(30);

}

 

