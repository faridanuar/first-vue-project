<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";
import { ref } from "vue";
import TeamModal from '@/components/Teams/TeamModal.vue'

let team = useTeamStore();
let showModal = ref(false);
</script>

<template>
    <button 
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="! team.spotsRemaining"
        @click="showModal = true"
    >
        Add Member ({{ team.spotsRemaining }} Spots Left)
    </button>

    <!-- Teleport uses to push this TeamModal html down before the end of given element -->
    <!-- In this example push down before end of body html tag -->
    <Teleport to="body">
        <TeamModal :show="showModal" @close="showModal = false">
            <template #default>
                <p>Add a new member to your team.</p>

                <form class="mt-6 modal-form">
                    <div class="flex gap-2">
                        <input name="email" type="text" placeholder="Insert email here.." class="flex-1"/>
                        <button>
                            Add
                        </button>
                    </div>
                </form>
            </template>
        </TeamModal>
    </Teleport>
</template>

<style>
.modal-form input {
    background: rgb(51, 51, 51);
}
</style>