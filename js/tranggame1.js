function search() {


    var ms = document.querySelectorAll("div.searchByMssv input[type=number]")[0]; // mã sốSẺARCH
    var sv = document.getElementById("servers"); // serverSEARCH
    var tien = document.getElementById("giaTien"); //gia tien SEARCH
    var cheDi = document.getElementsByClassName("box") // lấy mảng những cái box
    alert(cheDi.length)
    if (ms != null) {
        if (ms.value === "" && sv.value === "" && tien.value === "") {
            alert("BẠN CHƯA NHẬP THÔNG TIN!!!")
        } else if (ms.value === "" && sv.value !== "" && tien.value !== "") {
            var o = false;
            for (var i = 0; i < cheDi.length; i++) {

                cheDi[i].style.display = "none";


                var money = cheDi[i].getElementsByClassName("money")[0].getAttribute("value")
                money = parseInt(money)
                var sever = cheDi[i].getElementsByClassName("server")[0].innerText
                    // var ms = cheDi(i).getElementsByClassName("mssv")[0].innerText
                if ((tien.value == "50-100k" && money > 50000 && money <= 100000) && (sv.value == "USA" && sever == "USA" || sv.value == "VN" && sever == "VN")) {
                    cheDi[i].style.display = "block";
                    o = true;

                } else if (tien.value == "100-500k" && money > 100000 && money <= 500000 && (sv.value == "USA" && sever == "USA" || sv.value == "VN" && sever == "VN")) {
                    cheDi[i].style.display = "block";
                    o = true;

                } else if (tien.value == "500-1000k" && money > 500000 && money <= 1000000 && (sv.value == "USA" && sever == "USA" || sv.value == "VN" && sever == "VN")) {
                    cheDi[i].style.display = "block";
                    o = true;

                }
            }
            if (o == false) {
                var p = document.createElement("p");
                p.innerHTML = "<p style='font-size:40px; color: red'>HIỆN TẠI TÀI KHOẢN NÀY ĐÃ ĐƯỢC ĐẶT HÀNG TRƯỚC, VUI LÒNG TÌM ACC KHÁC</p> ";
                var boxs = document.getElementsByClassName("boxs")[0]
                boxs.appendChild(p)
                setTimeout(function() {
                    p.parentNode.removeChild(p)
                }, 3000)
            }


        } else if (ms.value !== "" && sv.value !== "" && tien.value !== "") {
            var o = false;
            for (var i = 0; i < cheDi.length; i++) {

                cheDi[i].style.display = "none";


                var money = cheDi[i].getElementsByClassName("money")[0].getAttribute("value")
                money = parseInt(money)
                var sever = cheDi[i].getElementsByClassName("server")[0].innerText
                var mssv = cheDi[i].getElementsByClassName("mssv")[0].innerText
                if ((mssv.indexOf(ms.value) >= 0) || ((tien.value == "50-100k" && money > 50000 && money <= 100000) && (sv.value == "USA" && sever == "USA" || sv.value == "VN" && sever == "VN"))) {
                    cheDi[i].style.display = "block";
                    o = true;

                } else if ((mssv.indexOf(ms.value) >= 0) || ((tien.value == "100-500k" && money > 100000 && money <= 500000) && (sv.value == "USA" && sever == "USA" || sv.value == "VN" && sever == "VN"))) {
                    cheDi[i].style.display = "block";
                    o = true;

                } else if ((mssv.indexOf(ms.value) >= 0) || ((tien.value == "500-1000k" && money > 500000 && money <= 1000000) && (sv.value == "USA" && sever == "USA" || sv.value == "VN" && sever == "VN"))) {
                    cheDi[i].style.display = "block";
                    o = true;
                }
            }
            if (o == false) {
                var p = document.createElement("p");
                p.innerHTML = "<p style='font-size:40px; color: red'>HIỆN TẠI TÀI KHOẢN NÀY ĐÃ ĐƯỢC ĐẶT HÀNG TRƯỚC, VUI LÒNG TÌM ACC KHÁC</p> ";
                var boxs = document.getElementsByClassName("boxs")[0]
                boxs.appendChild(p)
                setTimeout(function() {
                    alert("hello")
                    p.parentNode.removeChild(p)
                }, 4000)
            }


        }
    }
}

function searchAll() {
    var box = document.getElementsByClassName("box");
    for (var i = 0; i < box.length; i++) {
        box[i].style.display = "block"
    }
}
$(document).ready(function() {





    $("div.box").addClass("wow animate__bounceIn")
    $("div.classify").addClass("wow animate__fadeInDownBig")
    $("div.title > h1").addClass("wow animate__fadeInRight")

    $("div.box", "div.classify").attr("data-wow-duration", "1.5s", "data-wow-delay", "5s")

    // wow = new WOW({
    //     boxClass: 'wow', // default
    //     animateClass: 'animate__animated', // default
    //     offset: 0, // default
    //     mobile: true, // default
    //     live: true // default
    // })
    // wow.init();

    var keys = JSON.parse(localStorage.getItem("keys")) || []

    if (keys != []) {

        for (var k = 0; k < keys.length; k++) {

            if (keys[k].buy == true) {
                var ms = keys[k].ms
                var mssv = document.querySelectorAll(".mssv") // trả về colect mảng 10 cái mssv của 10 cái box

                for (var i = 0; i < mssv.length; i++) {
                    if (mssv[i].getAttribute('value') == ms) {
                        var img = document.querySelectorAll("div.anh img")
                        var h3 = document.querySelectorAll("div.afterimg h3")
                        img[i].setAttribute("src", "img/sold.jpg")
                        img[i].setAttribute("height", "140px")
                        h3[i].innerHTML = "ĐÃ BÁN"
                        break;
                    }
                }
            }

        }
    }
})