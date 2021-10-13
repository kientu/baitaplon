function searchAlls() {
    var itom = document.querySelectorAll('.itom')

    for (var s = 0; s < itom.length; s++) {
        itom[s].style.display = "flex"
    }

}

function searchs() {
    var itom = document.querySelectorAll('.itom')

    for (var s = 0; s < itom.length; s++) {
        itom[s].style.display = "none"
    }
    var masoSearch = document.querySelector('input.numberMa')
    var giaSearch = document.querySelector('.giaTien')
    var ms = document.querySelectorAll('.maSos') // trả về mảng
    var fromD = document.querySelector('.fromD')
    var toD = document.querySelector('.toD')
    var from = new Date(fromD.value) // eps sang kieu mã ngày để đem đi so sánh với hàm getTime()
    var to = new Date(toD.value)

    if ((fromD.value == '' && toD.value != '') || (fromD.value != '' && toD.value == '')) {
        alert('nhập từ ngày... -> đến ngày ....')
    }
    if (giaSearch.value == "0" && masoSearch.value != '' && fromD.value == '' && toD.value == '') {
        for (p = 0; p < ms.length; p++) {
            if (ms[p].innerHTML.indexOf(masoSearch.value) >= 0) {

                ms[p].parentNode.parentNode.style.display = "flex"



            }

        }

    } else if (giaSearch.value != "0" && masoSearch.value == "" && fromD.value == '' && toD.value == '') {
        var vnd = document.querySelectorAll('.vnd') // trả về mảng
        for (var p = 0; p < vnd.length; p++) {
            if (giaSearch.value == '50-100k' && vnd[p].getAttribute('value') >= 50000 && vnd[p].getAttribute('value') <= 100000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            } else if (giaSearch.value == '100-500k' && vnd[p].getAttribute('value') > 100000 && vnd[p].getAttribute('value') <= 500000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            } else if (giaSearch.value == '500-1000k' && vnd[p].getAttribute('value') > 500000 && vnd[p].getAttribute('value') <= 1000000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            }
        }

    } else if (giaSearch.value != "0" && masoSearch.value != "") {
        var vnd = document.querySelectorAll('.vnd') // trả về mảng
        for (var p = 0; p < vnd.length; p++) {
            if (ms[p].innerHTML.indexOf(masoSearch.value) >= 0 && giaSearch.value == '50-100k' && vnd[p].getAttribute('value') >= 50000 && vnd[p].getAttribute('value') <= 100000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            } else if (ms[p].innerHTML.indexOf(masoSearch.value) >= 0 && giaSearch.value == '100-500k' && vnd[p].getAttribute('value') > 100000 && vnd[p].getAttribute('value') <= 500000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            } else if (ms[p].innerHTML.indexOf(masoSearch.value) >= 0 && giaSearch.value == '500-1000k' && vnd[p].getAttribute('value') > 500000 && vnd[p].getAttribute('value') <= 1000000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            }
        }
    } else if (giaSearch.value == "0" && masoSearch.value == "" && fromD.value != '' && toD.value != '') {
        var tg = document.querySelectorAll('.tg') // trả về mảng

        for (var p = 0; p < tg.length; p++) {



            if (tg[p].getAttribute('value') >= from.getTime() && tg[p].getAttribute('value') <= to.getTime()) {
                ms[p].parentNode.parentNode.style.display = "flex"
            }
        }
    } else if (fromD.value != '' && toD.value != '' && giaSearch.value != "0") {
        var vnd = document.querySelectorAll('.vnd') // trả về mảng
        var tg = document.querySelectorAll('.tg') // trả về mảng

        for (var p = 0; p < vnd.length; p++) {
            if ((tg[p].getAttribute('value') >= from.getTime() && tg[p].getAttribute('value') <= to.getTime()) && giaSearch.value == '50-100k' && vnd[p].getAttribute('value') >= 50000 && vnd[p].getAttribute('value') <= 100000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            } else if ((tg[p].getAttribute('value') >= from.getTime() && tg[p].getAttribute('value') <= to.getTime()) && giaSearch.value == '100-500k' && vnd[p].getAttribute('value') > 100000 && vnd[p].getAttribute('value') <= 500000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            } else if ((tg[p].getAttribute('value') >= from.getTime() && tg[p].getAttribute('value') <= to.getTime()) && giaSearch.value == '500-1000k' && vnd[p].getAttribute('value') > 500000 && vnd[p].getAttribute('value') <= 1000000) {
                ms[p].parentNode.parentNode.style.display = "flex"
            }
        }
    } else if (fromD.value != '' && toD.value != '' && masoSearch.value != "") {
        var vnd = document.querySelectorAll('.vnd') // trả về mảng
        var tg = document.querySelectorAll('.tg') // trả về mảng

        for (var p = 0; p < vnd.length; p++) {
            if ((tg[p].getAttribute('value') >= from.getTime() && tg[p].getAttribute('value') <= to.getTime()) && ms[p].innerHTML.indexOf(masoSearch.value) >= 0) {
                ms[p].parentNode.parentNode.style.display = "flex"
            }
        }
    }
    // setTimeout(function() {
    //     // phải  set time out riêng vì hàm đợi 3 giây, mà for nó chạy nhanh quá ko đồng bộ để nó bật lại màu cũ
    //     for (p = 0; p < ms.length; p++) {

    //         ms[p].parentNode.parentNode.style.background = "linear-gradient(#66ccc3dc, #4194c4)"
    //     }
    // }, 3000)
}
$(document).ready(function() {



    // menu dọc ra vô
    $('.barVo').click(function() {
        $("nav.menu-doc").removeClass("animate__animated animate__flipOutX animate__rotateInDownLeft")

        $('nav.menu-doc').addClass("animate__animated animate__flipOutX").hide()
    });
    $('.barRa').click(function() {
        $("nav.menu-doc").removeClass("animate__animated animate__flipOutX animate__rotateInDownLeft")

        $('nav.menu-doc').show().addClass("animate__animated animate__rotateInDownLeft")

    })
    var exist = false
    var i
    const users = JSON.parse(localStorage.getItem("users")) || [] // lấy mảng users từ local về nếu nó ko có trên local thì trả về mảng rỗng
    for (i = 0; i < users.length; i++) {
        if (users[i].laCo == true) {
            ID = users[i].id
            name = users[i].tk
            dcEmail = users[i].em
            tienDu = users[i].coin
            $(".ID").text(`00${ID}`)
            $(".name").text(`${name}`)
            $(".dcEmail").text(`${dcEmail}`)
            $(".tienDu").html(`${tienDu} VNĐ`)
            exist = true;
            break;
        }
    }
    $("table.tableInfo").addClass("animate__animated animate__fadeInUp")
    $(".tienDu").addClass("animate__animated animate__jello")
        // avatat và tên thay đôi khi đăng nhập
    if (exist == true) {
        $('p.ten').html(`&#10055; ${name}  &#10055;`)
        $('img.circle').attr("src", "img/avt.jpg")

    }
    // giao dịch lịch sử

    for (var j = 0; j < users[i].acc.length; j++) {
        $('.itoms').append(`
                <div class="itom">
                <div class="col15">
                    <p class="maSos" value="${users[i].acc[j].ms}">#${users[i].acc[j].ms}</p>
                </div>
                <div class="col23">
                    <p>${users[i].acc[j].tk}</p>
                </div>
                <div class="col23">
                     <p>${users[i].acc[j].mk}</p>
                </div>
                <div class="col15">
                <p class="vnd" value="${users[i].acc[j].gt}">${users[i].acc[j].gt} vnd</p>
                </div>
                <div class="col24">
                <p class="tg" value="${users[i].time[j].all}">${users[i].time[j].h}h${users[i].time[j].mi}m  ${users[i].time[j].d}/${users[i].time[j].m + 1}/${users[i].time[j].y} </p>
                </div>
            </div>
                `)
    }


})