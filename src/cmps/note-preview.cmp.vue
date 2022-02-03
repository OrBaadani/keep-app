<template>
    <div class="note-preview">
        <component :note="note" :is="noteType"> </component>
    </div>
</template>

<script>
    import noteTodos from './note-types/note-todos.cmp.vue';
    import noteImg from './note-types/note-img.cmp.vue';
    import noteTxt from './note-types/note-txt.cmp.vue';
    import noteVideo from './note-types/note-video.cmp.vue';
    import { noteService } from '../services/note-service.js';
    export default {
        props: ['note'],
        data() {
            return {
                noteType: this.note.type,
                isChecked: null,
            };
        },
        components: {
            noteTodos,
            noteImg,
            noteTxt,
            noteVideo,
        },
        methods: {},
    };
</script>

<style></style>
