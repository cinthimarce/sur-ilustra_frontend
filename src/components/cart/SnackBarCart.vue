<script setup>

import { ref,defineProps } from 'vue'

defineProps({
    message:{
        type: String,
        required: true
    },
    buttonLabel:{
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const showSnackbar = ref(false);

</script>

<template>
    <div class="text-center ma-2">
        <v-btn @click="showSnackbar = true" :disabled="disabled">
            {{ buttonLabel }}
        </v-btn>
        <v-snackbar v-model="showSnackbar">
            {{ message }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="showSnackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>


<style scoped></style>