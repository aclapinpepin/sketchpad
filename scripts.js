var DEFAULT_GRID_SIZE   = 16;
var DEFAULT_HOVER_COLOR = "#fff";

var insertSquares = function(size) {
    var dimension  = 960;
    var squareSize = (960 / size) - 2 // Adjust for border size
    var wrapper    = $( ".wrapper" ).html( "" );

    // clearGrid();

    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            wrapper.append( $( "<div></div>" ).addClass( "square" )
            .height(squareSize).width(squareSize));
        }
        wrapper.append( $( "<div></div>" ).css("clear", "both")); // break line
    }
};

// var clearGrid = function() {
//     $( ".row" ).remove();
// }

var resetGrid = function() {
    $( ".square" ).css("background-color", "#045");
};


var customGrid = function() {
    var newSize = prompt("Please choose how many squares\
                         you want in the grid:");

    // return newSize;
    insertSquares(newSize);
}

var randomColor = function() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

var changeOnHover = function(hexColor) {
    $( ".square" ).mouseenter(function() {
        $( this ).css("background-color", hexColor);
    });
};

$( document ).ready(function() {
    insertSquares(DEFAULT_GRID_SIZE);
    changeOnHover(DEFAULT_HOVER_COLOR);

    $( "#reset" ).click(function() {
        // $( ".square" ).unbind();
        resetGrid();
        // changeOnHover(DEFAULT_HOVER_COLOR);
    });

    $ ( "#custom_grid" ).click(function() {
        customGrid();
        // changeOnHover(DEFAULT_HOVER_COLOR);
    });

    $ ( "#random_color" ).click(function() {
        resetGrid();
        changeOnHover(randomColor());
    });
});