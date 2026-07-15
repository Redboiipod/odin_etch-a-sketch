const container = document.querySelector(".container");

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function create(size){
    
    

    for ( let i = 0; i < (size * size); i++) {      
    let squares = document.createElement("div");
            squares.classList.add("squares");
            squares.style.width = `${100 / size}%`;
            squares.style.height = `${100 / size}%`;
            squares.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = getRandomRgb();
            });
            
            container.appendChild(squares);  
    }
}


create(16);

const buttonPrompt = document.querySelector("button");
    buttonPrompt.addEventListener("click", () => {
     
        let userInput = prompt("Choose a grid size between 0 and 100");

            if ((userInput > 100) || (userInput <= 0)){
                alert("Please choose a number less than 100");
            }
            else {
            const innerDivs = container.querySelectorAll("div");
                innerDivs.forEach(div => div.remove());
            create(userInput);
            }
      
    });
    




