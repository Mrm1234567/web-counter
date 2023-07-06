<template>
  <div class="mt-5">
    <a :href="url" target="_blank">
      <button class="bg-[#6c0505] py-4 px-6 rounded-full text-[#FFFF] font-bold hover:bg-[#520202]">READ MORE</button>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue"

const url = ref("http://www.firo.org")

</script>

<style lang="scss" scoped></style>
