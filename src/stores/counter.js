import { ref } from 'vue';
import { defineStore } from 'pinia'

export const City_Weather = defineStore('City', () => {

const City  = ref([
  {name: 'เชียงใหม่', img:'https://ak-d.tripcdn.com/images/0101w120008tyoqok60F6_Z_640_10000_R5.png_.webp?proc=autoorient',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'กรุงเทพฯ', img:'https://assets.brandinside.asia/uploads/2021/01/shutterstock_1456717751-1024x683.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.884067360988016&lon=99.01340628045365&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'ขอนแก่น', img:'https://image.mfa.go.th/mfa/0/L189HH20av/%E0%B8%9B%E0%B8%8A%E0%B8%AA_%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%991.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.879198960518284&lon=99.01400969350873&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'หาดใหญ่', img:'https://lh4.googleusercontent.com/OYrtf3JXfMR6MbPJXQ1rQyL6Q9FiXVm7CPNueVGpJveO2I2v-OK_nGA9rOOQXh4U1qJnKJGFFewMnMTzxNgzioXXJpf3693ezhMA4yNJIVeOyNqmjGDp6msWzczZhogWZzg90v9D?dpr=2&w=675&fit=scale&auto=format&fm=pjpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88680552840249&lon=99.00700527133165&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'ภูเก็ต', img:'https://roijang.com/wp-content/uploads/2022/10/patong-beach-with-crystal-clear-water-wave-most-famous-1024x683.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.80202637792063&lon=98.99512191864117&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'พัทยา', img:'https://1d43ee26.flyingcdn.com/wp-content/uploads/2022/05/pattaya-city-tour.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.795914426649965&lon=98.96570372658144&appid=66af6261484edc25c7b1b61803d7547c'},
])

return { City }
})