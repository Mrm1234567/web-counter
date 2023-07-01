<template>
    <Counter
      :year="2023"
      :month="6"
      :date="30"
      :hour="12"
      :minute="53"
      :second="0"
      :millisecond="0"
    />
</template>

<script>
import Counter from "../Counter.vue";
export default {
  components: { Counter },
};
</script>

<style lang="scss" scoped></style>
