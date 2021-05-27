<template>
    <div class="footBox">
        <div class="center">
            <div class="button"></div>
            <div class="slider">
                <audio src=""></audio>
            </div>
        </div>
        <div class="rt"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footBox {
    width: 100%;
    height: calc(100% - 740px);
    border: 1px solid red;
    position: fixed;
    top: 90%;
    left: 0;
    right: 0;
    bottom: 0;
    .center {
        width: 700px;
        height: 100%;
        border: 1px solid;

        float: left;
        margin: auto;
        margin-left: 27%;
        margin-right: 40px;
    }
    .rt {
        width: 200px;
        height: 100%;
        border: 1px solid;
        float: left;
    }
}
</style>