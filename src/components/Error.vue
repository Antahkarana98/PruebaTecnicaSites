<script setup>
  const props = defineProps({
      error: String,

  });
</script>

<template>
  <p class="bg-red-700 text-white p-3 rounded-md
  text-center font-bold my-4">{{error}}</p>
</template>
