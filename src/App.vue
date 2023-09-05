<template>
  <div id="app">
    <h1>{{ $store.state.Todo.name }}</h1>
    <h1>{{ $store.state.a.name }}</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    console.log(this.$store.state);
  },
}
</script>
