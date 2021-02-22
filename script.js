// Timeline:
// Please note it's my first time using the GSAP library, I loved it! So cool! 

// Chevrons Appearing
gsap.fromTo("#chevrons", { opacity: 0 }, { duration: 5, opacity: 1 });

// Main Message 1 being replaced by Main Message 2
gsap.fromTo("#msg-2", { opacity: 0, duration: 7 }, { opacity: 1, ease: "sine.in", delay: 5 });

gsap.fromTo("#msg-1", { opacity: 1, duration: 7 }, { opacity: 0, ease: "sine.out", delay: 5 });


// Preferred FWD features running through their sequence
gsap.fromTo("#frame-4-a", { opacity: 1, duration: 8 }, { opacity: 0, ease: "sine.out", delay: 10 });

gsap.fromTo("#frame-4-c", { opacity: 0, duration: 8 }, { opacity: 1, ease: "sine.out", delay: 10, y: -18, onComplete: hideAnimationOne });

gsap.fromTo("#frame-4-b", { opacity: 1, duration: 8 }, { opacity: 0, ease: "sine.out", delay: 10 });

gsap.fromTo("#frame-4-d", { opacity: 0, duration: 8 }, { opacity: 1, ease: "sine.out", delay: 10, y: -18, onComplete: hideAnimationTwo });

function hideAnimationOne() {
    gsap.to("#frame-4-c", { opacity: 0, delay: 10 })
    console.log("animation happening!")
}

function hideAnimationTwo() {
    gsap.to("#frame-4-d", { opacity: 0, delay: 10 })
}


function hideAnimationThree() {
    gsap.to("#msg-2", { opacity: 0, delay: 5 })
    console.log("fireing");
}

gsap.fromTo("#frame-5", { opacity: 0, duration: 10 }, { opacity: 1, ease: "sine.in", delay: 22, y: -30, onComplete: hideAnimationThree });


// Main Message #3 set to appear quickly, ending the series of frames
gsap.set("#msg-3", { opacity: 0, duration: 35 });

gsap.set("#msg-3",  { opacity: 1,  delay: 29 });
















