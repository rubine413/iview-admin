<template>
    <div class="section-table">
        <p class="section-desc"><Icon type="help-circled"></Icon>&nbsp;关于iView<code>Table</code>组件的详细API和用法请<a href="https://www.iviewui.com/components/table" target="_blank">点击这里</a></p>
        <div class="section-title">
            <p>带分页的表格</p>
        </div>
        <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
        <div class="section-title">
            <p>可固定列、自定义列及可排序表格</p>
        </div>        
        <div>
            <Form :label-width="80">
                <Form-item label="显示列">
                    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
                        <Checkbox label="show">展示</Checkbox>
                        <Checkbox label="weak">唤醒</Checkbox>
                        <Checkbox label="signin">登录</Checkbox>
                        <Checkbox label="click">点击</Checkbox>
                        <Checkbox label="active">激活</Checkbox>
                        <Checkbox label="day7">7日留存</Checkbox>
                        <Checkbox label="day30">30日留存</Checkbox>
                        <Checkbox label="tomorrow">次日留存</Checkbox>
                        <Checkbox label="day">日活跃</Checkbox>
                        <Checkbox label="week">周活跃</Checkbox>
                        <Checkbox label="month">月活跃</Checkbox>
                    </Checkbox-group>             
                </Form-item>
            </Form>
        </div>
        <Table :data="tableData2" :columns="tableColumns2" border></Table>
        <div class="section-title">
            <p>多种效果组合的表格</p>
        </div>
        <Form :label-width="80">
            <Row>
                <Col span="18">
                    <Row>
                        <Col span="4">
                            <Form-item label="显示边框">
                                <i-switch v-model="showBorder"></i-switch>              
                            </Form-item>
                        </Col>
                        <Col span="4">
                            <Form-item label="显示斑马纹">
                                <i-switch v-model="showStripe"></i-switch>              
                            </Form-item>
                        </Col>
                        <Col span="4">
                            <Form-item label="显示索引">
                                <i-switch v-model="showIndex"></i-switch>              
                            </Form-item>
                        </Col>
                        <Col span="4">
                            <Form-item label="显示多选框">
                                <i-switch v-model="showCheckbox"></i-switch>              
                            </Form-item>
                        </Col>
                        <Col span="4">
                            <Form-item label="显示表头">
                                <i-switch v-model="showHeader"></i-switch>              
                            </Form-item>
                        </Col>
                        <Col span="4">
                            <Form-item label="表格滚动">
                                <i-switch v-model="fixedHeader"></i-switch>              
                            </Form-item>
                        </Col>
                    </Row>
                </Col>
                <Col span="24">
                    <Form-item label="表格尺寸">
                        <Radio-group v-model="tableSize" type="button">
                            <Radio label="large">大</Radio>
                            <Radio label="default">中</Radio>
                            <Radio label="small">小</Radio>
                        </Radio-group> 
                    </Form-item>
                </Col>
            </Row>
        </Form>        
        <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 200 : ''" :size="tableSize"
            :data="tableData3" :columns="tableColumns3"></Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData1: this.mockTableData1(),
            tableColumns1: [{
                title: '名称',
                key: 'name'
            }, {
                title: '状态',
                key: 'status',
                render: (h, params) => {
                    let row = params.row;
                    // eslint-disable-next-line
                    let color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                    // eslint-disable-next-line
                    let text = row.status === 1 ? '构建中' : row.status === 2 ? '构建完成' : '构建失败';

                    return h('Tag', {
                        props: {
                            type: 'dot',
                            color: color
                        }
                    }, text);
                }
            }, {
                title: '画像内容',
                key: 'portrayal',
                render: (h, params) => {
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: params.row.portrayal.length + '个画像',
                            placement: 'bottom'
                        }
                    }, [
                        h('Tag', params.row.portrayal.length),
                        h('div', {
                            slot: 'content'
                        }, [
                            h('ul', this.tableData1[params.index].portrayal.map(item => {
                                return h('li', {
                                    style: {
                                        textAlign: 'center',
                                        padding: '4px'
                                    }
                                }, item);
                            }))
                        ])
                    ]);
                }
            }, {
                title: '选定人群数',
                key: 'people',
                render: (h, params) => {
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: params.row.people.length + '个客群',
                            placement: 'bottom'
                        }
                    }, [
                        h('Tag', params.row.people.length),
                        h('div', {
                            slot: 'content'
                        }, [
                            h('ul', this.tableData1[params.index].people.map(item => {
                                return h('li', {
                                    style: {
                                        textAlign: 'center',
                                        padding: '4px'
                                    }
                                }, item.n + '：' + item.c + '人');
                            }))
                        ])
                    ]);
                }
            }, {
                title: '取样时段',
                key: 'time',
                render: (h, params) => {
                    return h('div', '近' + params.row.time + '天');
                }
            }, {
                title: '更新时间',
                key: 'update',
                render: (h, params) => {
                    return h('div', this.formatDate(this.tableData1[params.index].update));
                }
            }],
            tableData2: this.mockTableData2(),
            tableColumns2: [],
            tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month'],
            tableData3: [{
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居',
                date: '2016-10-03'
            }, {
                name: '张小刚',
                age: 24,
                address: '北京市海淀区西二旗',
                date: '2016-10-01'
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道',
                date: '2016-10-02'
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道',
                date: '2016-10-04'
            }, {
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居',
                date: '2016-10-03'
            }, {
                name: '张小刚',
                age: 24,
                address: '北京市海淀区西二旗',
                date: '2016-10-01'
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道',
                date: '2016-10-02'
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道',
                date: '2016-10-04'
            }],
            showBorder: false,
            showStripe: false,
            showHeader: true,
            showIndex: true,
            showCheckbox: false,
            fixedHeader: false,
            tableSize: 'small'
        };
    },
    computed: {
        tableColumns3() {
            let columns = [];
            if (this.showCheckbox) {
                columns.push({
                    type: 'selection',
                    width: 60,
                    align: 'center'
                });
            }
            if (this.showIndex) {
                columns.push({
                    type: 'index',
                    width: 60,
                    align: 'center'
                });
            }
            columns.push({
                title: '日期',
                key: 'date',
                sortable: true
            });
            columns.push({
                title: '姓名',
                key: 'name'
            });
            columns.push({
                title: '年龄',
                key: 'age',
                sortable: true,
                filters: [{
                    label: '大于25岁',
                    value: 1
                }, {
                    label: '小于25岁',
                    value: 2
                }],
                filterMultiple: false,
                filterMethod(value, row) {
                    if (value === 1) {
                        return row.age > 25;
                    } else if (value === 2) {
                        return row.age < 25;
                    }
                    return false;
                }
            });
            columns.push({
                title: '地址',
                key: 'address',
                filters: [{
                    label: '北京',
                    value: '北京'
                }, {
                    label: '上海',
                    value: '上海'
                }, {
                    label: '深圳',
                    value: '深圳'
                }],
                filterMethod(value, row) {
                    return row.address.indexOf(value) > -1;
                }
            });
            return columns;
        }
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: '商圈' + Math.floor(Math.random() * 100 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                    people: [
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        }
                    ],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                });
            }
            return data;
        },
        formatDate (date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        changePage () {
            // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
            this.tableData1 = this.mockTableData1();
        },
        mockTableData2 () {
            let data = [];
            function getNum() {
                return Math.floor(Math.random() * 10000 + 1);
            }
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: '推广名称' + (i + 1),
                    fav: 0,
                    show: getNum(),
                    weak: getNum(),
                    signin: getNum(),
                    click: getNum(),
                    active: getNum(),
                    day7: getNum(),
                    day30: getNum(),
                    tomorrow: getNum(),
                    day: getNum(),
                    week: getNum(),
                    month: getNum()
                });
            }
            return data;
        },
        getTable2Columns () {
            const table2ColumnList = {
                name: {
                    title: '名称',
                    key: 'name',
                    fixed: 'left',
                    width: 200,
                    render: (h, params) => {
                        const fav = this.tableData2[params.index].fav;
                        const style = fav === 0 ? {
                            cursor: 'pointer'
                        } : {
                            cursor: 'pointer',
                            color: '#f50'
                        };

                        return h('div', [
                            h('Icon', {
                                style: style,
                                props: {
                                    type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                                },
                                nativeOn: {
                                    click: () => {
                                        this.toggleFav(params.index);
                                    }
                                }
                            })
                        ]);
                    }
                },
                show: {
                    title: '展示',
                    key: 'show',
                    width: 150,
                    sortable: true
                },
                weak: {
                    title: '唤醒',
                    key: 'weak',
                    width: 150,
                    sortable: true
                },
                signin: {
                    title: '登录',
                    key: 'signin',
                    width: 150,
                    sortable: true
                },
                click: {
                    title: '点击',
                    key: 'click',
                    width: 150,
                    sortable: true
                },
                active: {
                    title: '激活',
                    key: 'active',
                    width: 150,
                    sortable: true
                },
                day7: {
                    title: '7日留存',
                    key: 'day7',
                    width: 150,
                    sortable: true
                },
                day30: {
                    title: '30日留存',
                    key: 'day30',
                    width: 150,
                    sortable: true
                },
                tomorrow: {
                    title: '次日留存',
                    key: 'tomorrow',
                    width: 150,
                    sortable: true
                },
                day: {
                    title: '日活跃',
                    key: 'day',
                    width: 150,
                    sortable: true
                },
                week: {
                    title: '周活跃',
                    key: 'week',
                    width: 150,
                    sortable: true
                },
                month: {
                    title: '月活跃',
                    key: 'month',
                    width: 150,
                    sortable: true
                }
            };

            let data = [table2ColumnList.name];

            this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

            return data;
        },
        changeTableColumns () {
            this.tableColumns2 = this.getTable2Columns();
        },
        toggleFav (index) {
            this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
        }
    },
    mounted () {
        this.changeTableColumns();
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

</style>
