<template>
    <div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {},
        template: `
            <ul>
                <slot></slot>
            </ul>`,
        data: function () {
            return {
            }
        },
        methods: {

        }
    }
</script>