<template>
    <div class="note-todos">
        <h3>{{ note.info.title }}</h3>
        <ul class="todos-container clean-list">
            <li v-for="(todo, i) in note.info.todos" :key="todo.id">
                <input
                    type="checkbox"
                    v-model="todo.isChecked"
                    :id="'todo' + note.id + i"
                    :name="'todo' + note.id + i"
                    @change="updateCheck(i, todo)"
                />
                <label
                    :for="'todo' + note.id + i"
                    :class="{ checked: todo.isChecked }"
                    >{{ todo.txt }}</label
                >
            </li>
        </ul>
    </div>
</template>

<script>
    import { noteService } from './../../services/note-service.js';

    export default {
        props: ['note'],
        data() {
            return {};
        },
        methods: {
            updateCheck(todoidx, todo) {
                noteService.updateNoteTodo(this.note, todoidx, todo.isChecked);
            },
        },
    };
</script>

<style></style>
