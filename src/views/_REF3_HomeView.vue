<script setup>
import TabbableTextArea from '@/components/TabbableTextArea.vue';
import { ref } from 'vue';

let comment = ref(null);

setTimeout(() => {
    comment.value = "It Works Baby!";
}, 2000)
</script>

<template>
    <main>
        <form>
            <TabbableTextArea v-model="comment" style="width: 100%; height: 300px;"></TabbableTextArea>
        </form>
    </main>
</template>
