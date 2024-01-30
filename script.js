function loadingAnnimation(){
    let tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    duration:0.6,
    delay:0.5,
    stagger:0.2
})

tl.from("#line1-part1",{
  opacity:0,
  onStart:function(){
    let timer = document.querySelector("#line1-part1 h5");
    let count = 0;
    setInterval(function(){
        if(count<100)
        {
            timer.textContent = count++;
        }
        else{
            timer.textContent = count;
        }

    },35)
  }

})

tl.to(".line h2",{
    opacity:1,
    animationName:"anime",
    animationDuration:1,
    animationIterationCount:"infinite"
})

tl.to("#loader",{
    opacity:0,
    delay:2.7,
    duration:0.4
})

tl.from("#page1",{
    y:800,
    // duration:0.6,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
    opacity:0,
    duration:0.3
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    duration:0.4,
    stagger:0.2
})

}
function cursorAnnimation(){
    document.addEventListener("mousemove",function(details){
        gsap.to("#crsr",{
            left:details.x,
            top:details.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}

loadingAnnimation();
cursorAnnimation();




