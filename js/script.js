let canvasStory = document.querySelectorAll('#story');


function canvas() {
    canvasStory.forEach(element => {
        let ctx = element.getContext("2d");

        ctx.beginPath();
         let grd = ctx.createLinearGradient(110, 90, 30, 100, 100, 70);
            
         grd.addColorStop(0, "#ffd600");
         grd.addColorStop(0.4, "#7638fa");
         grd.addColorStop(1, "#d300c5");
         grd.addColorStop(0.5, "#ff0169");
         grd.addColorStop(1, "#ff7a00");
        
         ctx.strokeStyle = grd;
         ctx.lineWidth = 2;
         ctx.arc(32,32,31,0,2 *Math.PI);
         ctx.stroke();
    });

}
canvas();

//function box-shadow kiri
let left = document.querySelector('.left');

left.addEventListener('click', (e) => {
    scroll.scrollBy(-200, 0);
    left.style.boxShadow = "0px 0px 1px 1px var(--fds-black-alpha-10),0px 0px 1px 1px var(--fds-black-alpha-10),0px 0px 1px var(--fds-black-alpha-10)";
    left.style.borderRadius = "50%";
    setInterval(function () {
      left.style.boxShadow = " 1px 1px 1px 1px var(--fds-black-alpha-40), 1px 1px 1px 1px var(--fds-black-alpha-50), 1px 1px 1px var(--fds-black-alpha-10)"

     
    }, 500)
})

//function box-shadow kanan
let right = document.querySelector('.right');
let scroll = document.querySelector('.insta-story');
right.addEventListener('click', (e) => {

    scroll.scrollBy(200, 0);
    right.style.boxShadow = "0px 0px 1px 1px var(--fds-black-alpha-10),0px 0px 1px 1px var(--fds-black-alpha-10),0px 0px 1px var(--fds-black-alpha-10)";
    right.style.borderRadius = "50%";

    setInterval(function () {
        right.style.boxShadow = " 1px 1px 1px 1px var(--fds-black-alpha-40), 1px 1px 1px 1px var(--fds-black-alpha-50), 1px 1px 1px var(--fds-black-alpha-10)"
  
       
      }, 500)
})

//function hover
let hover = document.querySelector('.story');

hover.addEventListener('mouseover', () => {
    right.style.display = "block";
    left.style.display = "block";
})

hover.addEventListener('mouseout', () => {
    right.style.display = "none";
    left.style.display = "none";
})