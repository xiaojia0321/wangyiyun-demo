<template>
    <div class="mainBox">
        <div class="lft">
            <div class="main-text1">推荐</div>
            <div class="main-text2">
                <img src="../assets/img/music.png" alt="" class="icon" />
                <span style="padding-left: 10px" @click="state = 'FoundMusic'"
                    >发现音乐</span
                >
            </div>
            <div class="main-text2">
                <img src="../assets/img/sp.png" alt="" class="icon" />
                <span
                    style="padding-left: 10px"
                    @click="state = 'RecommendVideo'"
                    >推荐视频</span
                >
            </div>
            <div class="main-text1">我的音乐</div>
            <div class="main-text2">
                <img src="../assets/img/yun.png" alt="" class="icon" />
                <span style="padding-left: 10px" @click="state = 'MusicCloud'"
                    >我的音乐云盘</span
                >
            </div>

            <!-- <p @click="state = 'FoundMusic'">发现音乐</p> -->
        </div>
        <div class="rt">
            <component :is="state"></component>
        </div>
    </div>
</template>

<script>
import FoundMusic from "../components/FoundMusic";
import RecommendVideo from "../components/RecommendVideo";
import MusicCloud from "../components/MusicCloud";
export default {
    components: {
        FoundMusic,
        RecommendVideo,
        MusicCloud,
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
    height: 650px;
    // border: 1px solid;
    .lft {
        width: 20%;
        height: 79%;
        border: 1px solid #aaa;
        border-bottom: none;
        position: fixed;
        .main-text1 {
            opacity: 0.5;
            font-weight: 50;
            font-size: 14px;

            width: 100%;
            height: 40px;
            // border: 1px solid;
            box-sizing: border-box;
            line-height: 40px;
            padding-left: 10px;
        }
        .main-text2 {
            width: 100%;
            height: 56px;
            font-size: 16px;
            color: #303133;
            width: 100%;
            height: 56px;
            box-sizing: border-box;
            line-height: 56px;
            padding-left: 30px;
            &:hover {
                background-color: #e6e7ea;
            }
            .icon {
                display: inline-block;
                width: 20px;
                vertical-align: middle;
            }
        }
    }
    .rt {
      
        width: 80%;
        height: 100%;
        // border: 1px solid;
        position: relative;
        left: 288px;
    }
}
</style>