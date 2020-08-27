<template>
    <div>
        <div class="tab_list rows">
            <div class="teb_item column">
                <img class="tab_icon" src="../static/tabbar/home_sel.png" alt="">
                <span class="tab_name">首页</span>
            </div>
            <div class="teb_item column">
                <img class="tab_icon" src="../static/tabbar/shop.png" alt="">
                <span class="tab_name">首页</span>
            </div>
            <div class="teb_item column">
                <img class="tab_icon" src="../static/tabbar/faquan.png" alt="">
                <span class="tab_name">首页</span>
            </div>
            <div class="teb_item column">
                <img class="tab_icon" src="../static/tabbar/find.png" alt="">
                <span class="tab_name">首页</span>
            </div>
            <div class="teb_item column">
                <img class="tab_icon" src="../static/tabbar/my.png" alt="">
                <span class="tab_name">首页</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        mounted() {
            console.log("加载数据")
        },
    }
</script>
<style scoped>
    .tab_list{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 12vw;
        border-top: 1px solid #e5e5e5;
    }
    .teb_item{
        width: 20vw;
    }
    .tab_icon{
        width: 6vw;
        height: 6vw;
        display: block;
    }
    .tab_name{
        display: block;
        font-size: 12px;
    }
</style>