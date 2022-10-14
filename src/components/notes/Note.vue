<template>
  <div>
    <div class="card mb-5">
      <div class="card-content">
        <div class="content">
          {{note.content}}
          <div class="has-text-right has-text-grey-light mt-2">
            <small>{{characterLength}}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
        <a @click.prevent="handleDelete" href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import {useStoreNote} from '../../store/store'

const storeNote = useStoreNote()
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const characterLength = computed(() => {
  let desc = props.note.content.length > 1 ? 'characters' : 'character'
  let length = props.note.content.length
  return `${length} ${desc}`
})
const handleDelete = () => {
  storeNote.deleteNote(props.note.id)
}
</script>