$(document).ready(function(){
    $("input").click(function() 
    {
        var numberOfListItem = $("li.food").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1.foodh1").text($("li.food").eq(randomChildNumber).text());
    });
});

