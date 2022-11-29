// let paragraphElement= document.getElementById('button');
// let paragraphElement=document.body.firstElementChild;
let paragraphElement = document.body.querySelector("p");

// console.log(paragraphElement);
function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
  console.log("paragraph clicked");
}

paragraphElement.addEventListener("click", changeParagraphText);


let inputTextElement = document.getElementById("inputText");
function changeInputText(eventObject) {
  // let valueInput = inputTextElement.value;
  let valueInput=eventObject.target.value;
  // let valueInput= event.data;

   console.log(valueInput);//
  // console.log(valueInput);
  console.dir(eventObject);
}
inputTextElement.addEventListener("input", changeInputText);
