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
        // tô border cho nạp thẻ
    $("div.NapTien > input, div.NapTien > select").click(function() {
            $(this).css({
                "border": "1px solid red",
                "box-shadow": "-2px -2px 5px blue"
            })
            $(this).parent().siblings().children("input,select").css({
                "border": "1px solid #0debeb",
                "box-shadow": "none"
            })
        })
        // submit nạp thẻ
    var name
    var email
    var tienDu
    var id
    var exist = false
    var i
    const users = JSON.parse(localStorage.getItem("users")) || [] // lấy mảng users từ local về nếu nó ko có trên local thì trả về mảng rỗng
    for (i = 0; i < users.length; i++) {
        if (users[i].laCo == true) {
            name = users[i].tk
            email = users[i].em
            tienDu = users[i].coin
            tienDu = parseInt(tienDu) // đổi tiền sang số int
            id = users[i].id
            exist = true;
            break;
        }
    }

    document.querySelector(".taiKhoanNap").value = name;

    $(".NapTiens").submit(function() {
        var napOk = false

        if (!exist) {

            if (confirm("BẠN CÓ MUỐN ĐĂNG NHẬP ĐỂ NẠP THẺ ?"))
                location.assign('login.html')
            return false
        }


        var loaiThe = $("select.loaiThe").val()
        var gia = $("select.gia").val()
        gia = parseInt(gia)
        var ms = $(".ms").val()
        var seri = $(".seri").val()
        if (loaiThe == "viettel" && exist) {

            if ((ms.length == 13 && seri.length == 11) || (ms.length == 15 && seri.length == 14)) {
                if (confirm("Bạn có chắc muốn nạp sô tiền vào tài ?") == true) {

                    alert(`CHÚC MỪNG ${name} ĐÃ NẠP THÀNH CÔNG ${gia} VND`)
                    users[i].coin = users[i].coin + gia
                    users[i].max = users[i].max + gia

                    localStorage.setItem("users", JSON.stringify(users))
                    tienDu = users[i].coin
                    napOk = true
                }

            } else {
                confirm("Xin lỗi Nạp Tiền đã thất bại, vui lòng kiểm tra")
                return false

            }
        } else if (loaiThe == "mobiphone" && exist) { // nếu ko có exist thì nó vẫn sẽ đi vô trong nạp thẻ cho tài khoản undefine
            if (ms.length == 12 && seri.length == 15) {
                if (confirm("Bạn có chắc muốn nạp sô tiền vào tài ?") == true) {
                    alert(`CHÚC MỪNG ${name} ĐÃ NẠP THÀNH CÔNG ${gia} VND`)
                    users[i].coin = users[i].coin + gia
                    users[i].max = users[i].max + gia

                    localStorage.setItem("users", JSON.stringify(users))
                    tienDu = users[i].coin
                    napOk = true

                }

            } else {
                confirm("Xin lỗi Nạp Tiền đã thất bại, vui lòng kiểm tra")
                return false
            }
        } else if (exist) { // vinaphone
            if (ms.length == 12 && seri.length == 14) {
                if (confirm("Bạn có chắc muốn nạp sô tiền vào tài ?") == true) {
                    alert(`CHÚC MỪNG ${name} ĐÃ NẠP THÀNH CÔNG ${gia} VND`)
                    users[i].coin = users[i].coin + gia
                    users[i].max = users[i].max + gia
                    localStorage.setItem("users", JSON.stringify(users))
                    tienDu = users[i].coin
                    napOk = true

                }

            } else {
                confirm("Xin lỗi Nạp Tiền đã thất bại, vui lòng kiểm tra")
                return false

            }
        }
        if (exist && napOk)
            return true // là mặc định của sk submit nhưng vì trên kia để return false chặn nên để dưới để nạp thành công nó load lại trang
        else
            return false // chặn ko cho load khi chưa đăng nhập để chuyển đến login hoặc nạp ko thành công
    })

    // 

});