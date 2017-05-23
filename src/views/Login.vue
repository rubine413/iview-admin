<template>
    <div class="page page-login">        
        <div class="panel-login">
            <h4>iView-admin</h4>
            <!-- 登陆表单 -->
            <Form :model="formData">
                <Form-item prop="user">
                    <Input v-model="formData.user" type="text" placeholder="用户名">
                    <Icon type="person" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password" class="item-password">
                    <Input v-model="formData.password" type="password" placeholder="密码">
                    <Icon type="locked" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item class="item-remind">
                    <Checkbox v-model="rememberMe">记住用户名</Checkbox>
                    <Checkbox v-model="autoLogin">自动登陆</Checkbox>
                </Form-item>
                <Form-item>
                    <Button type="primary" long :loading="loading" @click="toLogin">
                        <span v-if="!loading">登陆</span>
                        <span v-else>登陆中...</span>
                    </Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',

    data() {
        return {
            loading: false,
            rememberMe: false,
            autoLogin: false,
            formData: {
                user: '',
                password: ''
            }
        };
    },

    methods: {
        toLogin() {
            var data = this.formData;
            if (data.user === '') {
                this.$Message.warning('请输入用户名');
                return;
            }
            if (data.password === '') {
                this.$Message.warning('请输入密码');
                return;
            }
            this.loading = true;
            // 模拟登陆请求
            setTimeout(() => {
                this.loading = false;
            }, 600);
        }
    }
};
</script>
<style lang="stylus" scoped>
.page-login
    background #152535   
    
.panel-login
    position absolute
    width 18%
    min-width 310px
    height 280px
    background #fff
    left 50% 
    top 50%
    transform translateX(-50%)
    margin-top -(@height/2)px
    border-radius 3px 
    border 1px solid #eee 
    box-shadow 1px 1px 10px #666
    padding 0 30px
    
    h4
        font-size 18px
        margin 20px 0 10px
        text-align center
        
.item-remind
    margin-bottom 12px
</style>

