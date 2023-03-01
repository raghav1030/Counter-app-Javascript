let countValue = document.querySelector('.counter');

// using normal Function

const increment = () => {
    var value = parseInt(countValue.innerText);
    value = value + 1 ;
    countValue.textContent = value ;

}

const decrement = () => {
    var value = parseInt(countValue.innerText);
    value = value - 1 ;
    countValue.textContent = value ;

}

// using  Event Listener

// let neg = document.getElementById('neg-btn');
// let pos = document.getElementById('pos-btn');

// neg.addEventListener( "click" , () =>{
//     var value = parseInt(countValue.innerText);
//     value = value - 1;
//     countValue.textContent = value;
// } );


// pos.addEventListener( "click" , () =>{
//     var value = parseInt(countValue.innerText);
//     value = value + 1;
//     countValue.textContent = value;
// } );