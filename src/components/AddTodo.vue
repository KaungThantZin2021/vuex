<template>
    <div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="newTodo.title" placeholder="Type todo...">
            <div class="input-group-append">
                <button class="btn btn-primary" @click="addTodo(newTodo)">Add Todo</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            newTodo: {
                title: ""
            }
        }
    },
    methods: mapActions(['addTodo']),
}
</script>