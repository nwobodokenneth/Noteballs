<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
      </template>
    </AddEditNote>
    <Note :note="note" v-for="note in storeNote.notes" :key="note.id"></Note>

  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStoreNote} from '../store/store'
import Note from '../components/notes/Note.vue'
import AddEditNote from '../components/notes/AddEditNote.vue';

  const newNote = ref('')
  const addEditNoteRef = ref(null)
  const storeNote = useStoreNote()
  const addNote = () => {
    storeNote.addNote(newNote.value)
    newNote.value = ''
    console.log('hi')
    addEditNoteRef.value.focusTextArea()
  }
</script>
