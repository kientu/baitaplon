$(document).ready(function() {
    $('#navBar').click(function() {
            $('nav.menu').slideToggle()
        })
        // gắn menu header
    $("a.games").attr("href", "tranggame1.html")
    $("a.trangchu").attr("href", "trangchu.html")
        // gắn menu footer
    $("ul.link a:nth-child(1)").addClass("trangchu")
    $("section.subject>h1>span").addClass("wow animate__animated animate__bounceIn")
    $("nav.menu").addClass("animate__animated animate__bounceInRight")
        // gắn class để ẩn đang nhập đăng kí
    $(".menuSign > li:first-child a").addClass("btnL");
    $(".menuSign >li:last-child a").addClass("btnR");

    // animate footer
    $(".boxFoot:first-child").addClass("wow animate__slideInLeft")
    $(".boxFoot:last-child").addClass("wow animate__slideInRight")
    $(".boxFoot:not(:last-child,:first-child)").addClass("wow animate__slideInUp")
    $(".boxFoot").attr("data-wow-duration", "1.5s", "data-wow-delay", "5s")
        //animate figures
    $("section.subject div.figures figure").addClass("c4-izmir c4-border-right c4-image-pan-left c4-gradient-top")
    $("figure h2").addClass("c4-layout-top-left")
    $("figure").addClass("wow animate__flipInX")
    $("figure").attr("data-wow-duration", "2s", "data-wow-delay", "1s")

    // wow = new WOW({
    //     boxClass: 'wow', // default
    //     animateClass: 'animate__animated', // default
    //     offset: 0, // default
    //     mobile: true, // default
    //     live: true // default
    // })
    // wow.init();
    // kéo cố định menu (dùng chung)
    $(window).scroll(function() {
            setTimeout(function() {
                if ($(this).scrollTop() >= 20) {
                    $("header").css({
                        "position": "fixed",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "z-index": 9999,
                        "font-size": "13px",
                        "opacity": "0.9",
                        "box-shadow": "5px 0px 10px black"

                    })
                } else {
                    $("header").css({
                        "position": "relative",
                        "top": "0px",
                        "font-size": "13px",
                        "opacity": "1"

                    })
                }
            }, 10)
        })
        // đổi text đăng nhập đăng xuất(dùng chung)
    var name
    var email
    var tienDu
    var id
    var exist = false
    var users = JSON.parse(localStorage.getItem("users")) || [] // lấy mảng users từ local về nếu nó ko có trên local thì trả về mảng rỗng
    for (var i = 0; i < users.length; i++) {
        if (users[i].laCo == true) {
            name = users[i].tk
            email = users[i].em
            tienDu = users[i].coin
            tienDu = parseInt(tienDu) // đổi tiền sang số int
            id = users[i].id
            max = users[i].max
            exist = true;
            break;
        }
    }

    // số lượng đã bán và còn lại

    var keys = JSON.parse(localStorage.getItem('keys')) || []
    $('.soLuong').text(`${keys.length}`)
    var dem = 0;

    for (var g = 0; g < keys.length; g++) {
        if (keys[g].buy == true) {
            dem++
        }
    }
    $('.daBan').text(`${dem}`)
        //đăng kí -> đăng xuất
    $(document).ready(function() {
            if (exist == true) {

                $("a.btnL").html(`<i class="fas fa-user-graduate"> </i> ${name} - ${tienDu}$`).click(function() {
                        $("a.btnL").attr("href", "info.html")
                    }) // dùng kí pháp jquery giúp "" được ở bên trong thẻ
                $("a.btnR").html("Đăng Xuất").click(function() {
                    for (var i = 0; i < users.length; i++) {
                        users[i].laCo = false
                    }
                    localStorage.setItem("users", JSON.stringify(users))
                        // $("a.btnR").attr("href", "javascript:location.href = location.href") // giúp reload vì location.reload or location.assign("tranggame2.html") ko có tac dụng
                    $("a.btnR").attr('href', 'trangchu.html')
                })

            }


        })
        // thống kê top nạp tiền
        //săp xếp trong mảng trước đưa lại lên local xog mới lấy xuống
    users = JSON.parse(localStorage.getItem('users')) || []
    if (users != []) {
        for (var u = 0; u < users.length - 1; u++) {
            for (var w = u + 1; w < users.length; w++) {
                if (users[u].max < users[w].max) {
                    var tam = users[u]
                    users[u] = users[w]
                    users[w] = tam
                }
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
            // for (var e = 0; e < users.length; e++) {
            //     console.log(users[e].max)
            // }

    }

    users = JSON.parse(localStorage.getItem('users')) || []
    var tens = document.querySelectorAll('.tens') // trả về mảng
    var coinMax = document.querySelectorAll('.coinMax') // trả về mảng

    for (var t = 0; t < tens.length; t++) {


        tens[t].innerHTML = users[t].tk
        coinMax[t].innerHTML = users[t].max
    }


    // localStorage.clear

})