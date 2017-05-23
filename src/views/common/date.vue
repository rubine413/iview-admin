<style lang="stylus" scoped>
@import '../../style/global.styl'
.ivu-date-picker
    margin-top 4px

.ivu-form-item
    margin-bottom 0
</style>
<template>
    <Form :label-width="80">
        <Form-item label="选择日期">
            <Row :gutter="16">
                <Col span="4">
                    <Date-picker type="date" size="small" placeholder="开始日期" v-model="start" :options="dateOptions.startOption"></Date-picker>
                </Col>
                <Col span="1" class="tc">-</Col>
                <Col span="4">
                    <Date-picker type="date" size="small" placeholder="结束日期" v-model="end" :options="dateOptions.endOption"></Date-picker>
                </Col>
                <Col span="2">
                <Button type="primary" size="small" :loading="loading" @click.native="handleSubmit()">
                    <span v-if="!loading">确定</span>
                    <span v-else>获取中...</span>
                </Button>
                </Col>
            </Row>
        </Form-item>
    </Form>
</template>
<script>
const MILLISECONDS_A_DAY = 86400000;

export default {
    name: 'date-chosen',

    data() {
        return {
            loading: false,
            start: null,
            end: null,
            dateOptions: {
                startOption: {
                    shortcuts: [{
                        text: '今天',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            this.end = new Date();
                        }
                    }, {
                        text: '昨天',
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY);
                            return date;
                        },
                        onClick: (picker) => {
                            this.end = new Date();
                        }
                    }, {
                        text: '最近三天',
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY * 2);
                            return date;
                        },
                        onClick: (picker) => {
                            this.end = new Date();
                        }
                    }, {
                        text: '最近一周',
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY * 6);
                            return date;
                        },
                        onClick: (picker) => {
                            this.end = new Date();
                        }
                    }, {
                        text: '最近一月',
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY * 30);
                            return date;
                        },
                        onClick: (picker) => {
                            this.end = new Date();
                        }
                    }]
                },
                endOption: {
                    shortcuts: [{
                        text: '今天',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            this.start = new Date();
                        }
                    }, {
                        text: '昨天',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY);
                            this.start = date;
                        }
                    }, {
                        text: '最近三天',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY * 2);
                            this.start = date;
                        }
                    }, {
                        text: '最近一周',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY * 6);
                            this.start = date;
                        }
                    }, {
                        text: '最近一月',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            const date = new Date();
                            date.setTime(date.getTime() - MILLISECONDS_A_DAY * 30);
                            this.start = date;
                        }
                    }]
                }
            }
        };
    },

    computed: {},

    watch: {
        start() {
            // 触发dateChanged事件
            this.$emit('dateChanged');
        },
        end() {
            // 触发dateChanged事件
            this.$emit('dateChanged');
        }
    },

    created() {
        // 注册日期改变事件
        this.$on('dateChanged', this.dateChanged);
    },

    mounted() {
        this.$emit('init', this);
    },

    methods: {
        dateChanged() {
            var start = this.start;
            var end = this.end;
            // 触发change事件
            this.$emit('change', this, { start, end });
        },
        init(date) {
            this.start = date.start;
            this.end = date.end;
        },
        dataLoaded() {
            this.loading = false;
        },
        handleSubmit() {
            // this.loading = true;
            // 触发submit事件
            this.$emit('submit', this);
        }
    }
};
</script>
