<template>
  <div
    class="mx-auto lg:container flex items-center border-solid border-gray-200 border-opacity-70 border-b shadow-lg"
  >
    <router-link
      to="/"
      exact
      active-class="underline"
      type="button"
      class="ml-4 mr-4 my-4 py-2 px-4 text-lg leading-4 font-light transition-colors duration-300 hover:bg-blue-100 active:bg-blue-400"
    >
      Главная
    </router-link>
    <router-link
      to="/list"
      exact
      active-class="underline"
      type="button"
      class="mr-4 my-4 py-2 px-4 text-lg leading-4 font-light transition-colors duration-300 hover:bg-blue-100 active:bg-blue-400"
    >
      Валюты
    </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped></style>
