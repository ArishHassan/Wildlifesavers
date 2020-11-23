$(function () {
    $(document).scroll(function () {
        var $nav = $("#navstyle");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});