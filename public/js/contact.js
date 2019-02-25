$(document).ready(function () {
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("navbar").style.backgroundColor = "white";
            var all = document.getElementsByClassName("nav-item");
            for (var i = 0; i < all.length; i++) {
                all[i].style.marginTop = "0%";
            }
        } else {
            document.getElementById("navbar").style.backgroundColor = "";
            var all = document.getElementsByClassName("nav-item");
            for (var i = 0; i < all.length; i++) {
                all[i].style.marginTop = "2%";
            }
        }
    }

    $('#home-return').attr("href", "/");

    $('#home-return-2').attr("href", "/");

    var queryString = location.search;
    var sendEmailResult = queryString.match(/success|error/gi);
    if(sendEmailResult == 'success') {
        swal("Congratulation!", "Email has been sent!", "success");
    } else if(sendEmailResult == 'error') {
        swal("Sorry!", "Something is wrong with your email!", "error");
    }
});
