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
    duration:0.2
})

tl.from("#page1",{
    y:1600,
    duration:0.2,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
