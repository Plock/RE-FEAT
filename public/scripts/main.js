onload = function () {
    var searchBar = document.querySelector("#search-bar");
    
    var snsButton = document.querySelector("#sns");
    var musicButton = document.querySelector("#music");
    var friendsButton = document.querySelector("#friends");
    var mypageButton = document.querySelector("#mypage");
    var settingButton = document.querySelector("#setting");

    snsButton.addEventListener("click", () => {
        snsButton.classList.add("footer-item-selected");
        musicButton.classList.remove("footer-item-selected");
        friendsButton.classList.remove("footer-item-selected");
        mypageButton.classList.remove("footer-item-selected");
        settingButton.classList.remove("footer-item-selected");
    });
    musicButton.addEventListener("click", () => {
        snsButton.classList.remove("footer-item-selected");
        musicButton.classList.add("footer-item-selected");
        friendsButton.classList.remove("footer-item-selected");
        mypageButton.classList.remove("footer-item-selected");
        settingButton.classList.remove("footer-item-selected");
    });
    friendsButton.addEventListener("click", () => {
        snsButton.classList.remove("footer-item-selected");
        musicButton.classList.remove("footer-item-selected");
        friendsButton.classList.add("footer-item-selected");
        mypageButton.classList.remove("footer-item-selected");
        settingButton.classList.remove("footer-item-selected");
    });
    mypageButton.addEventListener("click", () => {
        snsButton.classList.remove("footer-item-selected");
        musicButton.classList.remove("footer-item-selected");
        friendsButton.classList.remove("footer-item-selected");
        mypageButton.classList.add("footer-item-selected");
        settingButton.classList.remove("footer-item-selected");
    });
    settingButton.addEventListener("click", () => {
        snsButton.classList.remove("footer-item-selected");
        musicButton.classList.remove("footer-item-selected");
        friendsButton.classList.remove("footer-item-selected");
        mypageButton.classList.remove("footer-item-selected");
        settingButton.classList.add("footer-item-selected");
    });

    var sidenavExitButton = document.querySelector("#sidenav-exit-button");
    var sidenav = document.querySelector(".sidenav");
    sidenavExitButton.addEventListener("click", () => {
        var instance = M.Sidenav.getInstance(sidenav);
        instance.close();
    });





    let musicPluss = document.querySelectorAll(".music-plus");
    let musicHearts = document.querySelectorAll(".music-heart");
    for (let musicPlus of musicPluss) {
        musicPlus.addEventListener("click", () => {
            musicPlus.style.backgroundImage = "url('../public/images/main/plus2.svg')";
        })
    }
    for (let musicHeart of musicHearts) {
        musicHeart.addEventListener("click", () => {
            musicHeart.style.backgroundImage = "url('../public/images/main/heart2.svg')";
        })
    }

}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(
        elems, {
            dist: -50,
            onCycleTo: () => {
                // 옆으로 뭐가 넘어갔을 때
            }
        }
    );
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: "right",
    });
});


