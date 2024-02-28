<template>
  <form class="flex gap-4 text-sm" @submit.prevent="createTodo">
    <input 
      v-model="title"
      type="text" 
      class="w-full border rounded-xl outline-none py-1 px-4"
      placeholder="Buy House..."
    >
    <button type="submit">Create</button>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const title = ref('');

  const createTodo = () => {
    if (!title.value.length) {
      return;
    }

    store.commit('createTodo', title.value);
    title.value = '';

    localStorage.setItem('todos', JSON.stringify(store.getters.todos));
  }
</script>