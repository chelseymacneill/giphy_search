
// A $( document ).ready() block.
$( document ).ready(function() {
    
    // create an array of strings. Save it to a variable called `topics`.
    var players = ['Charles Barkley', 'Draymond Green', 'Rasheed Wallace', 'Ben Wallace']
    
    // take the topics in this array and create buttons in your HTML.
    function createPlayersButtons () {
        for (var i = 0; i < players.length; i++) {
            // Creates a new new button
            var b = $('<button>');
            // Add a class to the new button
            b.addClass('player');
            // Add a data attribute for each index of topics
            b.attr('data-playerName', players[i]);
            // Text that you want to display on the button
            b.text(players[i]);
            // Append the button to the html document
            $('#players').append(b);
            console.log(b)
        };
    };
    
    //When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    
    $('#display').on("click", function()
    
    //When the user clicks one of the still GIPHY images, the gif should animate. 
    //If the user clicks the gif again, it should stop playing.
    
    // Under every gif, display its rating (PG, G, so on).
    // * This data is provided by the GIPHY API.
    //* Only once you get images displaying with button presses should you move on to the next step.
    
    // Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
    $('add-player-button').on('click', function(event) {
        // Stops the default behavior of the input from overriding our desired behavior
        event.preventDefault();
        // Grab the text from the user input
        var player = $('player-input').val().trim(); // why is this val and not value
        // Push this name to the array of players 
        players.push(player);
        
    });
    // Deploy your assignment to Github Pages.
    
    
    
    
    // Call CreatePlayerButtons function to build the default buttons
    createPlayersButtons();
}); // end of the document ready block


