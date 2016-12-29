//we need an input element, id, value
//we will need a button
//  on button click, run a function to change the background
// based on the input
$(document).ready(function(){
    $("#submit-btn").change(changeBackground);
    function changeBackground(){
    //define function that runs whent the button is clicked
        //get city name input from input element
        var cityInput = $("#city-type").val();
        
        //San Fran
        if(cityInput == "San Francisco" || cityInput == "SF" || cityInput == "Bay City"){
            $('body').css("background: url", "../images.sf.jpg");
            //if city input is SF, make background sf.jpg
        }
        
        //Austin
        else if ( cityInput == "Austin" || cityInput == "ATX"){
        
        
            //if city input is Austin, make background austin.jpg
        }
        
        //NYC
        else if( cityInput == "New York" || cityInput == "New York City" || cityInput == "NYC"){
        
            //if city input is NYC, make background NYC.jpg
        }
        
        //LA
        else if( cityInput == "Los Angeles" || cityInput == "LA" || cityInput == "LAX"){
    
        //if city input is LA, make background LA.jpg
        }
    
        //Sydney
        else if( cityInput == "Sydney" || cityInput == "SYD" ){
    
        //if city input is Sydney, make background sydney.jpg
        }
    };
});