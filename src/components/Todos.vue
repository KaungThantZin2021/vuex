<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
      <h1 class="text-primary text-center">All Todos</h1>
      <div class="container">
        <div class="row">
            <AddTodo/>
        </div>
        <div class="row">
            <div class="col-md-4 my-4" v-for="todo of myTodos" :key="todo.id">
                <b-card bg-variant="primary" text-variant="white" class="text-center">
                    <b-card-text class="d-flex justify-content-between">
                        <span>{{ todo.title }}</span>
                        <span>
                            <button class="btn btn-sm btn-danger" @click="deleteTodo(todo.id)">
                                <b-icon icon="trash-fill" variant="white"></b-icon>
                            </button>
                        </span>
                    </b-card-text>
                </b-card>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddTodo from './AddTodo.vue';
export default {
    components: { AddTodo },
    computed: mapGetters(['myTodos']),
    methods: mapActions(['getTotos', 'deleteTodo']),
    mounted() {
        this.getTotos();
    }
};
</script>

<style></style>
