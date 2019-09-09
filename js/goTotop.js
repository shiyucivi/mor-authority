jQuery(document).ready(function ($) {
    if ($("meta[name=toTop]").attr("content") == "true") {
        $("<div id='toTop'></div>").appendTo('body');
        $("#toTop").css({
            width: '50px',
            height: '50px',
            bottom: '50px',
            background: '#1a080f18',
            right: '20px',
            position: 'fixed',
            'border-radius':'8px',
            'background-image': 'url("./assets/1.png")',
            'background-repeat': 'no-repeat',
            'background-size': 'auto',
            'background-position': 'center',
            cursor: 'pointer',
            'box-shadow':'1px 0px 10px 1px #4d193d58',
            zIndex: '999999',
        });
        $('#toTop').hover(function(){
             $('#toTop').css({
                 'background-color': '#171C2C'
             })
        },function(){
              $('#toTop').css({
                  'background-color': '#1a080f18'
              })
        })
        if ($(this).scrollTop() == 0) {
            $("#toTop").hide();
        }
        $(window).scroll(function (event) {
            /* Act on the event */
            if ($(this).scrollTop() == 0) {
                $("#toTop").hide();
            }
            if ($(this).scrollTop() >= 300) {
                $("#toTop").show();
            }
        });
        $("#toTop").click(function (event) {
            /* Act on the event */
            $("html,body").animate({
                    scrollTop: "0px"
                },
                666
            )
        });
    }
});