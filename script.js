// let x="abc";
// function changeName() {
//   let x = document.getElementById("namebox").value;
//   if (x == "")
//     document.getElementById("heading").innerHTML = `enter any name first!`;
//   else document.getElementById("heading").innerHTML = `Hello ${x}!`;
// }

let s1 = 0,s2 = 0;

function rockpaperscissor() {
  //   const arr = ["Rock", "Paper", "Scissor"];
  const arr = ["🪨", "📃", "✂️"];
  const a = "item1";
  const b = "item2";
  
  const y = (document.getElementById("item1").innerHTML =
    arr[Math.floor(Math.random() * arr.length)]);
  const z = (document.getElementById("item2").innerHTML =
    arr[Math.floor(Math.random() * arr.length)]);

  document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;

  if (y == arr[0] && z == arr[1]) {
      s2++;
      enlarge(b);
    document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;
  } 

  else if (y == arr[0] && z == arr[2]) {
      s1++;
      enlarge(a);
    document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;
  } 
  
  else if (y == arr[1] && z == arr[0]) {
      s1++;
      enlarge(a);
    document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;
  } 
  
  else if (y == arr[1] && z == arr[2]) {
      s2++;
    enlarge(b);
    document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;
  } 
  
  else if (y == arr[2] && z == arr[0]) {
      s2++;
    enlarge(b);
    document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;
  } 
  
  else if (y == arr[2] && z == arr[1]) {
      s1++;
    enlarge(a);
    document.getElementById("item3").innerHTML = `Scoreboard : ${s1} - ${s2}`;
  }
  
  else if(y==arr[0]&&z==arr[0]||y==arr[1]&&z==arr[1]||y==arr[2]&&z==arr[2]){ 
    enlarge(a);
    enlarge(b);
  }
}

//enlarge tile function
function enlarge(h) {
  document.getElementById(`${h}`).style.transform = "scale(1.15)";
  document.getElementById(`${h}`).style.transitionDuration="300ms";
  setTimeout(function(){document.getElementById(`${h}`).style.transform = "scale(1.0)";},500)
  }
