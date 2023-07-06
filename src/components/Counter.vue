<template>
  <!-- <div class="flex flex-row items-center justify-center" v-if="displayHours <= 0">
    <span  class="">
      SPARK IS LAUNCHED
    </span>
    <CTA />
  </div> -->
  <div v-if="loaded" class="w-[100vw] h-[100vh]">
    <div class="video-container">

      <video class="background-video fit-width" v-if="displaySeconds <= 30" autoplay muted  @ended="die"> 
        <!-- Place here the Phase 4 vide link -->
        <source src="../assets/videos/Phase4.mp4" type="video/mp4">
      </video>
      <video class="background-video fit-width" v-else-if="displaySeconds <= 40" autoplay loop muted>
        <!-- Place here the Phase 3 vide link -->
        <source src="../assets/videos/Phase3.mp4" type="video/mp4" />
      </video>
      <video class="background-video fit-width" v-else-if="displaySeconds <= 50" autoplay loop muted>
        <!-- Place here the Phase 2 vide link -->
        <source src="../assets/videos/Phase2.mp4" type="video/mp4" />
      </video>
      <video class="background-video fit-width" v-else-if="displaySeconds > 50" autoplay loop muted>
        <!-- Place here the Phase 1 vide link -->
        <source src="../assets/videos/Phase1.mp4" type="video/mp4" />
      </video>
      <div class="text-overlay">
        <div class="text-base flex justify-center content-center mx-auto text-center text-white">
          <span v-if="displaySeconds <= 30" class="font-bold tracking-wide text-slate-100 saira-font">
            IGNITING A NEW ERA OF PRIVACY {{displaySeconds}} 4
          </span>
          <span v-else-if="displaySeconds <= 40" class="font-semibold tracking-wide text-slate-200 font-saira-semi-condensed">
            IGNITING A NEW ERA OF PRIVACY {{displaySeconds}} 3
          </span>
          <span v-else-if="displaySeconds <= 50" class="font-normal tracking-wide text-slate-300 font-saira-semi-condensed">
            IGNITING A NEW ERA OF PRIVACY {{displaySeconds}} 2
          </span>
          <span v-else-if="displaySeconds > 50" class="font-thin tracking-wide text-slate-300 font-saira-semi-condensed">IGNITING A NEW ERA OF PRIVACY {{displaySeconds}} 1</span>
          <span v-else></span>
        </div>
        <div v-if="displaySeconds <= 30" class="flex justify-center items-center   font-serif source-sans-font content-center text-slate-100 pt-32">
          <div class="hours mr-2 relative">
            {{ displayHours }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="minutes  mx-2 relative">
            {{ displayMinutes }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="seconds  mx-2 relative">
            {{ displaySeconds }} 4
            <div class="label text-sm absolute bottom-0"></div>
          </div>
        </div>

        <div v-else-if="displaySeconds <= 40" class="flex justify-center items-center   font-serif source-sans-font content-center text-slate-100 pt-32">
          <div class="hours mr-2 relative">
            {{ displayHours }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="minutes  mx-2 relative">
            {{ displayMinutes }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="seconds  mx-2 relative">
            {{ displaySeconds }} 3
            <div class="label text-sm absolute bottom-0"></div>
          </div>
        </div>

        <div v-else-if="displaySeconds <= 50" class="flex justify-center items-center   font-serif source-sans-font content-center text-slate-100 pt-32">
          <div class="hours mr-2 relative">
            {{ displayHours }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="minutes  mx-2 relative">
            {{ displayMinutes }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="seconds  mx-2 relative">
            {{ displaySeconds }} 2
            <div class="label text-sm absolute bottom-0"></div>
          </div>
        </div>

        <div v-else-if="displaySeconds > 50" class="flex justify-center items-center   font-serif source-sans-font content-center text-slate-100 pt-32">
          <div class="hours mr-2 relative">
            {{ displayHours }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="minutes  mx-2 relative">
            {{ displayMinutes }}
            <div class="label text-sm absolute bottom-0"></div>
          </div>
          <span class="leading-snug">:</span>
          <div class="seconds  mx-2 relative">
            {{ displaySeconds }} 1
            <div class="label text-sm absolute bottom-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-[100vw] h-[100vh]">
    <div class="video-container">
        <div id="1">
        <video class="background-video post-video fit-width" autoplay muted @ended="videoEnded">
          <!-- Place here the Post vide link -->
          <source src="../assets/videos/Postlaunchtransition.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="2" v-if="postVideo">
        <video class="background-video fit-width" autoplay loop muted>
          <!-- Place here the Post vide link -->
          <source src="../assets/videos/Postlaunchtransition.mp4" type="video/mp4" />
        </video>
        <div class="text-overlay">
          <div class="flex flex-col justify-center content-center mx-auto text-center text-white">
            <div class="font-bold spark">
              SPARK IS <br> LAUNCHED!
            </div>
            <div>
              <CTA />
            </div>
          </div>
        </div>
      </div>
      <!-- <video class="background-video fit-width" autoplay loop muted>
        <source src="../assets/videos/Postlaunchtransition.mp4" type="video/mp4" />
      </video>
      <div class="text-overlay">
        <div class="flex flex-col justify-center content-center mx-auto text-center text-white">
            <div class="font-bold spark">
              SPARK IS <br> LAUNCHED!
            </div>
            <div>
              <CTA />
            </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import CTA from "./CTA.vue";
export default {
  components: { CTA },
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data: () => ({
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
    postVideo: false,
    test: false,
    
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        //const end = new Date(2023, 6, 20, 12, 0, 0);
        const distance = this.end.getTime() - now.getTime();
        // if (distance < 0) {
        if (this.test) {
          console.log('fjjfjf');
          //4th phase
          clearInterval(timer);
          this.loaded = false;

          document.getElementById("2").style.display = "none";

          const video1 = document.getElementsByClassName("post-video");
          videoEnded();
          return; //add animation
        }
        const hours = Math.floor(distance / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.loaded = true;
      }, 1000);
    },
    videoEnded() {
    this.postVideo = true;
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
  },
  die() {
    this.test = true;
  },
  },
};
</script>

<style lang="scss" scoped></style>
