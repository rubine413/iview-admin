<template>
    <div class="section-table">
        <p class="section-desc"><Icon type="help-circled"></Icon>&nbsp;关于<code>iView</code>组件的详细API和用法请<a href="https://www.iviewui.com/docs/guide/install" target="_blank">点击这里</a></p>
        <div class="section-title">
            <p>Card 卡片</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Card>
                        <p slot="title">标准卡片</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <p slot="title">禁用悬停阴影的卡片</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                    </Card>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24" style="background:#eee;padding:20px">                
                    <Card :bordered="false">
                        <p slot="title">无边框卡片</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                    </Card><br>
                    <Card shadow>
                        <p slot="title">使用阴影效果的卡片</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                        <p>卡片内容</p>
                    </Card>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Card>
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>
                            经典电影（样例）
                        </p>
                        <a href="#" slot="extra" @click.prevent="changeLimit">
                            <Icon type="ios-loop-strong"></Icon>
                            换一换
                        </a>
                        <ul>
                            <li v-for="item in randomMovieList">
                                <a :href="item.url" target="_blank">{{ item.name }}</a>
                                <span class="span-rate">
                                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                                    {{ item.rate }}
                                </span>
                            </li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </div>      
        <div class="section-title">
            <p>Collapse 折叠面板</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Collapse v-model="collapseValue1" accordion>
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Collapse accordion v-model="collapseValue2">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <div slot="content">
                                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                                <Collapse accordion v-model="collapseValue3">
                                    <Panel name="1-1">
                                        iPhone
                                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                                    </Panel>
                                    <Panel name="1-2">
                                        iPad
                                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>
        <div class="section-title">
            <p>Carousel 走马灯</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Form :model="carouselSetting" :label-width="100">
                        <Form-item label="自动切换">
                            <i-switch v-model="carouselSetting.autoplay">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </Form-item>
                        <Form-item label="自动切换速度">
                            <Slider v-model="carouselSetting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
                        </Form-item>
                        <Form-item label="指示器位置">
                            <Radio-group v-model="carouselSetting.dots" type="button">
                                <Radio label="inside">内部</Radio>
                                <Radio label="outside">外部</Radio>
                                <Radio label="none">不显示</Radio>
                            </Radio-group>
                        </Form-item>
                        <Form-item label="切换箭头">
                            <Radio-group v-model="carouselSetting.arrow" type="button">
                                <Radio label="hover">悬停时显示</Radio>
                                <Radio label="always">一直显示</Radio>
                                <Radio label="never">不显示</Radio>
                            </Radio-group>
                        </Form-item>
                        <Form-item label="指示器触发方式">
                            <Radio-group v-model="carouselSetting.trigger" type="button">
                                <Radio label="click">点击</Radio>
                                <Radio label="hover">悬停</Radio>
                            </Radio-group>
                        </Form-item>
                    </Form>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Carousel
                        v-model="carouselValue"
                        :autoplay="carouselSetting.autoplay"
                        :autoplay-speed="carouselSetting.autoplaySpeed"
                        :dots="carouselSetting.dots"
                        :trigger="carouselSetting.trigger"
                        :arrow="carouselSetting.arrow">
                        <Carousel-item>
                            <div class="demo-carousel">1</div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-carousel">2</div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-carousel">3</div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-carousel">4</div>
                        </Carousel-item>
                    </Carousel>
                </Col> 
            </Row>
        </div>
        <div class="section-title">
            <p>Timeline 时间轴</p>
        </div>
        <div class="section-data">
            <Row :gutter="16">            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Timeline>
                        <Timeline-item>
                            <p class="time">1976年</p>
                            <p class="content">Apple I 问世</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">1984年</p>
                            <p class="content">发布 Macintosh</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">2007年</p>
                            <p class="content">发布 iPhone</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">2010年</p>
                            <p class="content">发布 iPad</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">2011年10月5日</p>
                            <p class="content">史蒂夫·乔布斯去世</p>
                        </Timeline-item>
                    </Timeline>
                </Col>            
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Timeline>
                        <Timeline-item color="green">发布1.0版本</Timeline-item>
                        <Timeline-item color="green">发布2.0版本</Timeline-item>
                        <Timeline-item color="red">严重故障</Timeline-item>
                        <Timeline-item color="blue">发布3.0版本</Timeline-item>
                    </Timeline>
                </Col>
                <Col span="8" :lg="8" :md="12" :sm="12" :xs="24">
                    <Timeline pending>
                        <Timeline-item color="green">
                            <Icon type="trophy" slot="dot"></Icon>
                            <span>发布里程碑版本</span>
                        </Timeline-item>
                        <Timeline-item>发布1.0版本</Timeline-item>
                        <Timeline-item>发布2.0版本</Timeline-item>
                        <Timeline-item>发布3.0版本</Timeline-item>
                        <Timeline-item><a href="javascript:;">查看更多</a></Timeline-item>
                    </Timeline>
                </Col> 
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movieList: [{
                name: '肖申克的救赎',
                url: 'https://movie.douban.com/subject/1292052/',
                rate: 9.6
            }, {
                name: '这个杀手不太冷',
                url: 'https://movie.douban.com/subject/1295644/',
                rate: 9.4
            }, {
                name: '霸王别姬',
                url: 'https://movie.douban.com/subject/1291546/',
                rate: 9.5
            }, {
                name: '阿甘正传',
                url: 'https://movie.douban.com/subject/1292720/',
                rate: 9.4
            }, {
                name: '美丽人生',
                url: 'https://movie.douban.com/subject/1292063/',
                rate: 9.5
            }, {
                name: '千与千寻',
                url: 'https://movie.douban.com/subject/1291561/',
                rate: 9.2
            }, {
                name: '辛德勒的名单',
                url: 'https://movie.douban.com/subject/1295124/',
                rate: 9.4
            }, {
                name: '海上钢琴师',
                url: 'https://movie.douban.com/subject/1292001/',
                rate: 9.2
            }, {
                name: '机器人总动员',
                url: 'https://movie.douban.com/subject/2131459/',
                rate: 9.3
            }, {
                name: '盗梦空间',
                url: 'https://movie.douban.com/subject/3541415/',
                rate: 9.2
            }],
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
        changeLimit() {
            function getArrayItems(arr, num) {
                let tempArr = [];
                for (let index in arr) {
                    tempArr.push(arr[index]);
                }
                let result = [];
                for (let i = 0; i < num; i++) {
                    if (tempArr.length > 0) {
                        let arrIndex = Math.floor(Math.random() * tempArr.length);
                        result[i] = tempArr[arrIndex];
                        tempArr.splice(arrIndex, 1);
                    } else {
                        break;
                    }
                }
                return result;
            }
            this.randomMovieList = getArrayItems(this.movieList, 5);
        }
    },
    mounted() {
        this.changeLimit();
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
    
.span-rate
    color #ffac2d
    float right
.section-data
    padding 10px 20px
    
.demo-carousel
    height 200px
    line-height 200px
    background #506b9e
    color #fff
    text-align center
    font-size 20px
</style>
