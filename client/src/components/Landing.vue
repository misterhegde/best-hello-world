<template>
  <div>
    <div class="container">
      <div class="item">
        <div class="context">
          <h1>Welcome to the most over engineered <em>Hello World!</em></h1>
          <p>scroll down for a surprise</p>
        </div>

        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="item myFace__container">
        <div class="myFace">
          <img
            src="https://i.ibb.co/yd8LTb1/myfacefinal-speechbubblev1.png"
            alt="myfacefinal-speechbubblev1"
            border="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import axois from 'axios'
export default {
  name: "Landing",
  data() {
    return {
      visits: 0,
    };
  },

  methods: {
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },

     setVisits(){
      axois.put('/api/visits',{visits:this.visits})

    },

    scrollEvent(){
       const myfaceContainer = document.querySelector(".myFace__container");
    const myFace = document.querySelector(".myFace");

    document.addEventListener("scroll", () => {
      if (this.isInViewport(myfaceContainer)) {
        console.log("inview");
        anime({
          targets: myFace,
          translateY: -250,
          translateX: -250,
          duration: 3000,
          opacity: 1,
        });
      } else {
        anime({
          targets: myFace,
          translateY: 0,
          translateX: 0,
          opacity: 0,

          //   duration: 4000,
        });
      }
    });
    }


  },

  mounted() {
    this.setVisits();
    this.scrollEvent();


  },
};
</script>

<style lang="css" scoped>
.item:nth-child(1) {
  display: flex;
  flex-direction: column;
  background-color: aqua;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.item:nth-child(2) {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
}

.myFace {
  position: absolute;
  bottom: 0;
  right: 0;
}

@import url("https://fonts.googleapis.com/css?family=Exo:400,700");

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Exo", sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}
.context p {
  text-align: center;
  color: #fff;
  font-size: 30px;
}

.area {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
