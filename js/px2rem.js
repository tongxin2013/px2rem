function px2rem() {
  var pxUnit = 100;     // 1rem = ? px
  var designWid = 750;  // 设计图宽度
  var winWid = document.body.clientWidth;
  var bl = (winWid / designWid).toFixed(2);
  document.querySelector('html').style.fontSize = (bl * pxUnit) + 'px';
}

window.onload = function () {
  px2rem()
};

window.onresize=function () {
  px2rem()
};