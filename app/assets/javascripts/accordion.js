$(document).ready(function (){
  $('button').click(function(){
    var idDiv = $(this).data('target')
    // Convierte a display style none
    if($(idDiv).is(':visible')){
      $(idDiv).hide();
    }else{
      $('.accordion .collapse').hide();
      $(idDiv).show();
    }
  })
});