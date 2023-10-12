<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="template">
    <div class="Navlogo">
      <div class="container-fluid">
        <RouterLink :to="`/`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="LOGO"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"
            />
          </svg>
          <a class="text-title"> UNDER CLOUD</a>
        </RouterLink>
      </div>
    </div>
    <div class="container_cart">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.template{
  display: grid;
  background-color: rgb(84, 84, 142);
}
.container_cart {
  margin: 20px;
}
.Navlogo {
  padding: 20px;
  background-image: linear-gradient(
    45deg,
    rgba(0, 89, 179, 1) 0%,
    rgba(36, 111, 186, 1) 32%,
    rgba(111, 156, 201, 1) 66%,
    rgba(179, 197, 214, 1) 86%,
    rgba(222, 222, 222, 1) 100%
  );
  margin-bottom: 20px;
}
.LOGO {
  color: rgb(220, 224, 255);
}
.text-title {
  font-weight: 500;
  font-size: x-large;
  text-decoration: none;
  color: white;
  padding: 10px;
}

</style>
