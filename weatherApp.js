$(document).ready(function(){

    $('#getWeather').on('click', function(){
        api()
    })

    
})

function api() {
    var apiKey = 'bd560fcc516e28b7bcc4ebb782fb5b13';
    var zipcode = '80920';
    var url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + apiKey + '';
    console.log(url)
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        data: {},
        success:function(data) {
            console.log(data);
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
    });
}