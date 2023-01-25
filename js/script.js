let canvasStory = document.querySelectorAll('#story');
let toogle = document.querySelector(".nav-more");


toogle.addEventListener('click', (e) => {
    let active = document.querySelector('.toogle');
    let navMore = document.querySelector('.nav-more span');

    
    active.classList.toggle("active")
    if (active.classList[1] === "active") {
        navMore.style.fontWeight = "bold"
    } else {
        navMore.style.fontWeight = "normal"
       
    }
})


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
