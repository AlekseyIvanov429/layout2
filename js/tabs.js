$(document).ready(function () {
    /**
     * Переключаем вкладку
     */
    $('.tabs-ox2 ul:first li').click(function () {
        $('.tabs-ox2 li').removeClass('active');
        $(this).addClass('active');
        $('.tabs-ox2 ul:last li').eq($(this).index()).addClass('active');
    });
    /**
     * При загрузки показываем контент активной вкладки
     */
    $('.tabs-ox2 ul:last li').eq($('.tabs-ox2 ul:first li.active').index()).addClass('active');
})