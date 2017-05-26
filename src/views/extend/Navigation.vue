<template>
    <div class="section-table">
        <p class="section-desc"><Icon type="help-circled"></Icon>&nbsp;关于<code>iView</code>组件的详细API和用法请<a href="https://www.iviewui.com/docs/guide/install" target="_blank">点击这里</a></p>
        <div class="section-title">
            <p>Tabs 标签页</p>
        </div>
        <div class="section-data">
            <Row :gutter="32">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Tabs value="name1">
                        <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
                        <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
                        <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
                    </Tabs>
                    <br><br>
                    <Tabs>
                        <Tab-pane label="macOS" icon="social-apple">标签一的内容, 标签二被禁用</Tab-pane>
                        <Tab-pane label="Windows" icon="social-windows" disabled>标签二的内容</Tab-pane>
                        <Tab-pane label="Linux" icon="social-tux">标签三的内容, 标签二被禁用</Tab-pane>
                    </Tabs>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">               
                    <Tabs type="card" :animated="false">
                        <Tab-pane label="标签一">标签一的内容，禁用动画</Tab-pane>
                        <Tab-pane label="标签二">标签二的内容，禁用动画</Tab-pane>
                        <Tab-pane label="标签三">标签三的内容，禁用动画</Tab-pane>
                    </Tabs>
                    <br><br>
                    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                        <Tab-pane label="标签一" v-if="tab0">标签一的内容，标签可关闭</Tab-pane>
                        <Tab-pane label="标签二" v-if="tab1">标签二的内容，标签可关闭</Tab-pane>
                        <Tab-pane label="标签三" v-if="tab2">标签三的内容，标签可关闭</Tab-pane>
                    </Tabs>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Tabs type="card">
                        <Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}，可以在页签右边添加附加操作。</Tab-pane>
                        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra" :disabled="tabs > 3"><Icon type="plus-round"></Icon> 增加</Button>
                    </Tabs>
                </Col>
            </Row>
        </div>     
        <div class="section-title">
            <p>Dropdown 下拉菜单</p>
        </div>
        <div class="section-data">
            <Dropdown>
                <a href="javascript:void(0)">
                    下拉菜单
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item disabled>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item divided>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown>
                <Button type="primary">
                    下拉菜单
                    <Icon type="arrow-down-b"></Icon>
                </Button>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item disabled>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item divided>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)">
                    hover 触发
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown trigger="click">
                <a href="javascript:void(0)">
                    click 触发
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown trigger="custom" :visible="dropdownVisible">
                <a href="javascript:void(0)" @click="handleOpen">
                    custom 触发
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <p>常用于各种自定义下拉内容的场景。</p>
                    <div style="text-align: right;margin:10px;">
                        <Button type="primary" @click="handleClose">关闭</Button>
                    </div>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown placement="bottom-start">
                <a href="javascript:void(0)">
                    菜单(左)
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)">
                    菜单(居中)
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown placement="bottom-end">
                <a href="javascript:void(0)">
                    菜单(右)
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                    <Dropdown-item>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)">
                    北京小吃(嵌套用法)
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown placement="right-start">
                        <Dropdown-item>
                            北京烤鸭
                            <Icon type="ios-arrow-right"></Icon>
                        </Dropdown-item>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>挂炉烤鸭</Dropdown-item>
                            <Dropdown-item>焖炉烤鸭</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                    <Dropdown-item>冰糖葫芦</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
        </div>
        <div class="section-title">
            <p>Page 分页</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">基本</p>
                    <Page :total="100"></Page><br>
                    <p class="section-data-desc">每页数量</p>
                    <Page :total="100" show-sizer></Page><br>
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">快速跳转</p>
                    <Page :total="50" show-elevator></Page><br>
                    <p class="section-data-desc">显示总数</p>
                    <Page :total="100" show-total></Page><br>
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">简洁</p>
                    <Page :current="2" :total="50" simple></Page><br>
                    <p class="section-data-desc">迷你型</p>
                    <Page :total="40" size="small" show-elevator show-sizer></Page><br>
                </Col>
            </Row>        
        </div>
        <div class="section-title">
            <p>Breadcrumb 面包屑</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">基本</p>
                    <Breadcrumb>
                        <Breadcrumb-item href="/">Home</Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
                        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
                    </Breadcrumb><br><br>                    
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">带图标的 </p>
                    <Breadcrumb>
                        <Breadcrumb-item href="/">
                            <Icon type="ios-home-outline"></Icon> Home
                        </Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">
                            <Icon type="social-buffer-outline"></Icon> Components
                        </Breadcrumb-item>
                        <Breadcrumb-item>
                            <Icon type="pound"></Icon> Breadcrumb
                        </Breadcrumb-item>
                    </Breadcrumb>
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <p class="section-data-desc">自定义分隔符</p>
                    <Breadcrumb separator="<b style='color:#f50;'>=></b>">
                        <Breadcrumb-item href="/">Home</Breadcrumb-item>
                        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
                        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
                    </Breadcrumb>
                </Col>
            </Row>        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab0: true,
            tab1: true,
            tab2: true,
            tabs: 2,
            dropdownVisible: false,
            randomMovieList: [],
            collapseValue1: '2',
            collapseValue2: '1',
            collapseValue3: '1-2',
            carouselValue: 0,
            carouselSetting: {
                autoplay: true,
                autoplaySpeed: 2000,
                dots: 'inside',
                trigger: 'click',
                arrow: 'hover'
            }
        };
    },
    methods: {
        handleTabRemove(name) {
            this['tab' + name] = false;
        },
        handleTabsAdd () {
            this.tabs ++;
        },
        handleOpen () {
            this.dropdownVisible = true;
        },
        handleClose () {
            this.dropdownVisible = false;
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
    
.ivu-dropdown
    margin-right 30px
</style>
