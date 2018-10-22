var userBase = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", 'brunofin', 'comster404'];

for (x = 0; x < userBase.length; x++) {
  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/' + userBase[x],
    indexValue: x,
    headers: {
      'Client-ID': 'niiwlbqdujvfb5tfv6e5rspirdf633m'
    },
    error: function(data) {
      document.getElementById('notActive').innerHTML += '<div class = "row user"> <div class="col-xs-12 col-sm-2"> <img class="logo" src="https://image.freepik.com/free-icon/sad-emoticon-square-face_318-56465.jpg"> </div> <div class="col-sm-5 data"> <p>' + userBase[this.indexValue] + '</p>'
    },
    success: function(data) {
      if (data.stream == null) {
        document.getElementById('offline').innerHTML += '<a href = "https://www.twitch.tv/' + userBase[this.indexValue] + '" target="_blank"> <div class = "row user"> <div class="col-xs-12 col-sm-2"> <img class="logo" src="https://image.freepik.com/free-icon/resting-emoticon-square-face_318-56531.jpg"> </div> <div class="col-sm-5 data"> <p>' + userBase[this.indexValue] + '</p> </div> <div class="col-sm-5 data"> <p>Stream N/A</p> </div> </div> </a> ';
      } else {
        document.getElementById('online').innerHTML +=
          '<a href = "' + data.stream.channel.url + '" target="_blank"> <div class = "row user"> <div class="col-xs-12 col-sm-2"> <img class="logo" src="' + data.stream.channel.logo + '"> </div> <div class="col-sm-5 data"> <p>' + userBase[this.indexValue] + '</p> </div> <div class="col-sm-5 data"> <p>' + data.stream.game + '</p> </div> </div> </a> ';
      }
    }
  });
};