$.getJSON('http://ipinfo.io', function(data){
  var city = data.city + ', ' + data.country;
  var query = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=343cfc83d30ae3ad205f5745debe351e";
  
  $.get(query, function(results){  
    var temp = results.main.temp;
    var tempCel = temp - 273.15;
    var tempFar = temp * 9/5 - 459.67;
    var finalTemp = tempCel.toPrecision(3);
    var finalTemp2 = tempFar.toPrecision(3);
    var description = results.weather[0].main;
    var switchCase = results.weather[0].id;
    var iconPrint = '';
    if(switchCase>=950)
          iconPrint = '<i class="fa fa-sun-o fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=900 && switchCase<950)
          iconPrint = '<i class="fa fa-exclamation-triangle fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=801 && switchCase<900)
          iconPrint = '<i class="fa fa-cloud fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=800)
          iconPrint = '<i class="fa fa-sun-o fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=700 && switchCase<800)
          iconPrint = '<i class="fa fa-cloud fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=600 && switchCase<700)
          iconPrint = '<i class="fa fa-cog fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=500 && switchCase<600)
          iconPrint = '<i class="fa fa-tint fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=300 && switchCase<500)
          iconPrint = '<i class="fa fa-tint fa-4x" aria-hidden="true"></i>';
    else if(switchCase>=200 && switchCase<300)
          iconPrint = '<i class="fa fa-bolt fa-4x" aria-hidden="true"></i>';
    else
          iconPrint = 'Error';
    
    document.getElementById('temp').innerHTML = finalTemp + '&#176; C';
    document.getElementById('temp2').innerHTML = finalTemp2 + '&#176; F';
    document.getElementById('outlook').innerHTML = description;
    document.getElementById('icon').innerHTML = iconPrint;
  });
  
  document.getElementById('location').innerHTML = city;
});

$('#tempChange').click(function() {
  var input = document.getElementById('temp').value;
  $('span').toggle();
  
  
});