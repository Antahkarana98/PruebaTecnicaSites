<script setup>
  import { ref, reactive } from 'vue'
  import Button from './Button.vue'
  import Error from './Error.vue'
  import IconoValidacion from './IconoValidacion.vue'
  import OptionCountry from './OptionCountry.vue';
  import ButtonSubmit from './ButtonSubmit.vue';
  import AlertaUsuario from './AlertaUsuario.vue';

  const activePhase = ref(1);
  const error = ref(false);
  const error2 = ref(false);
  const showModal = ref(false);
  const alerta = ref(false);
  const errorPais = ref();
  const errorGenero = ref(0);
  const errorNombre = ref(0);
  const errorApellido = ref(0);
  const errorFecha = ref(0);
  const errorDocumento = ref(0);
  const errorEmail = ref(0);
  const errorPassword = ref(0);
  const errorPassword2 = ref(0);
  const errorTelefono = ref(0);
  const errorCelular = ref(0);
  const errorDireccion = ref(0);
  const errorCodigoPostal = ref(0);

  const expresiones = {
    generalLetras: /^[a-zA-ZÀ-ÿ\s]{2,100}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,16}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cedula: /^\d{5,999999999999999}$/ // 5 a n numeros.
  }

  let usuario = reactive({
    pais: '',
    genero: '',
    nombre: '',
    apellido: '',
    fecha: '',
    documento: '',
    documentoI: 0,
    documentoFrente: '',
    documentoReverso: '',
    email: '',
    password: '',
    password2: '',
    telefono: '',
    celular: '',
    direccion: '',
    codigoPostal: '',
  })


  const handleClickI = () => {
    activePhase.value++;
  };

  const handleClickD = () => {
    activePhase.value--;
  };

  const modal = () => {
    showModal.value = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const someV = (element) => (element == 2);

    if(([ usuario.pais, usuario.genero, usuario.nombre,
    usuario.apellido, usuario.fecha, usuario.documento,
    usuario.email, usuario.password, usuario.telefono,
    usuario.celular,usuario.direccion, usuario.codigoPostal ].includes('') && usuario.documentoI === 0)){
      error.value = true;
      setTimeout(() => {

          error.value = false;
        }, 3000);
        return
    }else if([errorGenero.value, errorNombre.value, errorApellido.value, errorFecha.value, errorDocumento.value, errorEmail.value, errorPassword.value, errorPassword2.value,
    errorTelefono.value, errorCelular.value, errorDireccion.value, errorCodigoPostal.value].some(someV)){
      error2.value = true;
      setTimeout(() => {

          error2.value = false;
        }, 3000);
        return
    }

    error.value = false;
    error2.value = false;
    alerta.value = true;
    setTimeout(() => {
      alerta.value = false;
    }, 3000);
    modal()
    console.log(usuario);
  };

  const validarFormulario = (e) => {
    switch (e.target.name) {

      case "pais":
        usuario = {
          ...usuario,
          pais: e.target.value.trim(),
        };
        errorPais.value = 1;
        break;

      case "genero":

        usuario = {
        ...usuario,
        genero: e.target.value.trim(),
        };
        if(expresiones.generalLetras.test(e.target.value)){
          errorGenero.value = 1;
        }else if (usuario.genero.length >= 1){
          errorGenero.value = 2;
        }else{
          errorGenero.value = 0;
        }
        break;

      case "nombre":

        errorNombre.value = 1;
        usuario = {
        ...usuario,
        nombre: e.target.value.trim(),
        };
        if(expresiones.nombre.test(e.target.value)){
        }else if (usuario.nombre.length >= 1){
          errorNombre.value = 2;
        }else{
          errorNombre.value = 0;
        }
        break;

      case "apellido":

        usuario = {
        ...usuario,
        apellido: e.target.value.trim(),
        };
        if(expresiones.nombre.test(e.target.value)){
          errorApellido.value = 1;
        }else if (usuario.apellido.length >= 1){
          errorApellido.value = 2;
        }else{
          errorApellido.value = 0;
        }
        break;

      case "fecha":


        let fechaSeparada = e.target.value.split('-');
        const anio = fechaSeparada[0];
        const mes = fechaSeparada[1];
        const dia = fechaSeparada[2];
        const edad = 18;
        const miFecha = new Date();
        miFecha.setFullYear(anio, mes - 1, dia);

        const fechaActal = new Date();
        fechaActal.setFullYear(fechaActal.getFullYear() - edad);

        if ((fechaActal - miFecha) < 0) {
          errorFecha.value = 2;
          return
        }

        usuario = {
          ...usuario,
          fecha: e.target.value.trim(),
        };
        errorFecha.value = 1;
        break;

      case "documento":
        usuario = {
          ...usuario,
          documento: e.target.value.trim(),
        };
        break;

      case "documentoI":

        usuario = {
        ...usuario,
        documentoI: e.target.value.trim(),
        };
        if(expresiones.cedula.test(e.target.value)){
          errorDocumento.value = 1;
        }else if (usuario.documentoI.length >= 1){
          errorDocumento.value = 2;
        }else{
          errorDocumento.value = 0;
        }
        break;

      case "documentoFrente":
        usuario.documentoFrente = 'imagen frente';
        break;

      case "documentoReverso":
        usuario.documentoReverso = 'imagen atras';
        break;

      case "email":

        usuario = {
        ...usuario,
        email: e.target.value.trim(),
        };
        if(expresiones.correo.test(e.target.value)){
          errorEmail.value = 1;
        }else if (usuario.email.length >= 1){
          errorEmail.value = 2;
        }else{
          errorEmail.value = 0;
        }
        break;

      case "password":

        usuario = {
        ...usuario,
        password: e.target.value.trim(),
        };
        if(expresiones.password.test(e.target.value)){
          errorPassword.value = 1;
        }else if (usuario.password.length >= 1){
          errorPassword.value = 2;
        }else{
          errorPassword.value = 0;
        }
        break;

      case "password2":
        usuario = {
        ...usuario,
        password2: e.target.value.trim(),
        };
        if(e.target.value === usuario.password){
          errorPassword2.value = 1;
        }else if (usuario.password2.length !== 1){
          errorPassword2.value = 2;
        }else{
          errorPassword2.value = 0;
        }
        break;

      case "telefono":
        usuario = { ...usuario, telefono: e.target.value.trim()};
        if(expresiones.cedula.test(e.target.value)){
          errorTelefono.value = 1;
        }else if (usuario.telefono.length >= 1){
          errorTelefono.value = 2;
        }else{
          errorTelefono.value = 0;
        }
        break;

      case "celular":

        usuario = { ...usuario, celular: e.target.value.trim()};
        if(expresiones.cedula.test(e.target.value)){
          errorCelular.value = 1;
        }else if (usuario.celular.length >= 1){
          errorCelular.value = 2;
        }else{
          errorCelular.value = 0;
        }
        break;

      case "direccion":

        usuario = { ...usuario, direccion: e.target.value.trim()};
        if(e.target.value.length >= 5){
          errorDireccion.value = 1;
        }else if (usuario.direccion.length < 5){
          errorDireccion.value = 2;
        }else{
          errorDireccion.value = 0;
        }
        break;

      case "codigo-postal":

        usuario = { ...usuario, codigoPostal: e.target.value.trim()};
        if(expresiones.cedula.test(e.target.value)){
          errorCodigoPostal.value = 1;
        }else if (usuario.codigoPostal.length >= 1){
          errorCodigoPostal.value = 2;
        }else{
          errorCodigoPostal.value = 0;
        }
        break;

      default:
        break;
    }
  }
</script>

<template >

  <div id="details1"
  v-if="activePhase == 1"
  class="my-20 max-w-xl mx-auto bg-white shadow p-10 rounded-lg"
  >

    <div class="ms-24">
      <ol class="flex items-center w-full mx-auto">
        <li class="flex w-full items-center text-orange-600 dark:text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-orange-600">
            <span class="font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-600 shrink-0">
                1
            </span>
        </li>
        <li class="font-bold flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-400">
            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-400 shrink-0">
                2
            </span>
        </li>
        <li class="flex items-center w-full">
            <span class="font-bold flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-400 shrink-0">
                3
            </span>
        </li>
      </ol>

    </div>

    <form action="">
    <label for="pais" class="block text-gray-700 uppercase font-bold mt-5">País</label>

    <div class="relative">

        <select name="pais" id="pais" required
        class="mt-2 w-full p-2 bg-white border border-gray-300 rounded-lg text-center
        text-xl font-bold text-gray-500"
        @input="validarFormulario"
        >
          <option disabled selected value="0">Elige tu pais</option>
          <OptionCountry />
        </select>
        <IconoValidacion
          :errorVariable = errorPais
        />
      </div>
    <label for="genero" class="block text-gray-700 uppercase font-bold mt-5">Genero</label>
    <div class="relative">
      <input
        type="text"
        name="genero"
        id="genero"
        placeholder="Ingresa tu genero"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.genero"
        @input="validarFormulario"
      >
      <IconoValidacion
          :errorVariable = errorGenero
      />

    </div>

    <label for="nombre" class="block text-gray-700 uppercase font-bold mt-5">Nombre</label>
    <div class="relative">
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Ingresa tu nombre"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.nombre"
        @input="validarFormulario"
      >
        <IconoValidacion
          :errorVariable = errorNombre
        />
    </div>

    <label for="apellido" class="block text-gray-700 uppercase font-bold mt-5">Apellido</label>
    <div class="relative">
      <input
        type="text"
        name="apellido"
        id="apellido"
        placeholder="Ingresa tu apellido"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.apellido"
        @input="validarFormulario"
      >

        <IconoValidacion
          :errorVariable = errorApellido
        />

    </div>


    <label for="fecha" class="block text-gray-700 uppercase font-bold mt-5">Fecha de nacimiento</label>
    <div class="relative">
      <input
        type="date"
        name="fecha"
        id="fecha"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.fecha"
        @input="validarFormulario"
      >

      <IconoValidacion
        :errorVariable = errorFecha
      />
    </div>

    <label for="documento" class="block text-gray-700 uppercase font-bold mt-5">Tipo de Documento</label>
    <select name="documento" id="documento"
    class="mt-2 w-full p-2 bg-white border border-gray-300 rounded-lg text-center
    text-xl font-bold text-gray-500"
    @input="validarFormulario"
    >
        <option disabled selected >Elige tu tipo de documento</option>
        <option value="Cedula">Cedula de ciudadanía</option>
        <option value="pasaporte">Pasaporte</option>
        <option value="Cedula-extranjeria">Cedula de extranjeria</option>
    </select>

    <div class="relative">

      <input
        type="number"
        name="documentoI"
        id="documentoI"
        placeholder="Ingresa tu documento"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        min="5"
        @keyup="validarFormulario"
        @blur="validarFormulario"
      >
      <IconoValidacion
        :errorVariable = errorDocumento
      />
    </div>

    <label for="documento-frente" class="block text-gray-700 uppercase font-bold mt-5">Foto documento-frente</label>
    <input
      type="file"
      id="documento-frente" name="documento-frente"
      accept="image/png, image/jpeg"
      class=" w-full mt-2 text-xl text-gray-500"
      @change="validarFormulario"
      :value="usuario.documentoFrente"
    >

    <label for="documento-reverso" class="block text-gray-700 uppercase font-bold mt-5">Foto documento-reverso</label>
    <input
      type="file"
      id="reverso" name="reverso"
      accept="image/png, image/jpeg"
      class=" w-full mt-2 text-xl text-gray-500"
      @change="validarFormulario"
    >

    <div class="flex justify-end mt-10">
      <!-- <Button
        :text = "'Previus'"
        @fn = "handleClickD"
      /> -->
      <Button
        :text = "'Continue'"
        @fn = "handleClickI"
      />
    </div>
    </form>
  </div>

  <div id="details2"
    v-if="activePhase == 2"
    class="my-20 max-w-xl mx-auto bg-white shadow p-10 rounded-lg"
  >

    <div class="ms-24">
      <ol class="flex items-center w-full mx-auto">
        <li class="flex w-full items-center text-orange-600 dark:text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-orange-600">
          <span class="font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-600 shrink-0">
              1
          </span>
        </li>
        <li class="flex w-full items-center text-orange-600 dark:text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-orange-600">
          <span class="font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-600 shrink-0">
              2
          </span>
        </li>
        <li class="flex items-center w-full">
            <span class="font-bold flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-400 shrink-0">
                3
            </span>
        </li>
      </ol>

    </div>

    <form action="">
    <label for="email" class="block text-gray-700 uppercase font-bold mt-5">Email</label>
    <div class="relative">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingresa tu email"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.email"
        @input="validarFormulario"
      >

      <IconoValidacion
          :errorVariable = errorEmail
      />
    </div>

    <label for="password" class="block text-gray-700 uppercase font-bold mt-5">Contraseña</label>
    <div class="relative">
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Ingresa tu contraseña"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.password"
        @input="validarFormulario"
      >
      <IconoValidacion
          :errorVariable = errorPassword
      />

    </div>

    <label for="password2" class="block text-gray-700 uppercase font-bold mt-5">Contraseña</label>
    <div class="relative">
      <input
        type="password"
        name="password2"
        id="password2"
        placeholder="Ingresa tu contraseña"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.password2"
        @input="validarFormulario"
      >
      <IconoValidacion
          :errorVariable = errorPassword2
      />

    </div>


    <label for="celular" class="block text-gray-700 uppercase font-bold mt-5">Celular</label>
    <div class="relative">

      <input
        type="text"
        name="celular"
        id="celular"
        placeholder="Ingresa tu Celular"
        class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        :value="usuario.celular"
        @input="validarFormulario"
      >
      <IconoValidacion
          :errorVariable = errorCelular
      />
    </div>

    <label for="telefono" class="block text-gray-700 uppercase font-bold mt-5">Telefono</label>
      <div class="relative">
        <input
          type="text"
          name="telefono"
          id="telefono"
          placeholder="Ingresa tu telefono"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          :value="usuario.telefono"
          @input="validarFormulario"
        >
        <IconoValidacion
            :errorVariable = errorTelefono
        />
      </div>

    <div class="flex justify-between mt-10">
      <Button
        :text = "'Previus'"
        @fn = "handleClickD"
      />
      <Button
        :text = "'Continue'"
        @fn = "handleClickI"
      />
    </div>

    </form>
  </div>

  <div id="details3"
    v-if="activePhase == 3"
    class="my-20 max-w-xl mx-auto bg-white shadow p-10 rounded-lg"
    >
    <div class="ms-24">
      <ol class="flex items-center w-full mx-auto">
        <li class="flex w-full items-center text-orange-600 dark:text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-orange-600">
          <span class="font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-600 shrink-0">
              1
          </span>
        </li>
        <li class="flex w-full items-center text-orange-600 dark:text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-orange-600">
          <span class="font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-600 shrink-0">
              2
          </span>
        </li>
        <li class="flex items-center w-full">
            <span class="font-bold flex items-center text-white justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-600 shrink-0">
                3
            </span>
        </li>
      </ol>

    </div>

    <form @submit.prevent="handleSubmit" >
      <label for="direccion" class="block text-gray-700 uppercase font-bold mt-5">Dirección</label>
        <div class="relative">

          <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Ingresa tu dirección"
            class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            :value="usuario.direccion"
            @input="validarFormulario"
          >
          <IconoValidacion
              :errorVariable = errorDireccion
          />
        </div>

      <label for="codigo-postal" class="block text-gray-700 uppercase font-bold mt-5">Código postal</label>
      <div class="relative">

        <input
          type="text"
          name="codigo-postal"
          id="codigo-postal"
          placeholder="Ingresa tu código postal"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          :value="usuario.codigoPostal"
          @input="validarFormulario"
        >
        <IconoValidacion
            :errorVariable = errorCodigoPostal
        />
      </div>

      <div v-if="error">
        <Error
          :error = "'Todos los campos son obligatorios'"
        />
      </div>

      <div v-if="error2">
        <Error
          :error = "'Algunos campos no son validos'"
        />
      </div>

      <div v-if="alerta">
        <AlertaUsuario
          :alerta = "'Usuario creado correctamente'"
        />
      </div>


      <div class="flex justify-between mt-10">
        <Button
          :text = "'Previus'"
          @fn = "handleClickD"
        />



        <button type="submit" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Crear Usuario
        </button>

        <modal :show="showModal" @update:show="showModal = $event" >
          <template #header>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Usuario</h3>
          </template>
          <p class="text-md text-gray-500">Usuario Creado Correctamente</p>
        </modal>


      </div>
    </form>
  </div>


</template>
