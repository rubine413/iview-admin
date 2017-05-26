<template>
    <aside class="menu-wrapper">
         
        <ul class="menu" :class="{ 'menu-collapsed': collapsed }" ref="menu">
            <li :class="[item.submenu ? 'menu-submenu': 'menu-item', { 'menu-opened menu-submenu-active' : $route.fullPath.startsWith(item.path) }]" v-for="(item,index) in $router.options.routes" v-if="item.menu">
                <div class="menu-title" :title="item.name" v-if="item.submenu">
                    <Icon :type="item.icon"></Icon>
                    <span>{{ item.name }}</span>
                    <Icon type="ios-arrow-down menu-dropdown"></Icon>                    
                </div>
                <router-link class="menu-link" :to="item.path + item.children[0].path" v-if="!item.submenu">
                    <Icon :type="item.icon"></Icon><span>{{ item.children[0].name }}</span>
                </router-link>
                <ul class="menu" v-if="item.submenu">
                    <li class="menu-item" v-for="subitem in item.children" :rel="item.path + subitem.path" :class="{ 'menu-item-active' : $route.fullPath.endsWith(subitem.path) }">
                        <router-link class="menu-link" :to="item.path + subitem.path">{{ subitem.name }}</router-link>
                    </li>
                </ul>
            </li>           
        </ul>
        <!-- <ul data-v-10a3105a="" class="menu">
            <li data-v-10a3105a="" class="menu-submenu menu-submenu-active">
                <div data-v-10a3105a="" title="基础组件" class="menu-title"><i data-v-10a3105a="" class="ivu-icon ivu-icon-clock"></i> <span data-v-10a3105a="">基础组件</span> <i data-v-10a3105a="" class="ivu-icon ivu-icon-ios-arrow-down menu-dropdown"></i></div>
                <ul data-v-10a3105a="" class="menu">
                    <li data-v-10a3105a="" rel="/basicform" class="menu-item"><a data-v-10a3105a="" href="#/basic/form" class="menu-link">表单</a></li>
                    <li data-v-10a3105a="" rel="/basictable" class="menu-item menu-item-active"><a data-v-10a3105a="" href="#/basic/table" class="menu-link router-link-exact-active router-link-active">表格</a></li>
                    <li data-v-10a3105a="" rel="/basicicon" class="menu-item"><a data-v-10a3105a="" href="#/basic/icon" class="menu-link">图标</a></li>
                </ul>
            </li>
            <li data-v-10a3105a="" class="menu-submenu">
                <div data-v-10a3105a="" title="扩展组件" class="menu-title"><i data-v-10a3105a="" class="ivu-icon ivu-icon-ios-list-outline"></i> <span data-v-10a3105a="">扩展组件</span> <i data-v-10a3105a="" class="ivu-icon ivu-icon-ios-arrow-down menu-dropdown"></i></div>
                <ul data-v-10a3105a="" class="menu">
                    <li data-v-10a3105a="" rel="/extendnotice" class="menu-item"><a data-v-10a3105a="" href="#/extend/notice" class="menu-link">通知提醒</a></li>
                    <li data-v-10a3105a="" rel="/extendpanel" class="menu-item"><a data-v-10a3105a="" href="#/extend/panel" class="menu-link">面板视图</a></li>
                    <li data-v-10a3105a="" rel="/extendnavigation" class="menu-item"><a data-v-10a3105a="" href="#/extend/navigation" class="menu-link">菜单导航</a></li>
                    <li data-v-10a3105a="" rel="/extendprogress" class="menu-item"><a data-v-10a3105a="" href="#/extend/progress" class="menu-link">进度加载</a></li>
                </ul>
            </li>
            <li data-v-10a3105a="" class="menu-item">
                <a data-v-10a3105a="" href="#/chart" class="menu-link"><i data-v-10a3105a="" class="ivu-icon ivu-icon-pie-graph"></i><span data-v-10a3105a="">图表</span></a>                
            </li>
        </ul> -->
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
                    let activeSubMenu = menu.querySelectorAll('.menu-submenu-active');
                    activeSubMenu.forEach(elem => {
                        removeClass(elem, 'menu-submenu-active');
                    });
                    addClass(obj.parentNode, 'menu-item-active');
                    let submenuEx = obj.parentNode.parentNode.parentNode;
                    if (hasClass(submenuEx, 'menu-submenu')) {
                        addClass(submenuEx, 'menu-submenu-active');
                    }
                    break;
                }
                obj = obj.parentNode;
            }            
        });

        on(menu, 'mouseover', e => {
            let obj = e.target || e.srcElement;
            if (hasClass(menu, 'menu-collapsed')) {
                while (obj !== menu) {
                    if (hasClass(obj, 'menu-submenu')) {
                        addClass(obj, 'menu-submenu-hover');
                        break;
                    }                
                    obj = obj.parentNode;
                }  
            }          
        });
        on(menu, 'mouseout', e => {
            let obj = e.target || e.srcElement;
            if (hasClass(menu, 'menu-collapsed')) {
                while (obj !== menu) {
                    if (hasClass(obj, 'menu-submenu')) {
                        removeClass(obj, 'menu-submenu-hover');
                        break;
                    }                
                    obj = obj.parentNode;
                }  
            }          
        });
    }
};
</script>

<style lang="stylus" scoped>
@import '../../style/global.styl'
        
.menu
    display block
    position relative
    margin 0 
    padding 0
    color $menu-font-color
    cursor pointer
    user-select none     
    
    .ivu-icon
        font-size 16px
        text-align center
        width 16px
        margin-right 8px
        
    .menu-submenu &
        display none
        transition all .2s ease-in-out
        
    .menu-opened &
        background $menu-bg-opened
        display block
        
    .menu-collapsed &
        display none
        position absolute
        top 0
        left 100%
        z-index 1
        box-shadow 0 3px 10px #666
        border-radius 0 3px 3px 0
        background $menu-bg
        
        &:before
            content ''
            position absolute
            width 1px 
            height 100%
            background #eee
            left 0
            top 0
            z-index 1
            
    .menu-collapsed .menu-submenu:hover &
        display block
        
        
.menu-item
    line-height 48px
    overflow hidden
    white-space nowrap
    transition all .2s ease-in-out    
    
    &:hover
        color #fff
        
    &.menu-item-active, &.menu-item-active .menu-link, &.menu-item-active .menu-link:hover
        color #fff
        background $primary-color       

    .menu-submenu &
        padding-left 0
        
.menu-link
    position relative 
    color $menu-font-color        
    display block
    user-select none
    padding-left 24px

    &:hover
        color #fff
        background #666
        
    .menu-submenu &
        padding-left 48px
        
    .menu-collapsed .menu-submenu &
        padding 0 24px
        min-width 100px

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
        
        
    .menu-opened &, .menu-submenu-active &
        color #fff
        
    .menu-collapsed .menu-opened &
        color $menu-font-color
        
    .menu-collapsed &:hover, .menu-collapsed .menu-submenu-hover &
        background #666
        
    .menu-collapsed .menu-submenu-active &
        color #fff
        background $primary-color
        

        
.menu-dropdown
    transition all .2s ease-in-out
    
    .menu-opened &
        transform rotate(180deg)
        
    .menu-collapsed &
        display none

.menu-collapsed 
    
    .menu-title, & > .menu-item, & > .menu-item a
        padding 0
        text-align center
        display block
        line-height 60px
        height 60px
                 
        span
             display none       
    
    & > .menu-item, .menu-title 
        .ivu-icon
            font-size 24px
            margin 0
            width 24px
            line-height 60px
              
    .menu-submenu
        position relative

</style>

