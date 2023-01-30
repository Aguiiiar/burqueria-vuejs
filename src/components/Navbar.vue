<template>
  <nav>
    <router-link class="logo-url" to="/">
      <img class="logo" :src="logo" :alt="alt">
    </router-link>
    <router-link to="/">Fazer Pedido</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  props: ["logo", "alt"]
}
</script>

<style scoped>
nav {
  width: 100%;
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav .logo-url {
  margin: auto;
  margin-left: 0;
}

.logo {
  width: 50px;
  height: 50px;
}

nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}

nav a:hover {
  color: #FFF;
}
</style>