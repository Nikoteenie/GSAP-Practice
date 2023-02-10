gsap.registerPlugin(ScrollTrigger);
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
    scrub: 3,
    // markers: true,
  },
});
record.from(".front-dummy", 20, { rotation: "-360" });
// gsap.to(".front-dummy", 15, { rotation: "360", ease: Linear.easeNone });





//quote reveal
gsap.to(".quote span", {
  backgroundPositionX: "0%",
  stagger: .3,
  scrollTrigger: {
    trigger: ".quote",
    // markers: true,
    scrub: 5,
    start: "top center",
    end: "bottom 80%",
  },
});



// background change color
const colorChange = gsap.timeline({
  scrollTrigger: {
    trigger: ".track-title",
    scrub: true,
    // markers: true,
    start: "top center",
    end: "bottom center",
  }
});

colorChange.to(".color", {
  backgroundColor: "#82abff",
  color: "#002060",
});

colorChange.to(".main-title", {
  color: "#002060"
})
colorChange.to(".notes a", {
  color: "#002060",
});


//image reveal on for album song list

const songName = document.querySelectorAll(".song-name");
const image = document.querySelector(".test");

songName.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    imageData = e.target.getAttribute("data-image");
    console.log(imageData);
    // e.target.style.zIndex = 99;
    image.setAttribute("src", imageData);
  });
  el.addEventListener("mousemove", (e) => {
    image.style.top = e.clientY + "px";
    image.style.left = e.clientX + "px";
  });
  el.addEventListener("mouseleave", (e) => {
    e.target.style.zIndex = 1;
    image.setAttribute("src", "");
  });
});

// //listen to album
// const choseName = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".album-listen",
//     start: "top 50%",
//     end: "bottom 50%",
//     scrub: 8,
//     // markers: true,
//   },
// });
// choseName.from(".album-listen h2", { duration: .5, ease: "expo.out", y: -200 });



