$(function() {
    $("#gototop").hide()
    $(window).scroll(function(){
        /*
        if(($this).scrollTop() >= 50){
            $("nav").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "z-index": 999,
                "opacity":0.7  
            })
        } else {
            $("nav").css({
                "position": "relative",
                "left": 0,
                "right": 0,
                "z-index": 999,
                "opacity":1  
            })
            }
            */
       
        var d=$(window).scrollTop();
        if($(this).scrollTop() >= 100)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
        
        })    
        $("#gototop").click(function() {
            $("html, body").animate({
                scrollTop: 0
            },1000); 
    })
})