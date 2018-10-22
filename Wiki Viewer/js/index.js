$('#search').click(function() {
  var searchForm = document.getElementById("inputOne").value;
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php/w/api.php?action=opensearch&format=json&search=" + searchForm,
    dataType: "jsonp",
    jsonpCallback: "logResults"

  });
});

function logResults(json) {
  var find = "";
  for (x = 0; x < 10; x++) {
    if (!json[3][x]) {
      break;
    } else {
      find += "<a href='" + json[3][x] + "'>" + "<div class ='block'>" + "<h3 class = 'fonts'>" + json[1][x] + "</h3>" + "<p class = 'fonts'>" + json[2][x] + "</p>" + "</div>" + "</a>";
    }
  }
  document.getElementById('output').innerHTML = find;

}