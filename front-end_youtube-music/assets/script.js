window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myHeader").classList.add("fixed-header");
    } else {
        document.getElementById("myHeader").classList.remove("fixed-header");
    }
}

