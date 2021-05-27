<template>
    <div>222222</div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const  {mapActions} = createNamespacedHelpers('personal')
export default {
    mounted() {
        this.getMusicDetail()
    },
    data() {
        return {};
    },
    methods:{
        ...mapActions(['getMusicDetail'])
    }
};
</script>

<style>
</style>