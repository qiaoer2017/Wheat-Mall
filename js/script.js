/**
 * Created by qiaoer on 16/8/21.
 */
//头部消息滚动脚本
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


//头部日期
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