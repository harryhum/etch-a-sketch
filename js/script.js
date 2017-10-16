$(document).ready(function() {
    createGrid(16);
    draw();
    reset();
    shake();
});

function createGrid(size) {
    var div = document.createElement('div');
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            div[i] = document.createElement('div');
            $(div[i]).addClass('cell').addClass('cellSize');
            document.getElementById('grid').appendChild(div[i]);
        };  
    };
    $('.cellSize').width((352 / size) - 2);
    $('.cellSize').height((352 / size) - 2);
};

function draw() {
    $('.cell').on('mouseover', function() {
    $(this).addClass('draw');
});
};

function reset() {
    $('#clear').on('click', function() {
    var cells = parseInt(window.prompt('Enter new number of cells per side'));
    $('.cell').remove();
    createGrid(cells);
    draw();
    shake();
});
};

function shake() {
    $('.shake').animate({'right': '20px'}, 150);
    $('.shake').animate({'left': '20px'}, 150);
    $('.shake').animate({'right': '20px'}, 150);
    $('.shake').animate({'left': '20px'}, 150);
    $('.shake').animate({'right': '0px'}, 150);
    $('.shake').animate({'left': '0px'}, 150);
};
