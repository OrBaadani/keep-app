<template>
    <div id="app">
        <userMsg />
        <app-header />
        <router-view class="app-main-layout" />
        <app-footer />
    </div>
</template>

<script>
    import appHeader from './cmps/layout/app-header.cmp.vue';
    import appFooter from './cmps/layout/app-footer.cmp.vue';
    import userMsg from './cmps/user-msg.cmp.vue';

    export default {
        components: {
            appHeader,
            appFooter,
            userMsg,
        },
    };
</script>
