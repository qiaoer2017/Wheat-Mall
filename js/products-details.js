/**
 * Created by qiaoer on 16/8/21.
 */
$(function () {
    $('.small-images img').hover(function () {
        $('.big-image img').attr('src', $(this).attr('big-src'));
        $('.magnifier img').attr('src', $(this).attr('big-src'));
    });
    $('.big-image').mousemove(function (e) {
        $('.magnifier').css('display', 'block');
        var offX = $('.magnifier img').width() / $(this).width();
        var offY = $('.magnifier img').height() / $(this).height();
        // console.log('offX:' + offX + '; offY:' + offY);
        $('.magnifier').scrollLeft(e.offsetX * offX);
        $('.magnifier').scrollTop(e.offsetY * offY);
    }).mouseleave(function () {
        $('.magnifier').css('display', 'none');
    });


});

$(function () {
    var list = $('.product-relative-info > ul > li');
    list.click(function () {
        list.siblings().removeClass('active');
        $(this).addClass('active');

        $('.tab' + ($(this).index() + 1))
            .addClass('active-tab')
            .siblings()
            .removeClass('active-tab');

    });


});