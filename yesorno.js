document.addEventListener("DOMContentLoaded", function () {
    list=['HEYY PRESS YESS!','NO IS NOT AN OPTION!','PLEASE SAY YES!']
    var height=50
    var width=90
    var font=20
    var smallheight=50
    var smallwidth=90
    var smallfont=20

    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    console.log("content loaded");
    const animateMove = (element, prop, pixels) =>
        anime({
            targets: element,
            [prop]: `${pixels}px`,
            easing: "easeOutCirc"
        });

        ["click"].forEach(function (el) {
        no.addEventListener(el, function (event) {
            const top = getRandomNumber(window.innerHeight - this.offsetHeight);
            const left = getRandomNumber(window.innerWidth - this.offsetWidth);

            animateMove(this, "left", left).play();
            animateMove(this, "top", top).play();
        });
        });

    const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
    };
    no.addEventListener("click", function() {
        // const test = document.getElementById("test");
        height+=10
        width+=20
        font+=5
        // test.className=`text-center h1`
        // test.innerHTML=`${list[Math.floor(Math.random()*list.length)]}`
        yes.style.height=`${height}px`
        yes.style.width=`${width}px`
        yes.style.fontSize=`${font}px`
        smallheight-=5
        smallwidth-=10
        smallfont-=2
        no.style.height=`${smallheight}px`
        no.style.width=`${smallwidth}px`
        no.style.fontSize=`${smallfont}px`

    });
  });