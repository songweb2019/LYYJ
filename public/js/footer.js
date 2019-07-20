$(function(){
  $.ajax({
     url:"header.html",
     type:"get",
     success:function(result){
       (result).replaceAll("footer");
      //动态创建link元素，引入footer.css,自动添加到<head>元素中
      $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
     }
  })
  function time(){
    let date = new Date();
         year = date.getFullYear();
        month = date.getMonth()+1;
          day = date.getDate();
        hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
      document.getElementById("time").innerHTML=year + "-" + month + "-" + day+ "\t" + hours + ":" + minutes +":" + seconds;
    };
    setInterval("time()");


})
//脚 当前时间
