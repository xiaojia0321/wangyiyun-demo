<template>
    <div class="foundBox" >
        <div class="header">
            <ul class="header-ul">
                <li @click="this.personal" class="ui-box bottom-inOutSpread">
                    个性推荐
                </li>
                <li @click="this.musiclist" class="ui-box bottom-inOutSpread">
                    歌单
                </li>
                <li @click="this.rankinglist" class="ui-box bottom-inOutSpread">
                    排行榜
                </li>
                <li @click="this.singer" class="ui-box bottom-inOutSpread">
                    歌手
                </li>
                <li @click="this.nowMusic" class="ui-box bottom-inOutSpread">
                    最新音乐
                </li>
            </ul>
        </div>
        <div class="main">
            <component :is="state"></component>
        </div>
    </div>
</template>

<script>
import personRecommend from "./personRecommend";
import musicList from "./musicList";
import rankingList from "./rankingList";
import singer from "./singer";
import newMusic from "./newMusic";
export default {
    components: {
        personRecommend,
        musicList,
        rankingList,
        singer,
        newMusic,
    },
    data() {
        return {
            state: "personRecommend",
        };
    },
    methods: {
        //个性推荐
        personal() {
            this.state = "personRecommend";
        },
        //歌单
        musiclist() {
            this.state = "musicList";
        },
        //排行榜
        rankinglist() {
            this.state = "rankingList";
        },
        //歌手
        singer() {
            this.state = "singer";
        },
        //最新音乐
        nowMusic() {
            this.state = "newMusic";
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 514px;
    height: 90px;
   
    margin: auto;
    text-align: center;
    line-height: 90px;
    margin-bottom: 10px;

    .header-ul {
        width: 100%;
        height: 90px;
        
        list-style: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        li {
            float: left;
            width: 100px;
            height: 100%;
        }
        .ui-box {
            text-decoration: none;
            // border: none;
           
            font-family: "Roboto", sans-serif;
            position: relative;
            vertical-align: baseline;
            padding: 10px;
            font-size: 16px;
            box-sizing: border-box;
            &:hover {
                color: #c62f2f;
            }
        }
        .bottom-inOutSpread:before,
        .bottom-inOutSpread:after,
        .bottom-inOutSpread > .ui-border-element:before,
        .bottom-inOutSpread > .ui-border-element:after {
            content: "";
            position: absolute;
        }
        .bottom-inOutSpread:after {
            border-bottom: 4px solid #c62f2f;
            color: #c62f2f;

            left: 51%;
            right: 51%;
            bottom: 0px;
            -webkit-transition-property: all;
            -moz-transition-property: all;
            -o-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(
                0,
                0.98,
                0.51,
                0.93
            );
            -moz-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
            -o-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
            transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
            -webkit-transition-duration: 200ms;
            -moz-transition-duration: 200ms;
            -o-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-delay: 0s;
            -moz-transition-delay: 0s;
            -o-transition-delay: 0s;
            transition-delay: 0s;
        }
        .bottom-inOutSpread:hover:after {
            left: 0%;
            right: 0%;
        }
        // .bottom-inOutSpread:not(:hover):after {
        //     -webkit-transition-delay: 0s;
        //     -moz-transition-delay: 0s;
        //     -o-transition-delay: 0s;
        //     transition-delay: 0s;

        // }
    }
}
.main {
    width: 100%;
    height: 565px;
    // border: 1px solid;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin-left: 3px;
}
</style>