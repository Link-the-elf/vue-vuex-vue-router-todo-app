<template>
  <div class="w-80">
    <div class="mb-4">
      <TodoForm />
    </div>

    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
    />
  </div>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';

  import TodoForm from '../components/TodoForm.vue';
  import TodoItem from '../components/TodoItem.vue';

  const store = useStore();

  const todos = computed(() => store.getters.todos);

  onMounted(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos !== null) {
      store.commit('setTodos', todos);
    }
  })
</script>
