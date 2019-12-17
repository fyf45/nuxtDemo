<template>
    <div>
        <h2>关于我们</h2>
        <nuxt-link :to="{name:'index'}">跳转到首页</nuxt-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "关于我们"
            }
        },
        head(){
            return {
                title:this.title,
                meta:[{
                    hid: "description",name:"news",content:"i am news"
                }]
            }
        }
    }
</script>

<style lang="" scoped>

</style>