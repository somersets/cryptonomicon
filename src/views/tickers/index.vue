<template>
  <div class="mx-auto container">
    <div v-for="ticker of 10" :key="ticker">
      <router-link :to="`/list/ticker/${Math.floor(Math.random() * 1000)}`">{{
        ticker
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListTickers',
  data() {
    return {};
  }
};
</script>

<style scoped></style>
