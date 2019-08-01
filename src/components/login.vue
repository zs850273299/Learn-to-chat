<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
        <mt-button @click="login">登录</mt-button>
        <mt-button @click="load">加载</mt-button>
        <mt-button @click="register">注册</mt-button>
    </div>
</template>

<script>
export default {
    data(){return{
        uname:'',
        upwd:''
    }},
    methods:{
        login(){
            if(this.uname==''){
                this.$messagebox("请输入用户名")
                return
            }else if(this.upwd==''){
                this.$messagebox("请输入密码")
                return
            }
            var url="login";
            var obj={uname:this.uname,upwd:this.upwd}
            this.axios.get(url,{params:obj}).then(result=>{
                if(result.data.code==1){
                    this.$toast(result.data.msg)
                    this.$router.push("/")
                }else{
                    this.$messagebox(result.data.msg)
                }
            }).catch(err=>{console.log(err)})
        },
        load(){
            var url="index";
            this.axios.get(url).then(result=>{
                console.log(result)
            }).catch(err=>{console.log(err)})
        },
        register(){
            this.$router.push("/login/register")
        }
    }
}
</script>
