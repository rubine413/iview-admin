<style lang="stylus">
@import '../../style/global.styl'

.ivu-menu-bdsc.ivu-menu-vertical
    
    & > .ivu-menu-item
        color #fff
        background $color-menu-bg

        &:hover, &.ivu-menu-item-active
            background $color-menu-bg-active
    
    .ivu-menu-submenu
        background $color-menu-bg-sub !important
      
        .ivu-menu-submenu-title
            background $color-menu-bg !important
            color #fff !important
        
        .ivu-menu-item
            color #fff !important 
            padding 12px 0 !important
            text-align center
            font-size 12px

            &:hover
                background $color-menu-bg-active !important
    
        .ivu-menu-item-active, .ivu-menu-item-active:hover
            background $color-menu-bg-active !important
        
    .menu-opponent 
        overflow hidden
      
        .ivu-menu-item
            float left
            width 50%
</style>

<template>
    <Menu active-name="gongsiyuqing" theme="bdsc" width="auto" :open-names="['1','4','6']" @on-select="setTopic">
        <div class="layout-logo-left"></div>
        <Submenu name="1">
            <template slot="title">公司舆情</template>
            <Menu-item name="gongsiyuqing">全部</Menu-item>
            <Menu-item name="yanjiutuandui">研究团队</Menu-item>
            <Menu-item name="zigongsi">分、子公司</Menu-item>
        </Submenu>
        <Menu-item name="zhongdianmeiti">重点媒体</Menu-item>
        <Menu-item name="jianguanfabu">监管发布</Menu-item>
        <Submenu name="4">
            <template slot="title">股东舆情</template>
            <Menu-item name="ailuming">艾路明</Menu-item>
            <Menu-item name="guoyouzichan">武汉国有资产经营公司</Menu-item>
            <Menu-item name="renfuyaojituan">人福医药集团股份公司</Menu-item>
            <Menu-item name="shenglianhe">湖北省联合发展投资集团有限公司</Menu-item>
            <Menu-item name="zhonghangxintuo">中航信托股份有限公司</Menu-item>
            <Menu-item name="gaoke">武汉高科国有控股集团有限公司</Menu-item>
            <Menu-item name="dangdaikeji">武汉当代科技产业集团股份有限公司</Menu-item>
            <Menu-item name="dangdaimingcheng">武汉当代明诚文化股份有限公司</Menu-item>
            <Menu-item name="santesuodao">武汉三特索道集团股份有限公司</Menu-item>
        </Submenu>
        <Menu-item name="hangyezixun">行业资讯</Menu-item>
        <Submenu name="6" class="menu-opponent">
            <template slot="title">竞争对手</template>
            <Menu-item name="jingzhenghuatai">[竞争]华泰证券</Menu-item>
            <Menu-item name="jingzhengguangfa">[竞争]广发证券</Menu-item>
            <Menu-item name="xingye">[竞争]兴业证券</Menu-item>
            <Menu-item name="zheshang">[竞争]浙商证券</Menu-item>
            <Menu-item name="zhongyuan">[竞争]中原证券</Menu-item>
            <Menu-item name="huaan">[竞争]华安证券</Menu-item>
            <Menu-item name="guojin">[竞争]国金证券</Menu-item>
            <Menu-item name="changjiang">[竞争]长江证券</Menu-item>
        </Submenu>
    </Menu>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'bdsc-menu',

    methods: {
        ...mapActions({
            setTopic: 'saveTopic'
        })
    }
};
</script>

