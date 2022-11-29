// console.log(window);
// alert('Hi');
// window.alert('Hi2');

// console.log(document);
//To check HTML code in console.
// console.dir(document);
//To check all the parsed code, which is DOM.

// document.body.children[1].children[0].href = "https://amazon.com";
// This is drilling a document method

// By Element ID
// let anchorElement = document.getElementById('external-link');

// anchorElement.href= 'https://google.com';
// console.dir(anchorElement);

// By Query Selector
// let anchorElement= document.querySelector('h1');
// console.dir(anchorElement);
// anchorElement.href='https://google.com';

//ADD AN ELEMENT
//1. नया element बनाना है, जिसको हम append करना चाहते है
// let newAnchorElement = document.createElement("a");
// newAnchorElement.href = "https://google.com";
// newAnchorElement.textContent = "This leads to google";
// //2. एक और नया element बनाना है,जिससे हमे उसके parent का access मिल जाए
// let firstParagraph = document.querySelector("p");
// //3. अब उस नए element को parent element append कर देंगे
// firstParagraph.append(newAnchorElement);

// //REMOVE AN ELEMENT
// //1. उस element select करे, जिसे remove करना चाहते है
// let firstH1Element = document.querySelector("h1");
// //2. Remove करे
// firstH1Element.remove();

// // //MOVE AN ELEMENT
// firstParagraph.parentElement.append(firstParagraph);

// // innerHTML
// console.log(firstParagraph.textContent);
// console.log(firstParagraph.innerHTML);

// firstParagraph.textContent = "Changed by <strong>textContent</strong>";

// firstParagraph.innerHTML = "Hello,<strong> You</strong>";
