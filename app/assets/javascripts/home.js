$(document).ready(function(){
  $.ajax({
    url: "https://launch-igniter.herokuapp.com/campaigns.json",
    dataType: "json",
    method: "get",
    error: function(){
      alert("Sorry! Couldn't Load Campaign");
    },
    success: function(data){
      var allCampaignsTemplate = $("#campaign-listing-template").html();
      for(var i = 0; i < data.length; i++){
        var campaign = data[i];
        var html = Mustache.render(allCampaignsTemplate, campaign);
        $(".campaigns").append(html);
      }
    },
  });
  $(".campaigns").on("click", ".campaign h2 a", function(){
    var id = $(this).data("id");
    var show_url = "https://launch-igniter.herokuapp.com/campaigns/" + id + ".json";
    $.ajax({
      url: show_url,
      method: "get",
      dataType: "json",
      error: function(){ alert("Error")},
      success: function(data){
        console.log(data); // this can be removed
        var singleCampaignsTemplate = $("#single-campaign-template").html();
        var html = Mustache.render(singleCampaignsTemplate, data);
        $(".campaigns").fadeOut("slow", function(){
          $(".single-campaign").html(html);
          $(".single-campaign").fadeIn();
          var reward_levels = data.reward_levels;
          var rewardLevelsTemplate = $("#reward-levels-template").html();
          for(var i = 0; i < reward_levels.length; i++){
            var reward_html = Mustache.render(rewardLevelsTemplate, reward_levels[i]);
            $(".reward-levels").append(reward_html);
          }
          $("#back-button").on("click", function(){
            $(".single-campaign").fadeOut("fast", function(){
              $(".campaigns").fadeIn();
            });
          });
        });
      }
    });
  });
});
