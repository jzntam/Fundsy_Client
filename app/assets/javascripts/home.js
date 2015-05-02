$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/campaigns.json",
    dataType: "json",
    method: "get",
    error: function(){
      alert("Sorry! Couldn't Load Campaign");
    },
    success: function(data){
      var template = $("#campaign-listing-template").html();
      for(var i = 0; i < data.length; i++){
        var campaign = data[i];
        var html = Mustache.render(template, campaign);
        $(".campaigns").append(html);
      }
    },
  })
});
