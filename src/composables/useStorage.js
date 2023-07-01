import { ref, watch } from "vue";

export function useStorage(key, val = null) {
    let storedVal = read();
    
    // handle default value then store in variable
    if (storedVal) {
        val = ref(storedVal);
    } else {
        val = ref(val);

        write();
    }

    // detect changes in vue model
    // deep: ask watch to also check property values changes inside the JSON object
    // WARNING: enable deep checking can affect performance for LARGE JSON OBJECT
    watch(val, write, { deep: true });

    // get the value based on key form local storage
    // json parse for possible json object value
    function read() {
        return JSON.parse(localStorage.getItem(key));
    }

    // write to local storage
    function write() {
        if (val.value === null || val.value === '') {
            localStorage.removeItem(key);
        } else {
            // convert to string for possible json object then store to local storage
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    return val;
}