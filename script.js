const dropMenu = $(".menu")[0]; //menu icon
dropMenu.addEventListener("click", () => {
    $("#navMenu").toggleClass("menuClicked");
});
var i = 0;
const landingPics = ["landing-0.jpg", "landing-1.jpg", "landing-2.jpg"]; //images array
window.onload = function() {
    setInterval(changeImage, 5000);

    function changeImage() {
        if (window.innerWidth > 550) {
            i++;
            if (i === 3) {
                i = 0;
            }
            $(".landing").css('background-image', `url(images/${landingPics[i]})`);
            $(".bullets li").removeClass("activeBullet");
            $(`#bull${i}`).addClass("activeBullet");

        }
    }
}

$(".shuffle")[0].addEventListener("click", (clickedli) => { //active filterd li

    var clicked = clickedli.path[0].localName;
    if (clicked.includes("li")) {
        $(".shuffle li").removeClass("actived");
        clickedli.target.className += "actived";
    }
});