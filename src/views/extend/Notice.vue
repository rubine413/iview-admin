<template>
    <div class="section-table">
        <p class="section-desc"><Icon type="help-circled"></Icon>&nbsp;关于<code>iView</code>组件的详细API和用法请<a href="https://www.iviewui.com/docs/guide/install" target="_blank">点击这里</a></p>
        <div class="section-title">
            <p>Alert 警告提示</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Alert>消息提示文案</Alert>
                    <Alert type="success">成功提示文案</Alert>
                    <Alert type="warning">警告提示文案</Alert>
                    <Alert type="error">错误提示文案</Alert>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Alert show-icon>消息提示文案</Alert>
                    <Alert type="success" show-icon>成功提示文案</Alert>
                    <Alert type="warning" show-icon>警告提示文案</Alert>
                    <Alert type="error" show-icon>错误提示文案</Alert>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Alert closable>消息提示文案</Alert>
                    <Alert type="warning" closable>
                        自定义关闭内容
                        <span slot="close">不再提示</span>
                    </Alert>
                    <Alert banner type="warning">通知：通知内容。。。</Alert>
                    <Alert banner closable type="warning">通知：通知内容。。。</Alert>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Alert>
                        消息提示文案
                        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
                    </Alert>
                    <Alert type="success">
                        成功提示文案
                        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                    </Alert>
                    <Alert type="warning">
                        警告提示文案
                        <template slot="desc">
                            警告的提示描述文案警告的提示描述文案警告的提示描述文案
                        </template>
                    </Alert>
                    <Alert type="error">
                        错误提示文案
                        <span slot="desc">
                            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
                        </span>
                    </Alert>
                </Col>  
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Alert show-icon>
                        消息提示文案
                        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
                    </Alert>
                    <Alert type="success" show-icon>
                        成功提示文案
                        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                    </Alert>
                    <Alert type="warning" show-icon>
                        警告提示文案
                        <template slot="desc">
                            警告的提示描述文案警告的提示描述文案警告的提示描述文案
                        </template>
                    </Alert>
                    <Alert type="error" show-icon>
                        错误提示文案
                        <span slot="desc">
                            自定义错误描述文案。
                        </span>
                    </Alert>            
                </Col>  
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Alert type="success" show-icon closable>
                        成功提示文案
                        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                    </Alert>
                    <Alert show-icon>
                        自定义图标
                        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
                        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
                    </Alert>
                </Col>       
            </Row>
        </div>
        <div class="section-title">
            <p>Message 全局提示</p>
        </div>   
        <div class="section-data">
            <Button @click="success">显示成功提示</Button>
            <Button @click="warning">显示警告提示</Button>
            <Button @click="error">显示错误提示</Button>
            <Button @click="loading">显示加载中...</Button>
            <Button @click="time">显示一个10秒的提示</Button>
        </div>
        <div class="section-title">
            <p>Notice 通知提醒</p>
        </div>
        <div class="section-data">
            <Button @click="infoNotice(false)">消息</Button>
            <Button @click="successNotice(false)">成功</Button>
            <Button @click="warningNotice(false)">警告</Button>
            <Button @click="errorNotice(false)">错误</Button>
            <Button @click="infoNotice(true)">消息（仅标题）</Button>
            <Button @click="successNotice(true)">成功（仅标题）</Button>
            <Button @click="warningNotice(true)">警告（仅标题）</Button>
            <Button @click="errorNotice(true)">错误（仅标题）</Button>
            <Button type="primary" @click="timeNotice">自定义时长</Button>
        </div>
        <div class="section-title">
            <p>Modal 对话框</p>
        </div> 
        <div class="section-data">
            <Button type="primary" @click="modal1 = true">显示对话框</Button>
            <Modal
                v-model="modal1"
                title="普通的Modal对话框标题"
                @on-ok="ok1"
                @on-cancel="cancel1">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
            <Button @click="modal2 = true">自定义页头和页脚</Button>
            <Modal v-model="modal2" width="360">
                <p slot="header" style="color:#f60;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>删除确认</span>
                </p>
                <div style="text-align:center">
                    <p>此任务删除后，下游 10 个任务将无法执行。</p>
                    <p>是否继续删除？</p>
                </div>
                <div slot="footer">
                    <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
                </div>
            </Modal>
            <Button @click="modal3 = true">不带标题栏</Button>
            <Modal v-model="modal3">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
            <Button @click="modal5 = true">设置宽度</Button>
            <Modal
                v-model="modal5"
                title="自定义宽度"
                width="300">
                <p>自定义宽度，单位 px，默认 520px。</p>
                <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
            </Modal>
            <Button type="primary" @click="modal6 = true">异步关闭</Button>
            <Modal
                v-model="modal6"
                title="对话框标题"
                :loading="modal6_loading"
                @on-ok="asyncOK">
                <p>点击确定后，对话框将在 2秒 后关闭。</p>
            </Modal>
            <Button @click="modal7 = true">禁用右上角关闭（含Esc键）</Button>
            <Modal
                title="对话框标题"
                v-model="modal7"
                :closable="false">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
            <Button @click="modal8 = true">禁用遮罩层关闭</Button>
            <Modal
                title="对话框标题"
                v-model="modal8"
                :mask-closable="false">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
            <Button @click="customModal">自定义按钮文字</Button>
        </div>
        <div class="section-title">
            <p>Tooltip 文字提示</p>
        </div>
        <div class="section-data">                
            <Tooltip content="Top Left 文字提示" placement="top-start">
                <Button>上左</Button>
            </Tooltip>
            <Tooltip content="Top Center 文字提示" placement="top">
                <Button>上边</Button>
            </Tooltip>
            <Tooltip content="Top Right 文字提示" placement="top-end">
                <Button>上右</Button>
            </Tooltip>
            <Tooltip content="Left Top 文字提示" placement="left-start">
                <Button>左上</Button>
            </Tooltip>
            <Tooltip content="Left Center 文字提示" placement="left">
                <Button>左边</Button>
            </Tooltip>
            <Tooltip content="Left Bottom 文字提示" placement="left-end">
                <Button>左下</Button>
            </Tooltip>
            <Tooltip content="Right Top 文字提示" placement="right-start">
                <Button>右上</Button>
            </Tooltip>
            <Tooltip content="Right Center 文字提示" placement="right">
                <Button>右边</Button>
            </Tooltip>
            <Tooltip content="Right Bottom 文字提示" placement="right-end">
                <Button>右下</Button>
            </Tooltip>
            <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
                <Button>下左</Button>
            </Tooltip>
            <Tooltip content="Bottom Center 文字提示" placement="bottom">
                <Button>下边</Button>
            </Tooltip>
            <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
                <Button>下右</Button>
            </Tooltip>
            <Tooltip placement="top">
                <Button>多行</Button>
                <div slot="content">
                    <p>显示多行信息</p>
                    <p><i>可以自定义样式</i></p>
                </div>
            </Tooltip>
            <Tooltip placement="top" content="可以禁用文字提示" :disabled="tipDisabled">
                <Button @click="tipDisabled = true">点击关闭提示</Button>
            </Tooltip>
            <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
                <Button>延时1秒显示</Button>
            </Tooltip>
        </div>
        <div class="section-title">
            <p>Poptip 气泡提示</p>
        </div>
        <div class="section-data">
            <Poptip trigger="hover" title="提示标题" content="提示内容">
                <Button>hover 激活</Button>
            </Poptip>
            <Poptip title="提示标题" content="提示内容">
                <Button>click 激活</Button>
            </Poptip>
            <Poptip trigger="focus" title="提示标题" content="提示内容">
                <Button>focus 激活</Button>
            </Poptip>
            <Poptip trigger="focus" title="提示标题" content="提示内容">
                <i-input placeholder="输入框的 focus"></i-input>
            </Poptip>
            <Poptip placement="right" width="400">
                <Button type="ghost">嵌套复杂内容（click 激活）</Button>
                <div class="api" slot="content">
                    <table>
                        <thead>
                            <tr>
                                <th>版本号</th>
                                <th>更新时间</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0.9.5</td>
                                <td>2016-10-26</td>
                                <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                            </tr>
                            <tr>
                                <td>0.9.4</td>
                                <td>2016-10-25</td>
                                <td>新增对话框组件 <code>Modal</code></td>
                            </tr>
                            <tr>
                                <td>0.9.2</td>
                                <td>2016-09-28</td>
                                <td>新增选择器组件 <code>Select</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Poptip>
            <Poptip
                confirm
                placement="top"
                title="您确认删除这条内容吗？"
                @on-ok="okPoptip"
                @on-cancel="cancelPoptip">
                <Button>删除</Button>
            </Poptip>
            <br/><br/>
            <Poptip v-model="poptipVisible">
                <a>从浮层内关闭（click 激活）</a>
                <div slot="title"><i>自定义标题</i></div>
                <div slot="content">
                    <a @click="closePopTip">关闭提示框</a>
                </div>
            </Poptip>
            <br/><br/>            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modal1: false,
            modal2: false,
            modal_loading: false,
            modal3: false,
            modal4: false,
            modal5: false,
            modal6: false,
            modal6_loading: true,
            modal7: false,
            modal8: false,
            tipDisabled: false,
            poptipVisible: false
        };
    },
    methods: {
        success () {
            this.$Message.success('这是一条成功的提示');
        },
        warning () {
            this.$Message.warning('这是一条警告的提示');
        },
        error () {
            this.$Message.error('对方不想说话，并且向你抛出了一个异常');
        },
        loading () {
            const msg = this.$Message.loading('正在加载中...', 0);
            setTimeout(msg, 3000);
        },
        time () {
            this.$Message.info('我将在10秒后消失', 10);
        },
        infoNotice (nodesc) {
            this.$Notice.info({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        successNotice (nodesc) {
            this.$Notice.success({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        warningNotice (nodesc) {
            this.$Notice.warning({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        errorNotice (nodesc) {
            this.$Notice.error({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        timeNotice () {
            this.$Notice.open({
                title: '这是通知标题',
                desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。自定义时长，为 0 则不自动关闭。',
                duration: 0
            });
        },
        ok1 () {
            this.$Message.info('点击了确定');
        },
        cancel1 () {
            this.$Message.info('点击了取消');
        },
        del () {
            this.modal_loading = true;
            setTimeout(() => {
                this.modal_loading = false;
                this.modal2 = false;
                this.$Message.success('删除成功');
            }, 2000);
        },
        asyncOK () {
            setTimeout(() => {
                this.modal6 = false;
            }, 2000);
        },
        customModal () {
            this.$Modal.confirm({
                title: '确认对话框标题',
                content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                okText: 'OK',
                cancelText: 'Cancel'
            });
        },
        closePopTip () {
            this.poptipVisible = false;
        },
        okPoptip () {
            this.$Message.info('点击了确定');
        },
        cancelPoptip () {
            this.$Message.info('点击了取消');
        }
    },
    mounted () {

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
.api table
    border-collapse collapse
    border 1px solid #e9e9e9
    width 100%
    margin-bottom 10px
    
    td, th
        border 1px solid #e9e9e9
        padding 8px 16px
        
</style>
