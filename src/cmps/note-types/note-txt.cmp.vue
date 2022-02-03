<template>
    <div>
        <h3>{{ note.info.title }}</h3>
        <p>{{ note.info.txt }}</p>
    </div>
</template>

<script>
    export default {
        props: ['note'],
    };
</script>
