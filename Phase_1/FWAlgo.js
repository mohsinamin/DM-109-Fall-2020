var taInput, divOutput;
var btnRun;
const newArr = [];
const outerArr=[];
const tarr=[];
window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
	var n =window.prompt("Enter size");
	createMatrix(n);


} //end window.onload

function createMatrix (n) {
	var innerArr;
	//var outerArr = [];
  
	for (var i=0; i<n; i++){
	  innerArr = [];
	  for (var j=0; j<n; j++) {
		//innerArr.push(0);
		for (var k=0;k<n*n;k++){
		var y =Math.random();
		if(y<0.5){
			y =Math.floor(y)
		}
		else{
		y= Math.ceil(y)
		}
	}
	outerArr.push(y);
	
	  }
	//  outerArr.push(y);
	
}
console.log(outerArr);
FwAlgo();
}
  

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	
	//divOutput.innerHTML+="Add your output here. Remove this!"
	divOutput.innerHTML+=newArr;
	var x = 0;

	var array = Array();
	line=document.getElementById('txtInput').value; 
	 for (var i=0; i < line.length; i++) {

        if (/\S/.test(line[i])) {

			if (line[i]!=","){
				array[x]=line[i];
			x++;	
		}
        }
       if (/^[,]+$/.test(line[i][i])) {
		
			if (line[i]!=","){
			array[x]=(line[i][i]);
			x++;}
		}		
	}
	//console.log(array);
while(array.length) newArr.push(array.splice(0,4));
console.log(newArr);
FwAlgo();
}//end run

function FwAlgo(){
	//Implement your solution here
	var i=0;
	var j=0;
	var k=0;

	for(var k=0;k<outerArr.length;k++){
	for (var i=0;i<outerArr.length;i++){
		for (var j=0;j<outerArr.length;j++){

			outerArr[i][j]|=(outerArr[i][k] && outerArr[k][j]);

			}		
		}
	}
	console.log(outerArr);
	divOutput.innerHTML="Transitive Closure of the Relation Is:"
	var per=performance.now()
	document.getElementById('divOutput').innerHTML += outerArr;
	
	document.getElementById('divOutput').innerHTML += "<br>"+"Performance is "+per;
	
	//document.getElementById('divOutput').innerHTML += per;
	
	console.log(performance.now())
//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1
