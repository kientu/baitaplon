$(document).ready(function() {

    $("a.btnL").click(function() {
        if ($("a.btnL").text().indexOf("Nhập") >= 0) {
            $(".showLogin").css({
                "display": "block",

            })
            $(".showRegister").css({
                "display": "none",
            })
        }

    })
    $("a.btnR,#taoTk").click(function() {

        $(".showLogin").css({
            "display": "none",

        })
        $(".showRegister").css({
            "display": "block",
        })

    })
})




var formRegister = document.querySelector(".formRegister")
var userRegister = document.querySelector(".userRegister")
var passRegister = document.querySelector(".passRegister")

var users = JSON.parse(localStorage.getItem("users")) || []
    // localStorage.clear();
formRegister.onsubmit = function() {
    var taikhoan = userRegister.value.trim()
    var matkhau = passRegister.value.trim()
    if (taikhoan && matkhau) {
        var obj = {
            id: users.length,
            tk: taikhoan,
            mk: matkhau,
            laCo: false,
        }
        users.push(obj)
        localStorage.setItem("users", JSON.stringify(users))
    } else {
        alert("chưa nhập đầy đủ thông tin")
    }
}
var formLogin = document.querySelector(".formLogin")
var userLogin = document.querySelector("#userLogin")
var passLogin = document.querySelector("#passLogin")

formLogin.onsubmit = function() {
    var taikhoan = userLogin.value.trim()
    var matkhau = passLogin.value.trim()
    var id
    if (taikhoan && matkhau) {

        for (var i = 0; i < users.length; i++) {
            if (users[i].tk == taikhoan && users[i].mk == matkhau) {
                id = i;
            }
        }
        users[id].laCo = true;
        localStorage.setItem("users", JSON.stringify(users))
        this.setAttribute("action", "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_action2")


    } else {
        alert("chưa nhập đầy đủ thông tin")
    }
}