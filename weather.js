$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h1>Lakeview Weather Forecast</h1>" +
      "<h2>Right Now</h2>" +
        "<b>" + data.currently.summary + ". " + data.hourly.summary + "</b>"  +
        " The temperature is " + data.currently.temperature + " degrees right now with wind speeds of " + data.currently.windSpeed + " mph. " +
      "<h2>Looking Ahead</h2>" +
        "<b>" + data.daily.summary + "</b>" +
        "<h3>Temperatures</h3>" +
          "<ul><li><i> Tomorrow: </i> A low of <b>" + data.daily.data[1].temperatureMin + " degrees </b>with a high of <b>" +data.daily.data[1].temperatureMax +"</b>. </li>" +
          "<li><i> The day after tomorrow: </i> A low of <b>" + data.daily.data[2].temperatureMin + " degrees </b>with a high of <b>" +data.daily.data[1].temperatureMax +"</b>. </li>" +
          "<li><i> The following day: </i> A low of <b>" + data.daily.data[3].temperatureMin + " degrees </b>with a high of <b>" +data.daily.data[1].temperatureMax +"</b>. </li></ul>"



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/41.940190,-87.654086?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
