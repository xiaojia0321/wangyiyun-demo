<template>
    <div class="header">
        <div class="center">
            <div class="center-rt">
                <div class="img"></div>
                <span class="text">小成音乐</span>
                <i class="el-icon-arrow-left"></i>
                <el-row class="demo-autocomplete">
                    <el-col :span="12">
                        <el-autocomplete
                            class="inline-input"
                            v-model="state1"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入歌曲名或者歌手"
                            @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                </el-row>
            </div>
            <div class="center-lft">
                <div class="person-img">
                    <img
                        src="../assets/img/users.png"
                        alt=""
                        style="width: 35px; height: 35px; margin-top: 4px"
                    />
                </div>
                <div class="users">
                    <span round @click="dialogFormVisible = true">未登录</span>

                    <el-dialog
                        :visible.sync="dialogFormVisible"
                        class="loginBox"
                        width="36%"
                        center
                        :modal="false"
                    >
                        <!-- 插入测试 -->
                        <el-form
                            :model="ruleForm2"
                            status-icon
                            :rules="rules2"
                            ref="ruleForm2"
                            label-width="100px"
                            class="demo-ruleForm"
                        >
                            <img
                                src="../assets/img/phone.svg"
                                alt=""
                                style="
                                    margin: auto;

                                    margin-left: 130px;
                                "
                            />
                            <el-form-item prop="num">
                                <el-input
                                    v-model.number="ruleForm2.num"
                                    style="width: 280px"
                                    prefix-icon="el-icon-user-solid"
                                ></el-input>
                            </el-form-item>

                            <el-form-item prop="pass">
                                <el-input
                                    type="password"
                                    v-model="ruleForm2.pass"
                                    auto-complete="off"
                                    style="width: 280px"
                                    prefix-icon="el-icon-key"
                                ></el-input>
                            </el-form-item>

                            <!-- <el-form-item label="记住密码" prop="delivery">
                                <el-switch
                                    v-model="ruleForm2.delivery"
                                ></el-switch>
                            </el-form-item>
                            <span><a>忘记密码？</a></span> -->
                        </el-form>
                        <!-- 插入测试 -->

                        <div slot="footer" class="dialog-footer">
                            <el-button
                                @click="
                                    dialogFormVisible = false;
                                    resetForm('ruleForm2');
                                "
                                >取 消</el-button
                            >
                            <el-button
                                type="primary"
                                @click="submitForm('ruleForm2')"
                                >登 录</el-button
                            >
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        var checkNum = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("账号不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                    if (!myreg.test(value)) {
                        callback(new Error("请输入正确的手机号码"));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };

        return {
            //搜索框
            restaurants: [],
            state1: "",

            //登录
            loginPower: false,
            /*插入form方法*/
            /*设定规则指向*/
            ruleForm2: {
                pass: "",
                num: "",
                delivery: false,
            },
            rules2: {
                pass: [{ validator: validatePass, trigger: "blur" }],

                num: [{ validator: checkNum, trigger: "blur" }],
            },

            /*插入form方法*/

            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: "",
                type: [],
                resource: "",
                desc: "",
            },
            formLabelWidth: "120px",
        };
    },
    mounted() {
        this.restaurants = this.loadAll();
    },
    methods: {
        //登录
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //提交成功做的动作
                    dialogFormVisible = false;
                    /* alert('submit!') ; */
                    this.$message({
                        type: "success",
                        message: "提交成功",
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        //搜索框内容
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (
                    restaurant.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        loadAll() {
            return [
                { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
                {
                    value: "Hot honey 首尔炸鸡（仙霞路）",
                    address: "上海市长宁区淞虹路661号",
                },
                {
                    value: "新旺角茶餐厅",
                    address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
                },
                 { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
                {
                    value: "Hot honey 首尔炸鸡（仙霞路）",
                    address: "上海市长宁区淞虹路661号",
                },
                {
                    value: "新旺角茶餐厅",
                    address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
                },
                 { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
                {
                    value: "Hot honey 首尔炸鸡（仙霞路）",
                    address: "上海市长宁区淞虹路661号",
                },
               

            ];
        },
        handleSelect(item) {
            console.log(item);
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.header {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    background-color: #c62f2f;
    .center {
        width: 96%;
        margin: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .center-rt {
            width: 500px;
            height: 100%;
            box-sizing: border-box;
            line-height: 70px;
            display: flex;
            .img {
                width: 50px;
                height: 50px;
                margin-top: 10px;
                background: url("../assets/img/demo.c904c2aa.svg") no-repeat
                    center center;
                background-size: contain;
            }
            .text {
                font-size: 24px;
                color: aliceblue;
                margin-left: 10px;
                width: 150px;
                height: 100%;
            }
            .el-icon-arrow-left {
                width: 25px;
                height: 25px;
                border: 1px solid;
                margin-top: 23px;
                text-align: center;
                line-height: 25px;
                border-radius: 50%;
                color: white;
            }
            .inline-input {
                margin-left: 20px;
                width: 230px;
                height: 40px;
                margin-top: 0px;
            }
        }
        .center-lft {
            width: 120px;
            height: 100%;
           
            box-sizing: border-box;
            display: flex;
            .person-img {
                width: 45px;
                height: 45px;
                margin-top: 14px;
                border-radius: 50%;
            }
            .users {
                line-height: 70px;
                margin-left: 10px;
                color: white;
                .loginBox {
                    box-shadow: 0 0 2px 2px #cecccc;
                }
            }
        }
    }
}
</style>