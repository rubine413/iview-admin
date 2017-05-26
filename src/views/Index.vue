<style lang="stylus" scoped>
.layout
    // border 1px solid #d7dde4
    background #f5f7f9
    position relative
    overflow hidden
    
.layout-wrapper
    height 100%

.layout-breadcrumb
    margin 0 0 10px 0

.layout-content
    padding 10px
    margin-top 2px
    overflow-y scroll
    transition all .2s ease
    

.layout-content-main
    padding 20px
    background #fff
    border-radius 4px

.layout-copy
    text-align center
    padding 10px 0 20px
    color #9ea7b4

.layout-menu
    background #464c5b
    // width 230px
    transition width .2s ease    

    &.layout-menu-collapsed
        width 60px        
    
.layout-main
    flex 1

.layout-header
    display flex
    align-items center
    height 60px
    background #fff
    box-shadow 0 1px 10px rgba(0,0,0,0.2)

.layout-logo
    height 60px
    text-align center
    color #fff
    line-height 60px
    background #5b6270
    font-size 24px

</style>
<template>
    <div class="page page-layout layout">
        <Row type="flex" class="layout-wrapper">
            <Col class="layout-menu" :class="{'layout-menu-collapsed' : menuCollapsed}" :md="4" :lg="3" :sm="0" :xs="0">
                <div class="layout-logo" :style="{ 'visibility': menuCollapsed ? 'hidden' : 'visible'}">iview-admin</div>                
                <admin-menu :collapsed="menuCollapsed"></admin-menu>
            </Col>
            <Col class="layout-main" :lg="21" :md="20" :sm="24" :xs="24">
                <div class="layout-header">
                    <i-button type="text" @click="menuToggle">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>                
                <div class="layout-content" id="content">
                    <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item>首页</Breadcrumb-item>
                            <Breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</Breadcrumb-item>
                        </Breadcrumb>
                    </div>
                    <div class="layout-content-main">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import AdminMenu from './common/menu';
import { on } from '../assets/js/dom';

export default {
    data() {
        return {
            menuCollapsed: false,
            spanLeft: 5,
            spanRight: 19
        };
    },
    components: { AdminMenu },
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        menuToggle() {            
            this.menuCollapsed = !this.menuCollapsed;
        }
    },
    mounted() {
        console.log(this.$router.options.routes, this.$route);
        var eve = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var freshHeight = () => {
            let bodyRect = document.body.getBoundingClientRect();
            document.querySelector('#content').style.height = (bodyRect.height - 62) + 'px';
        };
        freshHeight();
        on(window, eve, freshHeight);        
    }
};
</script>

