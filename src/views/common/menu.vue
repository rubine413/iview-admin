<style lang="stylus" scoped>
@import '../../style/global.styl'
    
.ivu-menu-dark .ivu-menu-item-active, .ivu-menu-dark .ivu-menu-item-active:hover
    color #fff
    
.ivu-menu-dark .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark .ivu-menu-submenu-title-active:not(.ivu-menu-submenu)
    color #fff
    border none
    background #39f !important
    
.ivu-menu, .ivu-menu-item
    overflow hidden
    white-space nowrap
    
.ivu-menu-item > i
    margin-right 8px
.menu-item
    line-height 60px
    text-align center
    color #eee
    cursor pointer
    white-space nowrap
    position relative
    
    &:hover
        background #313540
        color #fff
        
        .submenu
            display block

.submenu
    position absolute
    left 60px
    top 0
    background #464c5b
    z-index 1
    display none
    transition all .2s ease
    box-shadow 0 3px 10px #666
    border-radius 0 3px 3px 0
    
    &:before
        content ''
        position absolute
        width 1px 
        height 100%
        background #eee
        left 0
        top 0
        z-index 1

    .menu-item
        padding 0 30px
        line-height 50px
</style>

<template>
    <div class="menu-wrapper">
        <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" :accordion="true" v-show="!collapsed">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>基础组件
                </template>
                <Menu-item name="1-1" data-link="/basic/form">Form 表单</Menu-item>
                <Menu-item name="1-2">Table 表格</Menu-item>
                <Menu-item name="1-3">Icon 图标</Menu-item>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-list-outline"></Icon>表单
                </template>
                <Menu-item name="2-1">Input 输入框</Menu-item>
                <Menu-item name="2-2">Radio 单选框</Menu-item>
                <Menu-item name="2-3">Checkbox 多选框</Menu-item>
                <Menu-item name="2-4">Switch 开关</Menu-item>
            </Submenu>
            <Menu-item name="3"><Icon type="ios-grid-view"></Icon>表格</Menu-item>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>其他
                </template>
                <Menu-item name="4-1">选项 1</Menu-item>
                <Menu-item name="4-2">选项 2</Menu-item>
            </Submenu>
        </Menu>
        <ul class="menu menu-collapsed" v-show="collapsed">
            <li class="menu-item">
                <div class="menu-title" title="基础组件"><Icon type="ios-navigate" size="24"></Icon></div>
                <ul class="submenu">
                    <li class="menu-item">Grid 栅格</li>
                    <li class="menu-item">Button 按钮</li>
                    <li class="menu-item">Icon 图标</li>
                </ul>
            </li>
            <li class="menu-item">
                <div class="menu-title" title="表单"><Icon type="ios-list-outline" size="24"></Icon></div>
                <ul class="submenu">
                    <li class="menu-item">Input 输入框</li>
                    <li class="menu-item">Radio 单选框</li>
                    <li class="menu-item">Checkbox 多选框</li>
                    <li class="menu-item">Switch 开关</li>
                </ul>
            </li>
            <li class="menu-item">
                <div class="menu-title" title="表格"><Icon type="ios-grid-view" size="24"></Icon></Icon></div>
            </li>
            <li class="menu-item">
                <div class="menu-title" title="其他"><Icon type="ios-analytics" size="24"></Icon></div>
            </li>
        </ul>
    </div>    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'admin-menu',

    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    }
};
</script>

