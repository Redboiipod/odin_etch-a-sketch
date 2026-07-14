const container = document.querySelector(".container");



function create(size){
    


    let totalSquares = (size * size);
  
    // let sizing = 50;

    let sizing = ((1000/totalSquares) * size);   /* (1000/size) also works, oh well */
    alert(sizing);

    for ( let i = 0; i < totalSquares; i++) {      
    const squares = document.createElement("div");
        squares.classList.add("squares");
        squares.style.width = `${sizing}px`;
        squares.style.height = `${sizing}px`;
        container.appendChild(squares);    

    }
}

create(4);

