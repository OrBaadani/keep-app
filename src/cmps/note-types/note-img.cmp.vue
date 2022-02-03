<template>
    <div>
        <h3>{{ note.info.title }}</h3>
        <img :src="note.info.url" alt="" />
    </div>
</template>

<script>
    export default {
        props: ['note'],
    };
</script>

<style></style>
