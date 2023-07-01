<script setup>
//import { ref } from 'vue';
// this variable contains the textarea field element/DOM node, because added ref= inside the field
// let textarea = ref(null);

defineProps({
    modelValue: String,
});

let emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
    // e.target: gets the target element of the event happend on the form
    let t = e.target;
    let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

    t.value = val.substring(0, start) + "\t" + val.substring(end);
    t.selectionStart = t.selectionEnd = start + 1;
}

// function update(e) {
//     // update the value of from here (child vue) the v-model from the parent vue
//     emit('update:modelValue', e.target.value);
// }
</script>

<template>
    <!-- @keydown detects if user press a key -->
    <!-- .tab: check if the key is tab -->
    <!-- .prevent: enable event.preventDefault -->
    <!-- then will trigger the funtion -->
    <textarea 
        @keydown.tab.prevent="onTabPress"
        @keyup="emit('update:modelValue', event.target.value);"
        v-text="modelValue"
    />
</template>