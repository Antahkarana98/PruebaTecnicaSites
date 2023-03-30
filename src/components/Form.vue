<script setup>
  import { ref } from 'vue'


  const activePhase = ref(1);
</script>

<template >
  <div id="details1"
  v-if="activePhase == 1"
  class="my-20 max-w-xl mx-auto bg-white shadow p-10 rounded-lg"
  >
    <h2>Step 1</h2>

    <form action="">
    <label for="pais" class="block">País</label>
    <input
      type="text"
      name="pais"
      id="pais"
      placeholder="Nombre de tu país"
    >

    <label for="genero" class="block">Genero</label>
    <input
      type="text"
      name="genero"
      id="genero"
      placeholder="Ingresa tu genero"
    >

    <label for="nombre" class="block">Nombre</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Ingresa tu nombre"
    >

    <label for="apellido" class="block">Apellido</label>
    <input
      type="text"
      name="apellido"
      id="apellido"
      placeholder="Ingresa tu apellido"
    >

    <label for="fecha" class="block">Fecha de nacimiento</label>
    <input
      type="date"
      name="fecha"
      id="fecha"
      class="block"
    >

    <label for="documento" class="block">Tipo de Documento</label>
    <select name="documento" id="documento">
        <option value="Cedula">Cedula de ciudadanía</option>
        <option value="pasaporte">Pasaporte</option>
        <option value="Cedula-extranjeria">Cedula de extranjeria</option>
    </select>

    <label for="documento-frente" class="block">Foto documento-frente</label>
    <input
      type="file"
      id="documento-frente" name="documento-frente"
      accept="image/png, image/jpeg"
    >

    <label for="documento-reverso" class="block">Foto documento-reverso</label>
    <input
      type="file"
      id="reverso" name="reverso"
      accept="image/png, image/jpeg"
    >
    </form>
  </div>

  <div id="details2" v-if="activePhase == 2">
    <h2>Step 2</h2>

    <form action="">
    <label for="email" class="block">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Ingresa tu email"
    >

    <label for="password" class="block">Contraseña</label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Ingresa tu contraseña"
    >

    <label for="password-confirm" class="block">Confirmar contraseña</label>
    <input
      type="password"
      name="password-confirm"
      id="password-confirm"
      placeholder="Confirma tu contraseña"
    >

    <label for="celular" class="block">Celular</label>
    <input
      type="text"
      name="celular"
      id="celular"
      placeholder="Ingresa tu Celular"
    >

    <label for="telefono" class="block">Telefono</label>
    <input
      type="text"
      name="telefono"
      id="telefono"
      placeholder="Ingresa tu telefono"
    >


    </form>
  </div>

  <div id="details2" v-if="activePhase == 3">
    <h2>Step 3</h2>
    <form>
      <label for="direccion" class="block">Dirección</label>
      <input
        type="text"
        name="direccion"
        id="direccion"
        placeholder="Ingresa tu dirección"
      >

      <label for="codigo-postal" class="block">Código postal</label>
      <input
        type="text"
        name="codigo-postal"
        id="codigo-postal"
        placeholder="Ingresa tu código postal"
      >
    </form>
  </div>

  <!-- <div>
    <button @click="activePhase = 1">Previous</button>
    <button @click="activePhase = 2">Next</button>
  </div> -->

</template>
