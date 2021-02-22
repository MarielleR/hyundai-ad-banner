
// 1B Chevrons Appearing
gsap.fromTo("#chevrons", { opacity: 0 }, { duration: 5, opacity: 1 });


gsap.set("#msg-3", { opacity: 0, duration: 35 });



let messageChangeOne = gsap.fromTo("#msg-2", { opacity: 0, duration: 7 }, { opacity: 1, ease: "sine.in", delay: 5 });

let messageChangeTwo = gsap.fromTo("#msg-1", { opacity: 1, duration: 7 }, { opacity: 0, ease: "sine.out", delay: 5 });



gsap.fromTo("#frame-4-a", { opacity: 1, duration: 8 }, { opacity: 0, ease: "sine.out", delay: 10 });

gsap.fromTo("#frame-4-c", { opacity: 0, duration: 8 }, { opacity: 1, ease: "sine.out", delay: 10, y: -23, onComplete: hideAnimationOne });

gsap.fromTo("#frame-4-b", { opacity: 1, duration: 8 }, { opacity: 0, ease: "sine.out", delay: 10 });

gsap.fromTo("#frame-4-d", { opacity: 0, duration: 8 }, { opacity: 1, ease: "sine.out", delay: 10, y: -23, onComplete: hideAnimationTwo });

function hideAnimationOne() {
    gsap.to("#frame-4-c", { opacity: 0, delay: 10 })
    console.log("animation happening!")
}

function hideAnimationTwo() {
    gsap.to("#frame-4-d", { opacity: 0, delay: 10 })
}



// function displayLastFrame() {

// gsap.fromTo("#msg-3", { opacity: 0, ease: "sine.in", delay: 5 }, { opacity: 1, ease: "sine.in", delay: 5 });
//     console.log("last frame");
// }

function hideAnimationThree() {
    gsap.to("#msg-2", { opacity: 0, delay: 5 })
    console.log("fireing");
}

gsap.fromTo("#frame-5", { opacity: 0, duration: 10 }, { opacity: 1, ease: "sine.in", delay: 22, y: -42, onComplete: hideAnimationThree });

// function displayLastFrame() {
//     gsap.fromTo("#msg-3",{opacity:0, delay: 15}, { opacity: 1, ease: "sine.in", delay: 5});
//     console.log("last frame");
// }

// gsap.set("#msg-3", {opacity: 0, duration: 10 }, {opacity: 1, ease: "sine-in", delay:2});

gsap.set("#msg-3",  { opacity: 1,  delay: 27 });
















