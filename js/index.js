/**
 * Created by qiaoer on 16/8/19.
 */

//首页头部消息滚动脚本
$(function () {
    var scrtime;

    var $ul = $("#con ul");
    var liFirstHeight = $ul.find("li:first").height();//第一个li的高度
    $ul.css({top: "-" + liFirstHeight - 20 + "px"});//利用css的top属性将第一个li隐藏在列表上方	 因li的上下padding:10px所以要-20

    $("#con").hover(function () {
        $ul.pause();//暂停动画
        clearInterval(scrtime);
    }, function () {
        $ul.resume();//恢复播放动画
        scrtime = setInterval(function scrolllist() {
            //动画形式展现第一个li
            $ul.animate({top: 0 + "px"}, 1500, function () {
                //动画完成时
                $ul.find("li:last").prependTo($ul);//将ul的最后一个剪切li插入为ul的第一个li
                liFirstHeight = $ul.find("li:first").height();//刚插入的li的高度
                $ul.css({top: "-" + liFirstHeight - 20 + "px"});//利用css的top属性将刚插入的li隐藏在列表上方  因li的上下padding:10px所以要-20
            });
        }, 3300);

    }).trigger("mouseleave");//通过trigger("mouseleave")函数来触发hover事件的第2个函数

});


//首页头部日期
$(function () {
    function changeTime() {
        var currentTime;
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var date = currentDate.getDate();
        var day = currentDate.getDay();

        var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        currentTime = year + "/" + month + "/" + date + " " + week[day];
        $("#pagetop .navlist li time").text(currentTime);
    }

    changeTime();
    setInterval(changeTime, 1000);
});

//首页轮播图
$(function(){
    //初始化
    var size = $(".img li").size();  //获取图片的个数
    for(var i=1;i<=size;i++){	//创建图片个数相对应的底部数字个数
        var li="<li>"+i+"</li>";	//创建li标签，并插入到页面中
        $(".num").append(li);
    }

    //手动控制图片轮播
    $(".img li").eq(0).show();	//显示第一张图片
    $(".num li").eq(0).addClass("active");	//第一张图片底部相对应的数字列表添加active类
    $(".num li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");  //鼠标在哪个数字上那个数字添加class为active
        var index=$(this).index();  //定义底部数字索引值
        i=index;  //底部数字索引值等于图片索引值
        $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);	//鼠标移动到的数字上显示对应的图片
    })

    //自动控制图片轮播
    var i=0;  //初始i=0
    var t=setInterval(move,3300);  //设置定时器，3.3秒切换下一站轮播图
    //向左切换函数
    function moveL(){
        i--;
        if(i==-1){
            i=size-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
    }
    //向右切换函数
    function move(){
        i++;
        if(i==size){
            i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
    }
    //左按钮点击事件
    $(".out .left").click(function(){
        moveL();	//点击左键调用向左切换函数
    })
    //右按钮点击事件
    $(".out .right").click(function(){
        move();    //点击右键调用向右切换函数
    })
    //定时器开始与结束
    $(".out").hover(function(){
        clearInterval(t);	//鼠标放在轮播区域上时，清除定时器
    },function(){
        t=setInterval(move,1500);  //鼠标移开时定时器继续
    })
})