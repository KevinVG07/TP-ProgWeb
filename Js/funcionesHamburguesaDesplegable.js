

$(document).ready(function(){ 
    $("a.desplegable").toggle(
          function() {
            $(this).parent().find("nav.header_menu").slideDown('');
          },
          function() {
            $(this).parent().find("nav.header_menu").slideUp('');
          }                        
        );
$(window).resize(function(){
    if($(this).width()>768){
        $("a.desplegable").parent().find("nav.header_menu").show();
    } else{
        $("a.desplegable").parent().find("nav.header_menu").hide();
    }
});

});