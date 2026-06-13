function resizeVideos() {
    
    var aspectRatio = 1;   
    var containerWidth = $(".facebook-responsive").width();
    $(".facebook-responsive iframe").attr("width", containerWidth);
    $(".facebook-responsive").height(containerWidth * aspectRatio);
  };


function showHideMoreSection(sender) {
    var panelId = $(sender).attr('panel-id');
    var panelToShowHide = $('#'+panelId);
    panelToShowHide.toggle("slow");

}

$(function(){
    resizeVideos();

    window.onresize = function() {
        resizeVideos();
    }

    $(".read-more").on( "click", function() {
        showHideMoreSection(this);
      });
});



