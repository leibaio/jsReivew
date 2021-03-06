
// setInterval(): 循环调用。代码每隔一段时间执行一次。（循环执行）；setTimeout(): 延时调用。等待一段时间之后执行。（只执行一次）

// setInterval() 参数1:回调函数；参数2:间隔时间。返回值：返回一个Number类型的数据。是作为定时器的唯一标识。方便清除定时器。
// 定义定时器：每间隔一秒，将数字加1:

// 方式1:
// let num = 1;
// setInterval(function() {
//   num++;
//   console.log(num);
// }, 1000);

// 方式2:
// setInterval(fn, 1000);

// function fn() {
//   num++;
//   console.log(num);
// }

// 清除定时器：
// let num = 1;

// const timer = setInterval(function () {
//   console.log(num);
//   num++;
//   if(num === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// setTimeout()举例：5s后关闭图片
window.onload = function () {
  //获取相关元素
  let imgArr = document.getElementsByTagName('img');
  // 设置定时器：5秒钟关闭图片
  setTimeout(fn, 5000);
  function fn() {
    imgArr[0].style.display = 'none';
    imgArr[1].style.display = 'none';
  }
}