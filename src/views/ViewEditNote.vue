<template>
  <div class="edit-note">
    <AddEditNote ref="addEditNoteRef" v-model="noteContent" bgColor="link" placeholder="Edit Note">
      <template #buttons>
        <button :disabled="!noteContent" class="button is-link has-background-link">Save Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import AddEditNoteVue from '../components/notes/AddEditNote.vue';
  const noteContent = ref('')
</script>
