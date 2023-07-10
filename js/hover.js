$('.load').hover(
    function () {
        $(this).find("img").addClass('animate__animated animate__heartBeat animate__infinite');
    },
    function () {
        $(this).find("img").removeClass('animate__animated animate__heartBeat animate__infinite');
    }
);

// Truy cập đến phần tử có id "myParagraph"
var emailtext = document.querySelector("#emailcopy .textcontact2");
// Lấy đối tượng button từ DOM
var copyButton = document.querySelector('#emailcopy');

// Thiết lập sự kiện click cho button
copyButton.addEventListener('click', function () {
    // Lấy văn bản cần copy từ DOM
    var textToCopy = 'phunghongquan94@gmail.com';

    // Tạo một input ẩn để copy vào clipboard
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('value', textToCopy);
    document.body.appendChild(hiddenInput);

    // Copy văn bản vào clipboard
    hiddenInput.select();
    document.execCommand('copy');

    // Xóa input ẩn đã tạo
    document.body.removeChild(hiddenInput);

    // Thêm thông báo hoặc thực hiện các thao tác khác
    //   alert('Copied');
    

    // Thay đổi nội dung của phần tử
    emailtext.innerHTML = "Copied";
    emailtext.style.setProperty('color', '#fff');
    setTimeout(function () {
        emailtext.innerHTML = "Click to copy";
        emailtext.style.setProperty('color', '#cc8d8a');
    }, 1000);
});

var calltext = document.querySelector("#callbox .textcontact2");
var callButton = document.querySelector('#callbox');


callButton.addEventListener('click', function () {
    var textToCopy2 = 'xxxxxxx233';
    var hiddenInput2 = document.createElement('input');
    hiddenInput2.setAttribute('value', textToCopy2);
    document.body.appendChild(hiddenInput2);

    // Copy văn bản vào clipboard
    hiddenInput2.select();
    document.execCommand('copy');

    // Xóa input ẩn đã tạo
    document.body.removeChild(hiddenInput2);

    // Thêm thông báo hoặc thực hiện các thao tác khác
    //   alert('Copied');
    

    // Thay đổi nội dung của phần tử
    calltext.innerHTML = "Copied";
    calltext.style.setProperty('color', '#fff');
    setTimeout(function () {
        calltext.innerHTML = "(+84) xxx xxx 233";
    }, 1000);
});
$('.contactbox').hover(
    function () {
        $(this).find("svg").addClass('animate__animated animate__swing');
    },
    function () {
        $(this).find("svg").removeClass('animate__animated animate__swing');
    }
);