/**
 * Created by qiaoer on 16/8/23.
 */
$(function () {


    function displayPrice() {
        var product_count = 0;
        var total = 0;
        $('.subtotal').each(function () {
            var price = parseFloat($(this).parent().siblings().children('.price').text());
            var count = parseFloat($(this).parent().siblings().children('.num').val());
            product_count += count;
            var subtotal = price * count;
            total += subtotal;
            $(this).text(parseFloat(subtotal));
        })

        $('.count').text(product_count);
        $('.total').text(total);
    }

    displayPrice();

    $('.num').change(function () {
        displayPrice();
    });

    $('.cancel').click(function () {
        $(this).parent().parent().remove();
        displayPrice();
    });

});

