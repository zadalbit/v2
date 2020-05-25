<template>
    <div id="app">
        <router-view/>
        <notifications group="foo" />
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
    @font-face {
        font-family: "Glyphicons Halflings";
        src: url("~@/assets/fonts/glyphicons-halflings-regular.eot");
        src: url("~@/assets/fonts/glyphicons-halflings-regular.eot?#iefix") format("embedded-opentype"), url("~@/assets/fonts/glyphicons-halflings-regular.woff2") format("woff2"), url("~@/assets/fonts/glyphicons-halflings-regular.woff") format("woff"), url("~@/assets/fonts/glyphicons-halflings-regular.ttf") format("truetype"), url("~@/assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular") format("svg");
    }
    @import '~@/assets/css/bootstrap/bootstrap.min.css';
    @import '~@/assets/css/main.css';
</style>