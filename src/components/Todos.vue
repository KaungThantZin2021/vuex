<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
      <h1 class="text-primary text-center">All Todos</h1>
      <div class="container">
        <div class="row">
            <div class="col-md-4 my-4" v-for="todo of myTodos" :key="todo.id">
                <b-card bg-variant="primary" text-variant="white" class="text-center">
                    <b-card-text>{{ todo.title }}</b-card-text>
                </b-card>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: mapGetters(['myTodos']),
    methods: mapActions(['getTotos']),
    mounted() {
        this.getTotos();
    }
};
</script>

<style></style>
