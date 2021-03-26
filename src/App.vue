<template>
  <nav>
    <router-link to= "/">Home</router-link> |
    <router-link to="/best">Best Sellers</router-link> |
    <router-link to="/deals">Deals</router-link>
  </nav>
  <router-view />

  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

</template>

<script setup></script>
