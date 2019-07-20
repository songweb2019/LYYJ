
 //content2 二级菜单
   //显示子菜单
   function showSubMenu(li){
    var subMenu = li.getElementsByTagName("ul")[0];                 
    subMenu.style.display = "block";
}
//隐藏子菜单
function hideSubMenu(li){
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "none";
}



(function(){
//多标签导航   
//1. 查找触发事件的元素
//查找id为tab的ul下的li下的data-click属性为tab的所有按钮元素 
let tabs=document.querySelectorAll("ul#tab>li>[data-click=tab]");
//定义全局变量，用于递增zIndex的值
let zIndex=0;
//2. 绑定事件处理函数
//遍历tabs中每个按钮
for(let tab of tabs){
  //每遍历一个按钮，就要为其绑定单击事件
  tab.onclick=function(){
    //获得当前单击的按钮<a>
    let tab=this;
    //3. 查找要修改的元素
    //获得当前a对应div的id(已经提前保存在当前a的自定义扩展属性data-div中)
    let id=tab.getAttribute("data-div");  
    //用id查找当前a对应的div
    let div=document.getElementById(id);
    //4. 修改元素
    //修改当前a对应div的z-index属性
    div.style.zIndex=zIndex;
     //修改之后，必须将本次的z-index+1,保证下次的值高于本次
    zIndex++;
  }
}  


//轮播图 content1 
//我们首先获取到 wrap（因为要设置其left才能控制轮播图），然后获取到左右两个箭头，并实现手动轮播  
let wrap = document.querySelector(".wrap");
let next = document.querySelector(".arrow_right");
let prev = document.querySelector(".arrow_left");
   next.onclick = function(){
       next_pic();
   }
   prev.onclick = function(){
       prev_pic();
   }
 //值得注意的是，这里wrap.style.left是一个字符串，所以要转化为数字才能进行计算，而设定left时就要加上px成为一个字符串了。
   function next_pic(){

      //  //指示器
      //  index++;
      //  if(index>2){index=1;}
      //  showCurrentDot();

       //右箭头
       let newLeft;
       if(wrap.style.left === "-1800px"){
           newLeft = 0;
       }else{
           newLeft = parseInt(wrap.style.left)-900;
       }
       wrap.style.left = newLeft + "px";
   }

    function prev_pic(){
      //  //指示器
      //  index--;
      //  if(index<1){index=3;}
      //  showCurrentDot();

       //左箭头
       let newLeft;
       if(wrap.style.left === "0px"){
          newLeft = -1800;
       }else{
          newLeft =parseInt(wrap.style.left)+900;
       }
       wrap.style.left = newLeft + "px";
   }
  //这时我们仅仅时手动循环播放的，我们如果希望自动播放，使用setInterval()即可
  let timer = null;
  function autoPlay(){
      timer = setInterval(function(){
         next_pic();
      },3000);
  }    
   autoPlay();
//如果我们想要仔细看其中一个图片的时候，我们希望轮播图停止播放，只要clearInterval()即可
let banners = document.querySelector(".banners");
banners.onmouseenter = function(){
    clearInterval(timer);
}   
banners.onmouseleave =function(){
    autoPlay();
}
//轮播图下方的小圆点:原理很简单，即设置buttons的index初始值为0，即第一个li的class为on，然后触发next_pic函数时，index加1，当触发prev_pic函数时，index减1， 并设置当前index的小圆点的class为on,这就要求index必须设置为全局变量，才能保证它在每一个函数的作用域中。
//添加showCurrentDot函数：
// let index = 0;
// let dots = document.getElementsByTagName("span");
// function showCurrentDot(){
//     for (let i=0,len = dots.length;i<len;i++){      
//         dots[i].className = "";
//     }
//     dots[index].className = "on";
// }
})()    