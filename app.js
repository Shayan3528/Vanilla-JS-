const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
  alert("Hello World");
}

function showConfirm() {
  let text;
  if (window.confirm("Press a Button")) {
    text = "You Press Oky";
  } else {
    text = "You press Cancel";
  }
  confirm.innerHTML = text;
}

function showPrompt() {
  let person = window.prompt("Enter Your Name", "Shayan");
  let text ;
  if(person === null || person ===""){
    text = "User Cancelled the prompt";
  }else{
    text = "Hello " + person +".";
  }
  prompt.innerHTML = text ;
}
