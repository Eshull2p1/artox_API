<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { City_Weather } from '../stores/counter.js'

const City_Weather_List = City_Weather()
const City = ref(City_Weather_List.City)

const items = ref([])
const url = ref('{{i.ip}}')

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(fetchPosts)
</script>

<template>
  <div class="colCart">
    <div v-for="(i, index) in City" :key="index">
      <div class="card h-100" style="text-align: center; background-color: rgb(215, 237, 251);padding: 10px;">
        <h3 style="font-weight: 700;">{{ i.name }}</h3>
        <img :src="i.img" class="card-img-top" />
        <RouterLink :to="`/WeatherCard/${index}`">
          <button class="btn" type="submit">ตรวจสอบสภาพอากาศ {{ i.name }}</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colCart {
  margin-inline: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 20px;
  row-gap: 10px;
}
.card-img-top {
  width: 100%;
  max-height: 400px;
}
.btn {
  background-color: rgb(6, 6, 112);
  color: white;
  font-weight: 500;
  margin-top: 10px  ;
}
.btn:hover {
  background-color: rgb(70, 70, 147);
  color: white;
  font-weight: 600;
}
</style>
