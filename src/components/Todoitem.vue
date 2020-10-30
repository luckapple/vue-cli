<template>
    <div>
        <li>
            <slot name="pre-icon" :value="value"></slot>
            <span v-if="del">{{title}}</span>
            <span v-else style="text-decoration: line-through;">{{title}}</span>
            <slot name=" "></slot>
        </li>
    </div>
</template>
<script>
    export default {
        props: {
            title: String,
            del: {
                type: Boolean,
                default: false,
            }
        },
        template: `
            <ul>
                <li v-if="del">{{title}}</li>
                <li v-else style="text-decoration: line-through;">{{title}}</li>
            </ul>`,
        data: function () {
            return {
                value:Math.random()
            }
        },
        methods: {

        }
    }
</script>