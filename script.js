document.getElementById('input').value = " ";

function Myfunction() {
  const input = document.getElementById('input').value;
  let rows = input;
  for (let i = 0; i < rows; i++) { 
    let space = `${String.fromCharCode(160)}`;
    for (let k = 0;k < rows - i; k++) {
    space +=  `${String.fromCharCode(160)}`;
    }
   for (let j = 0;j <= i; j++) {
      space += `*${String.fromCharCode(160)}`  ;
    } 
    document.getElementById('div1').innerHTML += space + '</br>' ;
    document.getElementById('form').style.visibility = "hidden" ;
    console.log(space);
    }

}
