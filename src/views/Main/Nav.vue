<template>
    <div class="lft">
        <div class="main-text1">推荐</div>
        <div class="main-text2">
            <img src="../../assets/img/music.png" alt="" class="icon" />
            <span style="padding-left: 10px;" >
                <router-link to="/foundMusic">发现音乐</router-link>
            </span>
        </div>
        <div class="main-text2">
            <img src="../../assets/img/sp.png" alt="" class="icon" />
            <span style="padding-left: 10px">
                <router-link to="/">推荐视频</router-link>
            </span>
        </div>
        <div class="main-text1">我的音乐</div>
        <div class="main-text2">
            <img src="../../assets/img/yun.png" alt="" class="icon" />
            <span style="padding-left: 10px">我的音乐云盘</span>
        </div>

        <!-- <p @click="state = 'FoundMusic'">发现音乐</p> -->
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lft {
    width: 20%;
    height: 81%;
    border: 1px solid #aaa;
    border-bottom: none;
    position: fixed;
    border-top: none;
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
</style>