<template>
    <div>
        <div class="tab_list rows">
            <template v-for="(item,index) in tabList">
                <router-link :to="item.url" :key="index" @click.native="cur_index(index)">
                    <div class="teb_item column">
                        <img class="tab_icon" :src="cur_num==index?item.sel:item.nor" alt="">
                        <span class="tab_name">{{item.name}}</span>
                    </div>
                </router-link>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cur_num:0,
                tabList: [
                    { name: '首页', url: '/index', nor: require('../static/tabbar/home.png'), sel: require('../static/tabbar/home_sel.png') },
                    { name: '商城', url: '/shop', nor: require('../static/tabbar/shop.png'), sel: require('../static/tabbar/shop_sel.png') },
                    { name: '发圈', url: '/faquan', nor: require('../static/tabbar/faquan.png'), sel: require('../static/tabbar/faquan_sel.png') },
                    { name: '特权', url: '/find', nor: require('../static/tabbar/find.png'), sel: require('../static/tabbar/find_sel.png') },
                    { name: '我的', url: '/my', nor: require('../static/tabbar/my.png'), sel: require('../static/tabbar/my_sel.png') },
                ]
            }
        },
        mounted() {
            console.log("加载数据")
        },
        methods: {
            cur_index(num) {
                this.cur_num = num;
            }
        },
    }
</script>
<style>
    .tab_list {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 12vw;
        border-top: 1px solid #e5e5e5;
    }

    .teb_item {
        width: 20vw;
        height: 12vw;
        justify-content: center;
    }

    .tab_icon {
        width: 6vw;
        height: 6vw;
        display: block;
    }

    .tab_name {
        display: block;
        font-size: 12px;
    }

    .router-link-active {
        text-decoration: none;
        color: green;
    }

    a {
        text-decoration: none;
        color: #333;
    }
</style>