<script setup>
  const props = defineProps({
      text: String,
      
  });
</script>

<template>


  <button
        type="button"
        class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        @click="$emit('fn')"
    >{{ text }}</button>
</template>
