$(document).ready(function(){
  $('.light').click(function(){
    $(this).toggleClass("light-box");
    $(this).children('img').toggleClass("light-image");
    $(this).children('img').attr('src', function(_, val){
      return (val === 'images/catBig.png')? 'images/catSmall.jpg':'images/catBig.png';
    });
  });
})
