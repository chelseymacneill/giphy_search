
// Feature list
// If I have time I'll limit it to teams in the 2019 NBA playoffs


// A $( document ).ready() block.
$( document ).ready(function() {
    
    // create an array of strings. Save it to a variable called `topics`.
    var teams = ['Golden State Warriors', 'Houston Rockets', 
    'Miluakee Bucks', 'Philedelphia Seventy Sixers', 'Portland TrailBlazers']
    
    //var players = ['Charles Barkley', 'Draymond Green', 'Rasheed Wallace', 'Ben Wallace']
    
    // take the topics in this array and create buttons in your HTML.
    function createTeamsButtons () {
        for (var i = 0; i < teams.length; i++) {
            // Creates a new button
            var b = $('<button>');
            // Add a class to the new button
            b.addClass('team');
            // Add a data attribute for each index of topics
            b.attr('data-teamName', teams[i]);
            // Text that you want to display on the button
            b.text(teams[i]);
            // Append the button to the html document
            $('#teams').append(b);
            //console.log(b)
        };
    };
    
    //When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    function displayTeamGifs () {
        
        // Call the API based on which team button was clicked
        var apiLimit = 10;
        var apiKey = '6uwYL0toyPhGto5jWNPJvt5LRwOuCpCL';
        var q = $(this).attr('data-teamName'); // Grabs the team corresponding to the button click
        var apiCallUrl = 'http://api.giphy.com/v1/gifs/search?q='+ q + '&api_key=' + apiKey + '&limit=' + apiLimit;
        // Ajax call to grab the gifs
        $.ajax({
            // buiild the url for the api call 
            url : apiCallUrl,
            method : "GET"
        }).then (function(apiResponse) {
            //Function to manipulate response goes here
            console.log(apiResponse);
            console.log(q)
            //console.log(apiCallUrl)
            
            // Need to create a for loop for all 10 gifs to be displayed 
            
            for (var i = 0; i < 10; i++) {
                
                // Creating a div to hold the movie
                var gifDiv = $("<div class='gif'>");
                
                //Storing the title
                var pTitle = $("<p>").text("Title: " + apiResponse.data[i].title)
                
                //Displaying the title
                gifDiv.append(pTitle)

                // Storing the rating data
                var pRating = $("<p>").text("Rating: " + apiResponse.data[i].rating);
                
                // Displaying the rating
                gifDiv.append(pRating);
                
                // Creating an element to hold the image
                var gif = $("<img>").attr("src", apiResponse.data[i].images.fixed_height.url);
                gifDiv.append(gif)
                
                // Append the built div to the page
                $("#MainDisplay").append(gifDiv);
                
            } // end of for loop
        });
    };
    
    
    // Pause function 
    $('#display').on("click", function stopGIF() {});
    
    //When the user clicks one of the still GIPHY images, the gif should animate. 
    $('.gif').on('click', function() { // gif is not an html element yet
        // Grabs the current attribute data state of the gif clicked and sets it equal to state
        var state = $(this).attr('data-state')
        
        // If the current state is still, swtich it. (and vice versa). Do the same for data-state. 
        //If the user clicks the gif again, it should stop playing.
        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate')
        } else $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still')
    });
    
    
    // Under every gif, display its rating (PG, G, so on).
    
    //* Only once you get images displaying with button presses should you move on to the next step.
    
    // Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
    $('add-team-button').on('click', function(event) {
        // Stops the default behavior of the input from overriding our desired behavior
        event.preventDefault();
        // Grab the text from the user input
        var team = $('team-input').val().trim(); // why is this val and not value
        // Push this name to the array of teams 
        teams.push(team);
        
    });
    // Deploy your assignment to Github Pages.
    
    
    // On click of a button with class team display gifs for that team
    $(document).on("click", ".team", displayTeamGifs);
    // Call CreateteamButtons function to build the default buttons
    createTeamsButtons();
}); // end of the document ready block
