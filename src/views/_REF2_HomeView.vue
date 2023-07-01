<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food', 'Salad');
let age = useStorage('age');
</script>

<template>
    <main>
        <p>
            What is your favourite food? <input type="text" v-model="food" />
        </p>
        <p>
            What is your gae? <input type="text" v-model="age" />
        </p>
    </main>
</template>
