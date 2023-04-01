<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- otros campos del formulario -->
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Usuario
      </button>
    </form>
    <modal :show="showModal" @update:show="showModal = $event">
      <template #header>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Mi Modal</h3>
      </template>
      <p class="text-md text-gray-500">Este es el contenido del modal.</p>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    submitForm() {
      // Lógica de envío del formulario
      this.showModal = true;
    },
  },
};
</script>
