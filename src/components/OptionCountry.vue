<script>

import { useApi } from '../helpers/useApi.js';
import { onMounted } from 'vue';

export default {
  setup() {
    const { data, error, fetchData } = useApi('https://restcountries.com/v3.1/all');

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      error,
    };
  },
};
</script>

<template>

  <option v-for="pais in data" :key="pais.name.common" :value=pais.name.common>{{ pais.name.common }}</option>

</template>
