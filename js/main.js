$(document).ready(function(){
  $('.light img').click(function(){
    $('.light').toggleClass("light-box");
    $(this).toggleClass("light-image");
    $(this).attr('src', function(_, val){
      return (val === 'images/catBig.png')? 'images/catSmall.jpg':'images/catBig.png';
    });
  });
})
