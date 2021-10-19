function init() {
    var images = document.querySelectorAll("div.thumb img");
    var mainImg = document.getElementById("mainImg");
    for (var i = 0; i < images.length; i++) {

        images[i].onclick = function() {

            mainImg.setAttribute("src", this.src) // lấy src của this gán vô src của mainImg
        }
    }
    // tài khoản liên quan cái nào dính  hiện tại thì ẩn đi
    var mssv = document.querySelectorAll('.mssv') // trả về mảng
    var ms = document.querySelector('.ms') // mã trang hiện tại
    var nikngon = document.querySelectorAll('.afterimg h3')
    for (var r = 0; r < mssv.length; r++) {
        if (mssv[r].getAttribute('value') == ms.getAttribute('value') || nikngon[r].innerHTML == "ĐÃ BÁN")
            mssv[r].parentNode.parentNode.parentNode.style.display = "none"
    }

}
// Đăng Nhập và Đăng kí qua MENU

$(document).ready(function() {

    // tắt bảng giao dịch
    $('.giaoDich').append(`
    <div class="x">
        <p>ĐÓNG</p>
    </div>
    `)
    $('.x p').click(function() {

        location.reload()
    })
    $("h2.tieuDeTrangGame2").addClass("wow animate__flip")
    $("section.infomation > div:nth-child(odd)").addClass("animate__animated animate__slideInRight")
    $("section.infomation > div:nth-child(even)").addClass("animate__animated animate__slideInLeft")
    $('.thanhCong').addClass("animate__animated animate__zoomInDown")
        // wow = new WOW({
        //     boxClass: 'wow', // default
        //     animateClass: 'animate__animated', // default
        //     offset: 0, // default
        //     mobile: true, // default
        //     live: true // default
        // })
        // wow.init();

    // border viền ảnh khi click
    $("div.thumb img").click(function() {

            $(this).css({
                "border-color": "red",

            })
            $(this).parent().siblings().children().css({
                "border-color": "#2aec03",
            })
        })
        // Ví điện Tử
    $("input.vi").click(function() {

        $("section.infomation").not($(".alertVi")[0]).css({

            "opacity": "0.2",
        })
        $("div.alertVi").css({
            "display": "block",
            "box-shadow": "5px 5px 10px gray",
            "position": "fixed",
            "left": "5%",
            "right": "5%",
            "top": "20%"


        }).addClass("animate__animated animate__fadeInDown");

    })
    $("a.icon-close").click(function() {
        $("div.alertVi").fadeOut(); // để xóa khi click X
        $("section.infomation").not($(".alertVi")[0]).css({

            "opacity": "1",
        })
    })

    // thanh toán bằng nạp
    $("input.card").click(function() {
        location.assign('naptien.html') // giúp chuyển hường trang ko cần href

    })
    var users = JSON.parse(localStorage.getItem('users')) || []
    var i // dung toan cuc

    for (i = 0; i < users.length; i++) {
        if (users[i].laCo == true) {

            break;

        }
    }

    keys = JSON.parse(localStorage.getItem('keys')) || []
    var k // dungf toan cuc
    for (k = 0; k < keys.length; k++) {
        if (keys[k].ms == $('.ms').attr('value')) {
            break;
        }
    }


    // $("div.giaoDich").css("display", "none")
    var tienCard = $(".tienCard").attr("value")

    tienCard = parseInt(tienCard)
    keys[k].gt = tienCard
    localStorage.setItem("keys", JSON.stringify(keys))



    if (keys[k].buy == true) {



        $('.btnMua').val('ĐÃ BÁN').click(function() {
            alert("Người khác đã múc mất rồi, vui lòng chọn hàng khác  :(( ")
            $('.btnMua').addClass('active animate__animated animate__tada').css("background", "red")

        })
    }

    if (keys[k].buy == false || $('.btnMua').val() != 'ĐÃ BÁN') {

        $('input.btnMua').click(function() {
            // local stor chưa được nhạp key


            if (users[i] == null || users[i].laCo == false) {
                if (confirm("Bạn có muốn đăng nhập để mua được tài khoản ?"))
                    location.assign('login.html')

            } else if (users[i].laCo == true) {

                if (tienCard <= users[i].coin) {

                    if (confirm("BẠN CÓ CHẮC MUỐN MUA TÀI KHOẢN NÀY !!?")) {

                        // vận chuyển thông tin
                        var SV = $('.SV').text()
                        var TP = $('.TP').text()
                        var DK = $('.DK').text()
                        var DT = $('.DT').text()
                        var HT = $('.HT').text()
                        var ms = keys[k].ms
                        var gt = keys[k].gt
                        var tkAcc = keys[k].tk
                        var mkAcc = keys[k].mk
                        $('.sv').text(` ${SV}`) // server
                        $('.tp').text(`${TP}`) //skin
                        $('.dk').text(`${DK}`) //skin
                        $('.dt').text(`${DT}`) //skin
                        $('.tp').text(`${TP}`) //skin
                        $('.ht').text(`${HT}`)
                        $('.ms').text(`# ${ms}`) //ma so
                        $('.gt').text(`${gt} VND`)
                        $('.tkAcc').text(`${tkAcc}`)
                        $('.mkAcc').text(`${mkAcc}`)

                        // $("div.giaoDich").css("display", "block")

                        $("section.infomation").not($(".alertVi")[0]).css({

                            "opacity": "0.2",
                        })
                        $("div.giaoDich").css({
                            "display": "block",
                            // "overflow": "scroll",
                            "position": "absolute",
                            "left": "5%",
                            "right": "5%",
                            "top": "100px",
                            "z-index": "999"
                        }).addClass("animate__animated animate__backInDown");


                        //....
                        users[i].coin -= tienCard
                        localStorage.setItem("users", JSON.stringify(users))
                        JSON.parse(localStorage.getItem("users")) || []
                        $('a.btnL').html(`<i class="fas fa-user-graduate"> </i> ${users[i].tk}-${users[i].coin} $`).addClass("animate__animated animate__flip")
                        alert(`số tiền còn lại: ${users[i].coin}`)
                        keys[k].buy = true
                        var accObj = {
                            ms: keys[k].ms,
                            tk: keys[k].tk,
                            mk: keys[k].mk,
                            gt: keys[k].gt, // giá bán
                            buy: keys[k].buy,
                        }
                        users[i].acc.push(accObj)
                        var d1 = new Date()
                        var timeObj = {
                            all: d1.getTime(),
                            y: d1.getFullYear(),
                            m: d1.getMonth(),
                            d: d1.getDate(),
                            h: d1.getHours(),
                            mi: d1.getMinutes(),
                            s: d1.getSeconds(),
                        }
                        users[i].time.push(timeObj)
                        localStorage.setItem("users", JSON.stringify(users))
                        localStorage.setItem("keys", JSON.stringify(keys))

                    }
                } else
                    alert("Vui lòng nạp thêm tiền để sở hữu acc này ")

            }


        })
    }
    if (keys[k].buy == true) {

        var j
        for (j = 0; j < users[i].acc.length; j++) {
            if (users[i].acc[j].ms == keys[k].ms) // hoặc là == $('.ms').attr('value')
                break;
        }

        $('.ngaygio').append(`
            <p class="animate__animated animate__rubberBand"style="text-align:center;color: purple;font-style:italic;font-weight:bold">
                 Đã bán lúc: ${users[i].time[j].d}/${users[i].time[j].m + 1}/${users[i].time[j].y}  ${users[i].time[j].h}:${users[i].time[j].mi}
            </p>
        `)


    }




})