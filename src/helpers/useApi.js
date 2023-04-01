import { ref } from 'vue';
export function useApi(url) {
  const data = ref([]);
  const error = ref(null);

  async function fetchData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  }

  return {
    data,
    error,
    fetchData,
  };
}
