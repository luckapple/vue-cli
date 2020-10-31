<template>
    <div>
        <h3>个人中心</h3>
        {{count}}
        <br>
        {{$store.getters.doubleCount}}
        <button @click="$store.commit('increment')">count++</button>
        <button @click="$store.dispatch('increment')">count++</button>
    </div>
</template>
<script>
    export default {
        computed: {
            count(){
                return this.$store.state.count
            }
        },
    }
</script>
<style></style>