var start = document.querySelector(".start button");
var infoBox = document.querySelector(".infoBox");
var exit = document.querySelector(".buttons .exit");
var next = document.querySelector(".buttons .next");
var quizBox = document.querySelector(".quizBox");

var options = document.querySelector(".options");

var timeCount = document.querySelector(".time .sec");
var timeLine = document.querySelector("header .tLine");

var resultBox = document.querySelector(".resultBox");

var exitResult = document.querySelector(".resultBox .exit");
var restart = document.querySelector(".resultBox .next");

var timeOut = document.querySelector(".tText");
// xử lý khi click nút bắt đầu
start.onclick = () => {
        infoBox.classList.add("activeInfo"); //thông tin của phần chú ý
    }
    // xử lý khi click nút thoát
exit.onclick = () => {
    infoBox.classList.remove("activeInfo"); //ẩn phần chú ý
}
var quesCount = 0;
var queNumber = 1;
var counter;
var maxTime = 15;
var lineValue = 0;
var counterLine;
var score = 0;
// click nút tiếp tục
next.onclick = () => {
        infoBox.classList.remove("activeInfo"); //ẩn phần câu hỏi
        quizBox.classList.add("activeQuiz"); //chuyển câu hỏi
        showQuetions(quesCount); //gọi hàm câu hỏi
        quesCounter(queNumber); //truyển 1 tham số cho queCounter
        startTimer(maxTime); //hàm thời gian
        startTimerLine(lineValue); //hàm startTimerLine (thanh mau xanh chay trong 15s)

        //clearInterval(counterLine)
    }
    // click nut chon lai 
restart.onclick = () => {
        resultBox.classList.remove("activeResult"); //an ket qua
        quesCount = 0; // làm moi lai cac bien de bat dau lam tu cau 1
        queNumber = 1;
        score = 0;
        quizBox.classList.add("activeQuiz"); //show cau hoi

        showQuetions(quesCount); //showQuetions
        quesCounter(queNumber); //chuyen gia tri que_numb cho queCounter
        clearInterval(counter); //lam moi counter reset lai 15
        startTimer(maxTime);
        clearInterval(counterLine); //reset lai counterLine
        startTimerLine(lineValue); //startTimerLine        
        nextQues.style.display = "none"; // an den khi chon cau tra loi
        startTimerLine(widthValue); //startTimerLine 
    }
    // click nut thoat
exitResult.onclick = () => {
    window.location.reload(); //tai lai man hinh
}

var quesPage = quizBox.querySelector("footer .key");
var nextQues = document.querySelector("footer .nextQuestion");
// click nut next o cau hoi
nextQues.onclick = () => {
        // timeCount.textContent = "Thời gian còn lại";
        timeCount.style.color = "white"; // doi mau bien dem thoi gian de canh bao sap het gio
        timeLine.style.backgroundColor = "blue";

        if (quesCount < questions.length - 1) {
            quesCount++;
            queNumber++;

            showQuetions(quesCount); //showQuetions
            quesCounter(queNumber); //chuyen gia tri que_numb cho queCounter

            clearInterval(counter); //lam moi counter reset lai 15
            startTimer(maxTime);
            clearInterval(counterLine); //reset lai counterLine
            startTimerLine(lineValue); //startTimerLine        
            // nextQues.classList.remove("show"); //an nut ke tiep
            nextQues.style.display = "none"; // an den khi chon cau tra loi
            // timeText.textContent = "Time Left"; //change the timeText to Time Left
        } else {
            console.log("xong")
                //clearInterval(counter); //clear counter
                //clearInterval(counterLine); //clear counterLine
            showResult();
        }
    }
    // lay cau hoi va noi dung tu mang
function showQuetions(number) {
    var quesText = document.querySelector(".quiz");
    //tao tag, span cho question, option; dung mang index de chuyen gia tri
    var newQuesTag = '<span>' + questions[number].numb + ". " + questions[number].question + '</span>';
    var newOptionTag = '<div class="option"><span>' + questions[number].options[0] + '</span></div>' +
        '<div class="option"><span>' + questions[number].options[1] + '</span></div>' +
        '<div class="option"><span>' + questions[number].options[2] + '</span></div>' +
        '<div class="option"><span>' + questions[number].options[3] + '</span></div>';
    quesText.innerHTML = newQuesTag; //thêm newquesTag
    options.innerHTML = newOptionTag; //thêm newquesTag

    var option = options.querySelectorAll("div.option");
    //onclick cho tat cac option
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "check(this)");
    }
}
// tao vung div chua icon
var tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
var crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//xu li lua chon cua nguoi dung 
function check(answer) {
    clearInterval(counter); //lam moi counter. dung thoi gian lai khi chon dap an
    clearInterval(counterLine); //dung thanh chay khi chon cau tra loi
    var userChoice = answer.textContent; //nhan lua chon 
    var correcChoice = questions[quesCount].answer; //lay dap an dung
    // console.log(correcChoice);

    var allOptions = options.children.length; //lấy tất cả lựa chọn

    if (userChoice == correcChoice) {
        score += 1; //cap nhap ket qua dung
        console.log(score);
        answer.classList.add("correct"); //lua chon dung to xanh
        answer.insertAdjacentHTML("beforeend", tickIconTag); //them icon cho lua chon dung
        console.log("Đáp án đúng");
        // console.log("Đáp án đúng = " + userScore);
    } else {
        answer.classList.add("incorrect"); //lua chon sai to mau do
        answer.insertAdjacentHTML("beforeend", crossIconTag); //them icon cho dap an sai
        console.log("Sai");
        //xu ly hien dap an  khi chon sai
        for (i = 0; i < allOptions; i++) {
            if (options.children[i].textContent == correcChoice) { //so sanh lua chon voi dap an, néu còn dap an dung
                options.children[i].setAttribute("class", "option correct"); //to xanh lua chon dung
                options.children[i].insertAdjacentHTML("beforeend", tickIconTag); //them icon cho lua chon dung vào cuoi vao option truc tiep
                //       console.log("Sai.");
            }
        }
    }
    //Chi cho chon 1 lan
    for (i = 0; i < allOptions; i++) {
        options.children[i].classList.add("disabled");
    }
    nextQues.style.display = "block";
}

function showResult() {
    // infoBox.classList.remove("activeInfo"); //hide info box
    quizBox.classList.remove("activeQuiz"); //an cau hoi
    resultBox.classList.add("activeResult"); //hien ket qua
    var scoreText = resultBox.querySelector(".score");
    if (score > Math.floor(questions.length / 2)) {
        scoreText.innerHTML = '<span>BẠN ĐÚNG ĐƯỢC<p>' + score + '</p>TRÊN<p>' + questions.length + '</p>CÂU</span>'; //adding new span tag inside score_Text
    } else if (score > Math.floor(questions.length / 4)) {
        scoreText.innerHTML = '<span>RẤT TIẾC BẠN ĐÚNG <p>' + score + '</p>TRÊN<p>' + questions.length + '</p>CÂU</span>';
    } else {
        scoreText.innerHTML = '<span>BẠN QUÁ NHỌ! <p>' + score + '</p>TRÊN<p>' + questions.length + '</p>CÂU ĐÚNG</span>';
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time; //trả về thoi gian = time
        time--;
        if (time < 9) {
            timeCount.textContent = "0" + timeCount.textContent; //thêm 0 trc timeCount
        }
        if (time < 5) {
            timeCount.style.color = "red"; // doi mau bien dem thoi gian de canh bao sap het gio
            timeLine.style.backgroundColor = "red";
        }
        if (time < 0) {
            clearInterval(counter); //clear counter
            timeCount.textContent = "00";
            // timeOut.textContent ="HẾT THỜI GIAN";
            correcChoice = questions[quesCount].answer; //lay dap an dung
            allOptions = options.children.length; //lấy tất cả lựa chọn
            //hien dap an dung mau xanh
            for (i = 0; i < allOptions; i++) {
                if (options.children[i].textContent == correcChoice) { //so sanh lua chon voi dap an, néu còn dap an dung
                    options.children[i].setAttribute("class", "option correct"); //to xanh lua chon dung
                    options.children[i].insertAdjacentHTML("beforeend", tickIconTag); //them icon cho lua chon dung vào cuoi vao option truc tiep
                }
            }
            // het thoi gian thi ko dc chon
            for (i = 0; i < allOptions; i++) {
                options.children[i].classList.add("disabled");
            }
            // hien nut next khi het gio
            nextQues.style.display = "block";
        }
    }
}

function startTimerLine(leng) {
    counterLine = setInterval(timer, 29);

    function timer() {
        leng += 1; //tang time(do dai px)
        timeLine.style.width = leng + "px"; //
        if (leng > 549) { //dung thanh chay khi lon hon 549(css width 550)
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function quesCounter(number) {
    quesPage.innerHTML = '<span><p>' + number + '</p> of <p>' + questions.length + '</p> Questions</span>';
    //hien trang cau hoi
}