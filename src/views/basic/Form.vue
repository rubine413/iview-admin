<template>
    <div class="section-form">
        <p class="section-desc"><Icon type="help-circled"></Icon>&nbsp;关于<code>iView</code>组件的详细API和用法请<a href="https://www.iviewui.com/docs/guide/install" target="_blank">点击这里</a></p>
        <Row>
            <Col span="10" :lg="10" :md="24">
                <Form :model="formItem" :label-width="80">
                    <Form-item label="输入框">
                        <Row>
                            <Col span="11">
                                <Input v-model="formItem.input" placeholder="请输入"></Input>
                            </Col>
                            <Col span="2">&nbsp;</Col>
                            <Col span="11">
                                <Input icon="locked" placeholder="带图标输入框"></Input>
                            </Col>
                        </Row>                        
                    </Form-item>
                    <Form-item label="下拉框">                
                        <Select v-model="formItem.select" clearable placeholder="请选择">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </Form-item>
                    <Form-item label="下拉框-多选">
                        <Select v-model="formItem.select2" multiple>
                            <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
                        </Select>
                    </Form-item>
                    <Form-item label="异步搜索">
                        <Row>
                            <Col span="12">
                                <Select
                                    v-model="formItem.select3"
                                    filterable
                                    remote
                                    :remote-method="remoteMethod"
                                    :loading="loading">
                                    <Option v-for="option in options" :value="option.value" :key="new Date()">{{option.label}}</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="级联选择">
                        <Row>
                            <Col span="12">
                                <Cascader :data="cascadeData" v-model="cascadeValue"></Cascader>
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="日期控件">
                        <Row>
                            <Col span="11">
                                <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                            </Col>
                            <Col span="2" style="text-align: center">-</Col>
                            <Col span="11">
                                <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="选择日期">
                        <Row>
                            <Col span="11">
                                 <Date-picker type="date" :options="dataOptions1" placeholder="选择日期"></Date-picker>
                            </Col>
                            <Col span="2">&nbsp;</Col>
                            <Col span="11">
                                <Date-picker type="daterange" :options="dataOptions2" placement="bottom-end" placeholder="日期范围"></Date-picker>
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="穿梭框">
                        <Transfer
                            :data="transferData"
                            :target-keys="targetKeys"
                            :render-format="transferRender"
                            @on-change="transferChange"></Transfer>
                    </Form-item>                  
                    <Form-item label="文本域">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                    </Form-item>
                </Form>
            </Col>
            <Col span="2" :lg="2" :md="0">&nbsp;</Col>
            <Col span="10" :lg="10" :md="24">
                <Form :model="formItem" :label-width="80">      
                    <Form-item label="数字输入框">
                        <Input-number :max="10" :min="1" v-model="inputNumber"></Input-number>
                    </Form-item>
                    <Form-item label="单选框">
                        <Radio-group v-model="formItem.radio">
                            <Radio label="male">男</Radio>
                            <Radio label="female">女</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="单选框组">                
                        <Radio-group v-model="formItem.radioButton" type="button">
                            <Radio label="北京"></Radio>
                            <Radio label="上海"></Radio>
                            <Radio label="深圳"></Radio>
                            <Radio label="杭州"></Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="多选框">
                        <Checkbox-group v-model="formItem.checkbox" @on-change="chekboxChange">
                            <Checkbox label="吃饭"></Checkbox>
                            <Checkbox label="睡觉"></Checkbox>
                            <Checkbox label="跑步" disabled></Checkbox>
                            <Checkbox label="看电影"></Checkbox>
                        </Checkbox-group>
                    </Form-item>
                    <Form-item>
                        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                            <Checkbox
                                :indeterminate="indeterminate"
                                :value="checkAll"
                                @click.prevent.native="handleCheckAll">全选</Checkbox>
                        </div>
                        <Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
                            <Checkbox label="香蕉"></Checkbox>
                            <Checkbox label="苹果"></Checkbox>
                            <Checkbox label="西瓜"></Checkbox>
                        </Checkbox-group>
                    </Form-item>
                    <Form-item label="开关">
                        <i-switch v-model="formItem.switch" size="large" @on-change="switchChange"></i-switch>
                        <i-switch v-model="formItem.switch2" size="large" @on-change="switchChange">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </Form-item>
                    <Form-item label="滑块">
                        <Slider v-model="formItem.slider1" @on-change="slideChange"></Slider>
                        <Slider v-model="formItem.slider2" range></Slider>
                        <Slider v-model="formItem.slider3" range disabled></Slider>
                    </Form-item>
                    <Form-item label="评分">
                        <Row>
                            <Col span="12">
                                <Rate v-model="rateValueText"></Rate>
                            </Col>
                            <Col span="12">
                                <Rate show-text v-model="rateValueCustom" disabled>
                                    <span style="color: #f5a623">{{ rateCustomText }}</span>
                                </Rate>
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="文件上传">
                        <Upload
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>点击或将文件拖拽到这里上传</p>
                            </div>
                        </Upload>
                    </Form-item>                    
                   <!--  <Form-item>
                       <Button type="primary">提交</Button>
                       <Button type="ghost" style="margin-left: 8px">取消</Button>
                   </Form-item> -->
                </Form>
            </Col>
        </Row>
    </div>
</template>


<script>
export default {
    data() {
        return {
            formItem: {
                input: '',
                select: '',
                select2: ['深圳市'],
                radio: 'male',
                radioButton: '上海',
                checkbox: ['睡觉'],
                switch: true,
                switch2: false,
                date: '',
                time: '',
                slider1: 25,
                slider2: [20, 50],
                slider3: [20, 50],
                textarea: ''
            },
            inputNumber: 4,
            cityList: [{
                value: 'beijing',
                label: '北京市'
            }, {
                value: 'shanghai',
                label: '上海市'
            }, {
                value: 'shenzhen',
                label: '深圳市'
            }, {
                value: 'hangzhou',
                label: '杭州市'
            }, {
                value: 'nanjing',
                label: '南京市'
            }, {
                value: 'chongqing',
                label: '重庆市'
            }],
            loading: false,
            options: [],
            cascadeValue: [],
            cascadeData: [{
                value: 'beijing',
                label: '北京',
                children: [{
                    value: 'gugong',
                    label: '故宫'
                }, {
                    value: 'tiantan',
                    label: '天坛'
                }, {
                    value: 'wangfujing',
                    label: '王府井'
                }]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [{
                    value: 'nanjing',
                    label: '南京',
                    children: [{
                        value: 'fuzimiao',
                        label: '夫子庙'
                    }]
                }, {
                    value: 'suzhou',
                    label: '苏州',
                    children: [{
                        value: 'zhuozhengyuan',
                        label: '拙政园'
                    }, {
                        value: 'shizilin',
                        label: '狮子林'
                    }]
                }]
            }],
            dataOptions1: {
                shortcuts: [{
                    text: '今天',
                    value() {
                        return new Date();
                    },
                    onClick: (picker) => {
                        this.$Message.info('点击了今天');
                    }
                }, {
                    text: '昨天',
                    value() {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        return date;
                    },
                    onClick: (picker) => {
                        this.$Message.info('点击了昨天');
                    }
                }, {
                    text: '一周前',
                    value() {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        return date;
                    },
                    onClick: (picker) => {
                        this.$Message.info('点击了一周前');
                    }
                }]
            },
            dataOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    value() {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                }, {
                    text: '最近一个月',
                    value() {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                }, {
                    text: '最近三个月',
                    value() {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }]
            },
            transferData: this.getMockData(),
            targetKeys: this.getTargetKeys(),
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜'],
            rateValueText: 3,
            rateValueCustom: 1.6,
            rateCustomText: '不满意'
        };
    },
    methods: {
        switchChange(status) {
            this.$Message.info('开关状态：' + status);
        },
        slideChange(value) {
            this.$Message.info('滑块值：' + value);
        },
        remoteMethod(query) {
            if (query !== '') {
                this.loading = true;
                // 模拟异步请求
                setTimeout(() => {
                    this.loading = false;
                    const list = this.cityList.map(item => {
                        return {
                            value: item.value,
                            label: item.label
                        };
                    });
                    this.options = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) >
                        -1);
                }, 200);
            } else {
                this.options = [];
            }
        },
        getMockData () {
            let mockData = [];
            for (let i = 1; i <= 20; i++) {
                mockData.push({
                    key: i.toString(),
                    label: '内容' + i,
                    description: '内容' + i + '的描述信息',
                    disabled: Math.random() * 3 < 1
                });
            }
            return mockData;
        },
        chekboxChange(values) {
            this.$Message.info('选中值：' + values.join(','));
        },
        getTargetKeys () {
            return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
        },
        transferRender (item) {
            return item.label;
        },
        transferChange (newTargetKeys, direction, moveKeys) {
            this.targetKeys = newTargetKeys;
        },
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange (data) {
            if (data.length === 3) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.section-desc
    font-size 12px
    margin-bottom 10px
    text-align right
</style>
