<template>
  <div class="mb-2 text-sm flex items-center justify-between">
    <div 
      v-if="!isEdit"
      class="font-semibold" 
      @click="isEdit = true"
    >
      {{ todo.title }}
    </div>

    <input 
      v-else
      v-model="todo.title"
      type="text"
      class="font-semibold border rounded-xl outline-none py-1 px-4"
      @blur="onBlurHandler(todo.title)"
    >
    
    <button 
      type="button" 
      class="text-pink-800"
      @click="store.commit('removeTodo', todo.id)"
    >
      Delete
    </button>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  import { ref } from 'vue';

  defineProps({
    todo: {
      type: Object,
      required: true,
    },
  });

  const store = useStore();

  const isEdit = ref(false);

  const onBlurHandler = (title) => {
    if (!title.length) {
      return;
    }
    
    isEdit.value = false;

    localStorage.setItem('todos', JSON.stringify(store.getters.todos));
  }
</script>