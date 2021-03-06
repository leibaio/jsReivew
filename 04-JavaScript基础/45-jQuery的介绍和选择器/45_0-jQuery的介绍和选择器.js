

// 原生js
// window.onload = function() {
//   let btn = document.getElementsByTagName('button')[0];
//   let divArr = document.getElementsByTagName('div');
  
//   btn.onclick = function() {
//     for (let i = 0; i < divArr.length; i++) {
//       divArr[i].style.display = 'block';
//       divArr[i].innerHTML = 'leibaio';
//     }
//   }
// }

// jQuery版
// $(document).ready(function() {
//   // 获取元素
//   var jQbtn = $('button');//根据标签名获取元素
//   var jQdiv = $('div');
//   //  绑定事件
//   jQbtn.click(function () {
//     jQdiv.show(1500);//显示盒子
//     jQdiv.html('leibaio');//设置内容
//     // 上面两行可以写成链式编程：jQdiv.show(3000).html(1111)
//   });//时间通过方法绑定

  // （1）链式编程：比如.show()和.html()可以连写 .show().html() 。链式编程原理：return this。（2）隐式迭代：（2）隐式迭代：在方法内部会匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，方便调用。如果获取的是多元素的值。大部分情况下返回的是第一个元素。
// })

// jQuery的使用步骤：引包、入口函数、功能实现代码（事件处理）

// jQuery的入口函数和符号
// 原生js的入口函数是：window.onload = function() {}; 页面上所有内容加载完毕，才执行。不仅要等文本加载完毕，而且要等图片也要加载完毕，才执行。

// jQuery的入口函数：
// 写法一：文档加载完毕，图片不加载时候，就可以执行此函数
// $(document).ready(function() {
//   alert(1);
// })

// 写法二：写法一的简洁版
// $(function() {
//   alert(1);
// });

// 写法三：文档加载完毕，图片也加载完毕，执行这个函数
// $(window).ready(function() {
//   alert(1);
// })

// js入口函数和jQuery入口函数的区别：
// 区别一：书写个数不同：js入口函数只能出现一次，出现多次会存在事件覆盖问题；jQuery入口函数，可以出现任意多次，并不存在事件覆盖问题。
// 区别二：执行时机不同：js入口是在所有文件资源加载完成后执行。jQuery入口是在文档加载完成后执行。指的是DOM树加载完成后，就可以操作DOM，不用等全部资源加载完。

// jQuery的$符号
// console.log($);
// console.log(jQuery);
// console.log($===jQuery);

// $实际上表示一个函数名，如下：
// $(); //调用上面我们自定义的函数$
// $(document).ready(function(){}); //调用入口函数
// $(function(){}); //调用入口函数
// $('#btnShow') //获取id为btnShow的元素
// $('div') //获取所有div标签
// $函数根据传参不同，进行不同的调用

// js的DOM对象和jQuery对象比较：通过jQuery获取的是一个数组，数组中包含原生js中的DOM对象

// jQuery的入口函数
jQuery(document).ready(function() {
  // 通过原生js获取元素节点方式：
  var myBox = document.getElementById("box");
  var boxArr = document.getElementsByClassName("box");
  var divArr = document.getElementsByTagName("div");

  console.log('------原生js获取的DOM对象--------');
  console.log(myBox);
  console.log(boxArr);
  console.log(divArr);

  // 通过jQuery获取这些元素节点的方式：（获取的都是数组）
  var jqBox1 = $("#box");
  var jqBox2 = $(".box");
  var jqBox3 = $("div");

  console.log('------原生jQuery获取的DOM对象--------');
  console.log(jqBox1);
  console.log(jqBox2);
  console.log(jqBox3);

  jqBox3.css({"width": 30, "height": 30, "background-color": "red", "margin": 10})

  // 二者的相互转化
  // 1. DOM对象转化为jQuery对象 $(js对象)
  jqBox1 = $(myBox);
  jqBox2 = $(boxArr);
  jqBox3 = $(divArr);

  // 2. jQuery对象转换为DOM对象
  // 方式1: jquery对象[index]
})
