Template.pageTables.rendered = function(){

    // Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });


    // Options for peity charts
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    });

    $(".line").peity("line",{
        fill: '#1ab394',
        stroke:'#169c81'
    });

    /*    // Initialize i-check plugin
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green'
        });
*/
        // Move modal to body
        // Fix Bootstrap backdrop issu with animation.css
        $('.modal').appendTo("body");

};
