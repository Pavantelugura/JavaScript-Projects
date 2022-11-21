// Select 7 colors
let colors = ['red', 'green', 'blue', 'orange', 'purple', 'black', 'yellow'];

// Change the background of canvas when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    // Select a random number between 0 and 6
    let index = parseInt((Math.random()*colors.length)+1);
    // grab the canvas 
    let canvas = document.getElementById('canvas');

    canvas.style.background = '${colors[index]}'

})