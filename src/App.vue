<template>
  <div class="container mx-auto py-10">
    <nav class="text-xl">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo-list">Todo List</router-link>
    </nav>

    <div class="mt-10">
      <router-view/>
    </div>
  </div>
</template>
