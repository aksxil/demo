// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#main",
            start: "top top",
            end: "650% 0%",
            scrub: 2,
            pin: true,
            markers:true
        }
    }
);

// Animation 1
tl.to("#page1 .row1 h1", {
    scale: 0.4,
    ease: "power1.in",
    force3D: true,
},"a");

// Animation 2
tl.to("#page1 .row3", {
    scale: 7,
    color: "rgb(196, 0, 196)", // Change the font color to purple
    ease: "power1.in",
    force3D: true,
},"a");


// Animation 3
tl.to("#page1 .layer", {
    opacity: 1,
    ease: "power1.in",
    delay:"-.1",
    onComplete:function(){
        startNewAnimation()
    } ,
});
tl.to("#page1 .row", {
    opacity: 0
},"b");
tl.to(".layer2", {
    left:"0%",
    duration:.3,
    // delay:.5,
    // ease: "power2.in",

    onComplete:anim3()
},"b");


function startNewAnimation() {
    // New Animation
    tl.to("#page1 .layer", {
        x: "-98vw",
        ease: "power1.in",
        scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            end: "+1000",
            scrub: 2,
        },
        onComplete: anim2, // Fixed the onComplete parameter
    });
}

function anim2() {
    // New Animation with delay
    

}

function anim3(){
    tl.from(".layer2 p",{
        x:"100px",
        duration:.3,
        // y:"80px",
        ease: "power1.in",
        // scrub:2
    })
}
tl.to(".layer2 .sm", {
    scale: 0.5,
    ease: "power1.in",
    transformOrigin: "left 50%",
    delay: "1s"
}, "c");

tl.to(".layer2 .sp", {
    scale: 5,
    ease: "power1.in",
    transformOrigin: "left 50% top 50%"
}, "c");

// tl.to("#page1 .row1 h1", {
//     scale: 0.4,
//     ease: "power1.in",
//     force3D: true,
// },"a");

tl.to(".layer3",{
    opacity:1,
    ease: "power2.in",
    delay:"-1s"
})

tl.from(".layer3 .rows h1", {
    opacity: 0,
    rotate: 10,
    ease: "power3.in",
    y: "80px",
    stagger: 0.1 // Adjust the stagger value as needed
},"d");

tl.to(".layer2",{
    opacity:0
},"d")

tl.to(".layer3",{
    right:"-100%"
})

tl.to(".layer4",{
    width:"100%",
    delay:"-3s"
},"e")

tl.from(".layer4 .rows",{
    x:"100%"
},"e")

tl.from(".layer4 p",{
    opacity:0,
    rotate:7,
    transformOrigin:"left 0",
    ease:"power2.in"
})

tl.to(".layer4  span",{
    scale:4,
    color: "white", // Change the font color to purple
    ease: "power1.in",
},"w")

tl.to(".layer4 .pur",{
    scale:6,
    color: "white", // Change the font color to purple
    ease: "power1.in",
},"w")

tl.to(".layer4 .sms",{
    scale:.3,
    ease: "power1.in",
},"w")

tl.to(".layer5",{
    opacity:1
},"w")

