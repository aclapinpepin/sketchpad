var DEFAULT_GRID_SIZE   = 16;
var DEFAULT_HOVER_COLOR = "#0066FF";

var insertSquares = function(size) {
    var dimension  = 960;
    var squareSize = (960 / size) - 2 // Adjust for border size
    var wrapper    = $( ".wrapper" ).html( "" );

    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            wrapper.append( $( "<div></div>" ).addClass( "square" )
            .height(squareSize).width(squareSize));
        }
        wrapper.append( $( "<div></div>" ).css("clear", "both")); // break line
    }
};

var resetGrid = function() {
    $( ".square" ).css( "background-color", "#045" ).css( "opacity", 1 );
};

var customGrid = function() {
    do {
        var input = parseInt(prompt("Please provide a value for n (max 80).\n"
                                  + "Grid will be of dimension n * n.", "", 10));
    } while (isNaN(input) || input > 80 || input < 1);

    insertSquares(input);
}

var randomColor = function() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

var opacityChangeOnHover = function() {
    $( ".square" ).mouseenter(function() {
        var actualOpacity = $( this ).css( "opacity" );
        var newOpacity    = actualOpacity - 0.1;

        $( this ).css( "opacity", newOpacity );
    });
};

var randomChangeOnHover = function() {
    $( ".square" ).mouseenter(function() {
        $( this ).css("background-color", randomColor());
    });
};

var changeOnHover = function(hexColor) {
    $( ".square" ).mouseenter(function() {
        $( this ).css("background-color", hexColor);
    });
};

$( document ).ready(function() {
    insertSquares(DEFAULT_GRID_SIZE);
    changeOnHover(DEFAULT_HOVER_COLOR);

    $( "#reset" ).click(function() {
        resetGrid();
        $( ".square" ).unbind();
        changeOnHover(DEFAULT_HOVER_COLOR);
    });

    $ ( "#custom_grid" ).click(function() {
        customGrid();
        $( ".square" ).unbind();
        changeOnHover(DEFAULT_HOVER_COLOR);
    });

    $ ( "#random_color" ).click(function() {
        resetGrid();
        $( ".square" ).unbind();
        randomChangeOnHover();
    });

    $ ( "#opacity_color" ).click(function() {
        resetGrid();
        $( ".square" ).unbind();
        opacityChangeOnHover();
    });
});