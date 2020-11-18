var taInput, divOutput;
var btnRun;
const newArr = [];
const tarr=[];
window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');

} //end window.onload

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

	for(var k=0;k<newArr.length;k++){
	for (var i=0;i<newArr.length;i++){
		for (var j=0;j<newArr.length;j++){

			newArr[i][j]|=(newArr[i][k] && newArr[k][j]);

			}		
		}
	}
	console.log(newArr);
	divOutput.innerHTML="Transitive Closure of the Relation Is:"
	
	document.getElementById('divOutput').innerHTML += newArr;
	
//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1
