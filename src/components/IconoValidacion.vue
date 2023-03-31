<script setup>
  const props = defineProps({
    errorVariable: Number,
  });
</script>

<template>
  <div v-if="errorVariable == 1" class="absolute inset-y-0 left-full ms-1 flex items-center text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 rounded-full bg-green-400 p-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
  <div v-else-if="errorVariable == 2" class="absolute inset-y-0 left-full ms-1 flex items-center text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 rounded-full bg-red-600 p-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

  </div>

</template>
