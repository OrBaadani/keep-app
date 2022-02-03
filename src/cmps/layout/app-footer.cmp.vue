<template>
    <footer class="app-footer">
        <h4>Copyright &copy; {{ footerYear }} All rights reserved</h4>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                footerYear: new Date().getFullYear(),
            };
        },
    };
</script>

<style></style>
