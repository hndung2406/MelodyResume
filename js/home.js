// When the user scrolls down 20px from the top of the document, slide down the navbar
$(document).ready(function() {
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("navbar").style.backgroundColor = "white";
            var all = document.getElementsByClassName("item");
            for (var i = 0; i < all.length; i++) {
                all[i].style.marginTop = "0%";
                all[i].style.color = "black";
            }
        } else {
            document.getElementById("navbar").style.backgroundColor = "";
            var all = document.getElementsByClassName("item");
            for (var i = 0; i < all.length; i++) {
                all[i].style.marginTop = "2%";
                all[i].style.color = "white";
            }
        }
    }

    $('#scroll').on('click', function (e) {
        $('html, body').animate({
            scrollTop: 649
        }, 800);
    });
    
     $('#home-return').on('click', function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    
});
