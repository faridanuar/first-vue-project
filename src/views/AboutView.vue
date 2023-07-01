<script setup>
// REFERENCE: modular function using mixins components
// import flash from "@/mixins/flash";

// export default {
//   mixins: [flash],
// }

import { useFlash } from '@/composables/useFlash';
// modular function using composable method
// Note: prefer this alternative method than using mixins method. Because better/cleaner code pratice
let { flash } = useFlash();
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('Info', 'It Works on About!', 'info')">Click Me Button</button>
    </p>
  </div>
</template>
