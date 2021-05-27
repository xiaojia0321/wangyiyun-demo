<template>
    <div class="mainBox">
        <div class="lft">
            <Nav />

        </div>
        
        <div class="rt">
           <router-view />
        </div>
    </div>
</template>

<script>
import Nav from './Nav'
import FoundMusic from "../../components/FoundMusic";
import RecommendVideo from "../../components/RecommendVideo";
import MusicCloud from "../../components/MusicCloud";
export default {
    components: {
        FoundMusic,
        RecommendVideo,
        MusicCloud,
        Nav
    },
    data() {
        return {
            state: "FoundMusic",
        };
    },
};
</script>

<style lang="scss" scoped>
.mainBox {
    width: 100%;
    height: 660px;
    // border: 1px solid;
   
    .rt {
        width: 80%;
        height: 100%;

        position: relative;
        left: 288px;
    }
}
</style>