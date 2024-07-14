$(function(){
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
  $('#change-text').on('click',()=>{
    $('#target').text('Guten Tag!');
  });
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  $('#fade-in').on('click',()=>{
    $('#target').fadeIn();
  })
})