const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement= document.getElementById("remaining-char");

function updateRemainingCharacter(event){
    const enterdText=event.target.value;
    console.log(enterdText);
    const enterdTextLength= enterdText.length;
    console.log(enterdTextLength);
    const remainingCharacters= 60-enterdTextLength;
    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input",updateRemainingCharacter);

const spanElement= document.getElementById('remaining-char');

// spanElement.style.color='rgb(255,0,0)';
spanElement.className='warning';
// spanElement.classList.add('warning');