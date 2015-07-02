var insertSquares = function() {
    for (i = 0; i < 16; i++) {

        var row = "<div>";

    for (j = 0; j < 16; j++) {
        row += "<div class='square'>test</div>";
    }
        row += "</div>";
        $( "#container" ).append( row );
    }
};

var resetGrid = function() {
    $( ".square" ).css("background-color", "#045");
};


var customGrid = function() {
    var newSize = prompt("Please choose how many squares\
                         you want in the grid:");
}

$( document ).ready(function() {
    insertSquares();

    $( "#reset" ).click(function() {
      resetGrid();
    })

    $( ".square" ).hover(function() {
      $( this ).css("background-color", "#fff");
    });
});