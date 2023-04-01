<script setup>
  const props = defineProps({
      alerta: String,

  });
</script>

<template>
  <p class="bg-green-500 text-white p-3 rounded-md
  text-center font-bold my-4">{{alerta}}</p>
</template>
