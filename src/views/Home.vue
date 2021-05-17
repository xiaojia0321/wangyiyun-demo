<template>
    <div class="home-box">
        <Header />
        <Main />
        <Foot />
    </div>
</template>

<script>
import Header from "./Header";
import Main from "./Main";
import Foot from "./Foot";
export default {
    components: {
        Header,
        Main,
        Foot,
    },
};
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.home-box {
    width: 100%;

    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
}
</style>