<template>
    <div>
        <h3>首页</h3>
        <template v-for="{key,name} in list">
            <div :key="key">
                <router-link :to="`/${key}`">{{name}}章节</router-link>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    {
                        key: "find",
                        name: "发现"
                    },
                    {
                        key: "shop",
                        name: "商城"
                    },
                    {
                        key: "my",
                        name: "我的"
                    },
                    {
                        key: "faquan",
                        name: "发圈"
                    }
                ]
            }
        }
    }
</script>
<style>

</style>