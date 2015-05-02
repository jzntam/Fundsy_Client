$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/campaigns.json",
    dataType: "json",
    method: "get",
    error: function(){
      alert("Sorry! Couldn't Load Campaign");
    },
    success: function(data){
      for(var i = 0; i < data.length; i++){
        campaign = data[i];
        $("body").append(campaign.title);
        $("body").append(campaign.description);
        $("body").append("<hr>");
      }
    },
  })
});