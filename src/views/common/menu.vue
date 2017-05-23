<style lang="stylus" scoped>
@import '../../style/global.styl'
    

// .menu-item
//     line-height 60px
//     text-align center
//     color #eee
//     cursor pointer
//     white-space nowrap
//     position relative
    
//     &:hover
//         background #313540
//         color #fff
        
//         .submenu
//             display block

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
        
.menu
    display block
    position relative
    margin 0 
    padding 0
    color $menu-color
    cursor pointer
    user-select none
    
    a, a:hover
        display block
        user-select none
        color $menu-color
    
    .ivu-icon
        font-size 16px
        text-align center
        width 16px
        // vertical-align -1px
        
    .ivu-icon + span
        margin-left 8px
.menu-item
    line-height 48px
    padding-left 24px
    overflow hidden
    white-space nowrap
    transition all .2s ease-in-out
    
    &:hover, &:hover a
        color #fff
        
    &.menu-item-active, &.menu-item-active a
        color #fff
        background $primary-bg
.menu-title
    display flex
    align-items center    
    background $menu-bg
    padding-left 24px
    padding-right 12px
    height 48px
    
    span
        flex 1
        overflow hidden
        white-space nowrap
        
.menu-submenu
    
    .menu
        display none
        transition all .2s ease-in-out
        
    .menu-item
        padding-left 0
        text-indent 48px
        
.menu-expand
    transition all .2s ease-in-out
.menu-opened
    background $menu-bg-opened
    
    .menu-title
        color #fff
    .menu
        display block
        
    .menu-expand
        transform rotate(180deg)
        
</style>

<template>
    <aside class="menu-wrapper">        
        <ul class="menu" :class="{ 'menu-collapsed': collapsed }" ref="menu">
            <li class="menu-submenu">
                <div class="menu-title" title="基础组件">
                    <Icon type="ios-navigate"></Icon>
                    <span>基础组件</span>
                    <Icon type="ios-arrow-down menu-expand"></Icon>                    
                </div>
                <ul class="menu">
                    <li class="menu-item"><router-link to="/basic/form">Form 表单</router-link></li>
                    <li class="menu-item"><router-link to="/basic/form">Table 表格</router-link></li>
                    <li class="menu-item"><router-link to="/basic/form">Icon 图标</router-link></li>
                </ul>
            </li>
            <li class="menu-submenu menu-opened">
                <div class="menu-title" title="表单">
                    <Icon type="ios-list-outline"></Icon>
                    <span>基础组件</span>
                    <Icon type="ios-arrow-down menu-expand"></Icon> 
                </div>
                <ul class="menu">
                    <li class="menu-item menu-item-active">Input 输入框</li>
                    <li class="menu-item">Radio 单选框</li>
                </ul>
            </li>
            <li class="menu-item">
                <router-link to="/basic/form">
                    <Icon type="ios-grid-view"></Icon></Icon><span>基础组件</span>
                </router-link>
            </li>
            <li class="menu-item">
                <router-link to="/basic/form">
                    <Icon type="ios-grid-view"></Icon></Icon><span>其他</span>
                </router-link>
            </li>
        </ul>
    </aside>    
</template>

<script>
import { mapActions } from 'vuex';

import { on, addClass, toggleClass, hasClass, removeClass } from '../../assets/js/dom';

export default {
    name: 'admin-menu',

    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },

    mounted() {
        var menu = this.$refs.menu;
        var submenuTitles = menu.querySelectorAll('.menu-title');
        var menuItems = menu.querySelectorAll('.menu-item');
        submenuTitles.forEach(elem => {
            on(elem, 'click', () => {
                toggleClass(elem.parentNode, 'menu-opened');
            });
        });
        menuItems.forEach(elem => {
            on(elem, 'click', () => {
                if (!hasClass(elem, 'menu-item-active')) {
                    menuItems.forEach(elem2 => {
                        removeClass(elem2, 'menu-item-active');
                    });
                    addClass(elem, 'menu-item-active');
                }
            });
        });
    }
};
</script>

