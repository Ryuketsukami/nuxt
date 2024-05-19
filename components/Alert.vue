<template>
  <div class="bg-green-500 rounded px-2 py-1 mb-2">
    Alert
  </div>
</template>

<script lang="ts" setup>
const { sayHello } = useUtils();
const { $sayGoodbye } = useNuxtApp();
// console.log(useNuxtApp());
$sayGoodbye('Allan');
</script>

<style>

</style>