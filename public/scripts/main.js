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


let musicImage = [];
let musicLyrics = [];
let musicSns = [];
let musicUser = [];
let musicDate = [];
let musicPath = [];
let musicTitle = [];

let writerProfileName = document.querySelector("#writer-profile-name").textContent;
let postCreatedDay = document.querySelector("#post-created-day").textContent;
let lyrics = document.querySelector("#lyrics").textContent;
let writerProfileNameS = document.querySelector("#writer-profile-name-s").textContent;
let sidenavDate = document.querySelector(".sidenav-date").textContent;
let musicImgS = document.querySelector("#music-img-s").src;
let musicTitle = document.querySelector(".music-title").textContent;
let musicContent = document.querySelector(".music-content").textContent;


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(
        elems, {
            dist: -50,
            numVisible: numVisible,
            onCycleTo: () => {
                // 옆으로 뭐가 넘어갔을 때
                var instance = M.Carousel.getInstance(document.querySelector(".carousel"));
                switch (instance.center) {
                    case 0:
                        musicImgS = musicImage[0];
                        lyrics = musicLyrics[0];
                        musicContent = musicSns[0];
                        writerProfileName = musicUser[0];
                        writerProfileNameS = musicUser[0];
                        postCreatedDay = musicDate[0];
                        sidenavDate = musicDate[0];
                        musicTitle = musicTitle[0];
                        break;
                    case 1:
                        musicImgS = musicImage[1];
                        lyrics = musicLyrics[1];
                        musicContent = musicSns[1];
                        writerProfileName = musicUser[1];
                        writerProfileNameS = musicUser[1];
                        postCreatedDay = musicDate[1];
                        sidenavDate = musicDate[1];
                        musicTitle = musicTitle[1];
                        break;
                    case 2:
                        musicImgS = musicImage[2];
                        lyrics = musicLyrics[2];
                        musicContent = musicSns[2];
                        writerProfileName = musicUser[2];
                        writerProfileNameS = musicUser[2];
                        postCreatedDay = musicDate[2];
                        sidenavDate = musicDate[2];
                        musicTitle = musicTitle[2];
                        break;
                    case 3:
                        musicImgS = musicImage[3];
                        lyrics = musicLyrics[3];
                        musicContent = musicSns[3];
                        writerProfileName = musicUser[3];
                        writerProfileNameS = musicUser[3];
                        postCreatedDay = musicDate[3];
                        sidenavDate = musicDate[3];
                        musicTitle = musicTitle[3];
                        break;
                    case 4:
                        musicImgS = musicImage[4];
                        lyrics = musicLyrics[4];
                        musicContent = musicSns[4];
                        writerProfileName = musicUser[4];
                        writerProfileNameS = musicUser[4];
                        postCreatedDay = musicDate[4];
                        sidenavDate = musicDate[4];
                        musicTitle = musicTitle[4];
                        break;
                    case 5:
                        musicImgS = musicImage[5];
                        lyrics = musicLyrics[5];
                        musicContent = musicSns[5];
                        writerProfileName = musicUser[5];
                        writerProfileNameS = musicUser[5];
                        postCreatedDay = musicDate[5];
                        sidenavDate = musicDate[5];
                        musicTitle = musicTitle[5];
                        break;
                    case 6:
                        musicImgS = musicImage[6];
                        lyrics = musicLyrics[6];
                        musicContent = musicSns[6];
                        writerProfileName = musicUser[6];
                        writerProfileNameS = musicUser[6];
                        postCreatedDay = musicDate[6];
                        sidenavDate = musicDate[6];
                        musicTitle = musicTitle[6];
                        break;
                    case 7:
                        musicImgS = musicImage[7];
                        lyrics = musicLyrics[7];
                        musicContent = musicSns[7];
                        writerProfileName = musicUser[7];
                        writerProfileNameS = musicUser[7];
                        postCreatedDay = musicDate[7];
                        sidenavDate = musicDate[7];
                        musicTitle = musicTitle[7];
                        break;
                    case 8:
                        musicImgS = musicImage[8];
                        lyrics = musicLyrics[8];
                        musicContent = musicSns[8];
                        writerProfileName = musicUser[8];
                        writerProfileNameS = musicUser[8];
                        postCreatedDay = musicDate[8];
                        sidenavDate = musicDate[8];
                        musicTitle = musicTitle[8];
                        break;
                    case 9:
                        musicImgS = musicImage[9];
                        lyrics = musicLyrics[9];
                        musicContent = musicSns[9];
                        writerProfileName = musicUser[9];
                        writerProfileNameS = musicUser[9];
                        postCreatedDay = musicDate[9];
                        sidenavDate = musicDate[9];
                        musicTitle = musicTitle[9];
                        break;
                    case 10:
                        musicImgS = musicImage[10];
                        lyrics = musicLyrics[10];
                        musicContent = musicSns[10];
                        writerProfileName = musicUser[10];
                        writerProfileNameS = musicUser[10];
                        postCreatedDay = musicDate[10];
                        sidenavDate = musicDate[10];
                        musicTitle = musicTitle[10];
                        break;
                    case 11:
                        musicImgS = musicImage[11];
                        lyrics = musicLyrics[11];
                        musicContent = musicSns[11];
                        writerProfileName = musicUser[11];
                        writerProfileNameS = musicUser[11];
                        postCreatedDay = musicDate[11];
                        sidenavDate = musicDate[11];
                        musicTitle = musicTitle[11];
                        break;
                }
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

