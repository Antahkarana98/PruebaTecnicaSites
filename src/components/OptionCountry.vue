<script setup>



 const traerDatos =  async () => {

  try {
    const url = `https://restcountries.com/v3.1/all`
    const data = await fetch(url)
    const countries = await data.json()
    return countries
  } catch (error) {
    console.log(error);
  }

 }
 const paises = await traerDatos()
//  console.log(paises);
</script>

<template>
</template>
