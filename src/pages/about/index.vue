<template>
    <div class="home">{{name}}</div>
</template>

<script>
export default {
    name: 'home',
    data(){
        return {
            name: 'lingzi123'
        }
    }
}
</script>

<style scoped>
    .home{
        width: 100px;
        height: 100px;
        border: 1px solid red;
        background-color: aquamarine;
    }
</style>