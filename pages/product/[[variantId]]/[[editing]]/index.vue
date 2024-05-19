<template>
  <div>
    variantId: {{ $route.params.variantId }} 
    {{ editingString }}
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const editingString = computed(() => `editing: ${route.params.editing}` || '');
  const nuxtApp = useNuxtApp()
  

</script>

<style>

</style>