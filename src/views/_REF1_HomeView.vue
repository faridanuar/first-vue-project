<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
// import { ref } from 'vue';

// let message = ref("Hello World");

// setTimeout(() => {
//   message.value = "I have Been changed";
// }, 2000)

// REFERENCE: modular function using mixins components
// import flash from "@/mixins/flash";

// export default {
//   mixins: [flash],
// }

// modular function using composable method
// Note 1: need to declare 'setup' inside script block before use
// Note 2: prefer this alternative method than using mixins method. Because better/cleaner code pratice
import { useFlash } from '@/composables/useFlash';
let { flash } = useFlash();
</script>

<template>
  <main>
    <p>
      <button @click="flash('Success', 'It Works on Home!', 'success')">Click Me Button</button>
    </p>

    <!-- <TheWelcome /> -->
    <!-- <p>{{ message }}</p> -->
    <!-- <p><input type="text" v-model="message" /></p> -->
  </main>
</template>
