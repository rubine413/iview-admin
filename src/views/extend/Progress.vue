<template>
    <div class="section-table">
        <p class="section-desc"><Icon type="help-circled"></Icon>&nbsp;关于<code>iView</code>组件的详细API和用法请<a href="https://www.iviewui.com/docs/guide/install" target="_blank">点击这里</a></p>
        <div class="section-title">
            <p>Progress 进度条</p>
        </div>
        <div class="section-data">
            <Row :gutter="32">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Progress :percent="25"></Progress>
                    <Progress :percent="45" status="active"></Progress>
                    <Progress :percent="65" status="wrong"></Progress>
                    <Progress :percent="100"></Progress>
                    <Progress :percent="25" hide-info></Progress>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">               
                    <Progress :percent="25" :stroke-width="5"></Progress>
                    <Progress :percent="100">
                        <Icon type="checkmark-circled"></Icon>
                        <span>成功</span>
                    </Progress>
                    <br><br>
                    <Progress :percent="percent"></Progress>
                    <Button-group size="large">
                        <Button icon="ios-plus-empty" @click="add"></Button>
                        <Button icon="ios-minus-empty" @click="minus"></Button>
                    </Button-group>
                </Col>
            </Row>
        </div>     
        <div class="section-title">
            <p>Steps 步骤条</p>
        </div>
        <div class="section-data">
            <p class="section-data-desc">基本</p>
            <Steps :current="1">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps><br><br>
            <p class="section-data-desc">迷你型</p>
            <Steps :current="2" size="small">
                <Step title="已完成"></Step>
                <Step title="进行中"></Step>
                <Step title="待进行"></Step>
                <Step title="待进行"></Step>
            </Steps><br><br>
            <p class="section-data-desc">带图标</p>
            <Steps :current="1">
                <Step title="注册" icon="person-add"></Step>
                <Step title="上传头像" icon="camera"></Step>
                <Step title="验证邮箱" icon="email"></Step>
            </Steps><br><br>
            <p class="section-data-desc">当前正在进行第 {{ current + 1 }} 步</p>
            <Steps :current="current">
                <Step title="步骤1"></Step>
                <Step title="步骤2"></Step>
                <Step title="步骤3"></Step>
                <Step title="步骤4"></Step>
            </Steps><br>
            <i-button type="primary" @click="next">下一步</i-button>
        </div>
        <div class="section-title">
            <p>LoadingBar 加载进度条</p>
        </div>
        <div class="section-data">
            <Button @click="start">Start</Button>
            <Button @click="finish">Finish</Button>
            <Button @click="error">Error</Button>
        </div>
        <div class="section-title">
            <p>Circle 进度环</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">基本</p>
                    <i-circle :percent="80">
                        <span class="demo-i-circle-inner" style="font-size:24px">80%</span>
                    </i-circle>
                    <i-circle :percent="100" stroke-color="#5cb85c">
                        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                    </i-circle>
                    <i-circle :percent="35" stroke-color="#ff5500">
                        <span class="demo-i-circle-inner">
                            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
                        </span>
                    </i-circle>
                    <br><br>                    
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">配合外部组件使用</p>
                    <i-circle :percent="percentCircle" :stroke-color="color">
                        <Icon v-if="percentCircle == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                        <span v-else style="font-size:24px">{{ percentCircle }}%</span>
                    </i-circle>
                    <Button-group size="large">
                        <Button icon="ios-plus-empty" @click="addCircle"></Button>
                        <Button icon="ios-minus-empty" @click="minusCircle"></Button>
                    </Button-group>
                </Col>
            </Row>
            <Row>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">自定义</p>
                    <i-circle
                        :size="250"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="75"
                        stroke-linecap="square"
                        stroke-color="#43a3fb">
                        <div class="demo-i-circle-custom">
                            <h1>42,001,776</h1>
                            <p>消费人群规模</p>
                            <span>
                                总占人数
                                <i>75%</i>
                            </span>
                        </div>
                    </i-circle>
                </Col>
            </Row>        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 10,
            percentCircle: 10,
            current: 0
        };
    },
    computed: {
        color () {
            let color = '#2db7f5';
            if (this.percent === 100) {
                color = '#5cb85c';
            }
            return color;
        }
    },
    methods: {
        add() {
            if (this.percent >= 100) {
                return false;
            }
            this.percent += 10;
            return false;
        },
        minus() {
            if (this.percent <= 0) {
                return false;
            }
            this.percent -= 10;
            return false;
        },
        next () {
            if (this.current === 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        },
        start () {
            this.$Loading.start();
        },
        finish () {
            this.$Loading.finish();
        },
        error () {
            this.$Loading.error();
        },
        addCircle () {
            if (this.percentCircle >= 100) {
                return false;
            }
            this.percentCircle += 10;
            return false;
        },
        minusCircle () {
            if (this.percentCircle <= 0) {
                return false;
            }
            this.percentCircle -= 10;
            return false;
        }
    }
};
</script>







<style lang="stylus" scoped>   
@import '../../style/global.styl'

.section-title
    padding 10px
    background #f5f5f5
    margin 15px 0
    p
        font-weight bold
        color #666
        text-indent 12px
        border-left 2px solid $primary-color 
        
    div + &
        margin-top 60px 
.section-desc
    font-size 12px
    text-align right
.section-notice
    margin 10px 0
.section-data
    padding 10px 20px
    
.section-data-desc
    line-height 36px
    
.demo-i-circle-custom
    h1
        color #3f414d
        font-size 28px
        font-weight normal

    p
        color #657180
        font-size 14px
        margin 10px 0 15px

    span
        display block
        padding-top 15px
        color #657180
        font-size 14px
        &:before
            content ''
            display block
            width 50px
            height 1px
            margin 0 auto
            background #e0e3e6
            position relative
            top -15px   

    span i
        font-style normal
        color #3f414d


</style>
