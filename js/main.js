$(function(){
    //BEGIN MENU SIDEBAR
    $('#sidebar').css('min-height', '100%');
    $('#side-menu').metisMenu();
    $(window).on("load resize", function () {
        if ($(this).width() < 768) {
            $('body').removeClass();
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('body').addClass($.cookie('menu_style') + ' ' + $.cookie('header'));
            $('div.sidebar-collapse').removeClass('collapse');
            $('div.sidebar-collapse').css('height', 'auto');
        }

        if($('#sidebar').height() > $('#page-wrapper').height()){
            $('#wrapper').css('height', $('#sidebar').height());
        }
    });

    $('#news-ticker-close').click(function(e){
        $('.news-ticker').remove();
        $('.quick-sidebar').css('top', '50px');
    });

    // BEGIN SEARCH FORM ON TOPBAR
    $('#topbar-search').on('click', function (e) {
        $(this).addClass('open');
        $(this).find('.form-control').focus();

        $('#topbar-search .form-control').on('blur', function (e) {
            $(this).closest('#topbar-search').removeClass('open');
            $(this).unbind('blur');
        });
    });


    $(window).scroll(function(){
        if($(this).scrollTop()<20){
            $('#totop').fadeOut();
        }else{
            $('#totop').fadeIn();
        }
    });

});