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
    background $menu-bg
    
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
    overflow hidden
    white-space nowrap
    transition all .2s ease-in-out
    
    a
        display block
        padding-left 24px
    
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
    line-height 48px
    
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
        
        a
            padding-left 48px
        
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


.menu-collapsed  
    
    .menu-title, & > .menu-item, & > .menu-item a
        padding 0
        text-align center
        display block
        line-height 60px
         
        span, .menu-expand
             display none
        
        .ivu-icon
            font-size 24px
            width 24px
            
    .menu-submenu
        position relative
        .menu
            display none
            position absolute
            top 0
            left 100%
            z-index 1
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
            .menu-item a
                padding 0 24px
                min-width 100px
            
        &:hover .menu
            display block           
        
        
        

</style>

<template>
    <aside class="menu-wrapper">        
        <ul class="menu" :class="{ 'menu-collapsed': collapsed }" ref="menu">
            <li class="menu-submenu">
                <div class="menu-title" title="基础组件">
                    <Icon type="calendar"></Icon>
                    <span>基础组件</span>
                    <Icon type="ios-arrow-down menu-expand"></Icon>                    
                </div>
                <ul class="menu">
                    <li class="menu-item">
                        <router-link class="menu-link" to="/basic/form">Form 表单</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-link" to="/basic/table">Table 表格</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-link" to="/basic/form">Icon 图标</router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-submenu">
                <div class="menu-title" title="导航">
                    <Icon type="ios-list-outline"></Icon>
                    <span>导航</span>
                    <Icon type="ios-arrow-down menu-expand"></Icon> 
                </div>
                <ul class="menu">
                    <li class="menu-item">
                        <router-link class="menu-link" to="/basic/form">Input 输入框</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-link" to="/basic/form">Radio 单选框</router-link>
                    </li>
                </ul>
            </li>
            <li class="menu-item">
                <router-link class="menu-link" to="/basic/form">
                    <Icon type="pinpoint"></Icon><span>基础组件</span>
                </router-link>
            </li>
            <li class="menu-item">
                <router-link class="menu-link" to="/basic/form">
                    <Icon type="paper-airplane"></Icon><span>其他</span>
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
        on(menu, 'click', e => {
            let obj = e.target || e.srcElement;
            
            while (obj !== menu) {
                if (hasClass(obj, 'menu-title')) {
                    toggleClass(obj.parentNode, 'menu-opened');
                    break;
                }
                if (hasClass(obj, 'menu-link')) {
                    let activeMenu = menu.querySelectorAll('.menu-item-active');
                    activeMenu.forEach(elem => {
                        removeClass(elem, 'menu-item-active');
                    });
                    addClass(obj.parentNode, 'menu-item-active');
                    break;
                }
                obj = obj.parentNode;
                // statement
            }            
        });
    }
};
</script>

