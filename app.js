//ball mouse follow
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

//Record Player Spinning
const record = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top 5%",
    scrub: 5,
    // markers: true,
  },
});

record.from(".front-dummy", { rotation: -360 });

//Chosen By : Nicole Brodkin
const choseName = gsap.timeline({
  scrollTrigger: {
    trigger: ".chose",
    start: "top 50%",
    end: "bottom 50%",
    scrub: 5,
    markers: true,
  },
});

choseName.from(".mention", { duration: 5.5, ease: "bounce.out", y: -200 });
