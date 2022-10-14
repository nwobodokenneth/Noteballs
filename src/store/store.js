import { defineStore } from 'pinia'


export const useStoreNote = defineStore('storeNote', {
  state: () => ({
    notes: [
      {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculismauris'
      },
      {
        id: 2,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculismauris jack'
      }
    ]
  }),
  actions: {
    addNote(newContent){
      let currentDate = new Date().getTime(),
          id = currentDate.toString()
      let obj = {
        id,
        content: newContent
      }
      this.notes.unshift(obj)
    },
    deleteNote(id){
      this.notes = this.notes.filter(item => {
        return item.id !== id
      })
    }
  }

})