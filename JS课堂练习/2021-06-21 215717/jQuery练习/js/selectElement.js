$(function() {
  // 3.在.前写出：使用$()函数选择h2元素
  $('h2').hide().slideDown(3000);
  // 4.在.前写出：使用$()函数选择li元素
  $('li').hide().each( function(index) {
    $(this).delay(700*index).fadeIn(700);
  });
});