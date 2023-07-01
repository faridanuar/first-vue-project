<script setup>
import { state } from "@/stores/MessageStore.js";
</script>

<template>
    <main>
        <h1>{{ state.name }}</h1>
    </main>
</template>
