<template>
    <div class="container">
        <h2 class="title">请填写注册信息</h2>
        <div class="content">
            <mt-field label="用户名" type="text" placeholder="请输入6-12位字母数字" v-model="form.uname"></mt-field>
            <mt-field label="密码" type="text" placeholder="请输入6-12位字母数字" v-model="form.upwd"></mt-field>
            <mt-field label="昵称" type="text" placeholder="请输入昵称" v-model="form.title"></mt-field>
        </div>
        <div class="read">
            <label>
                <input type="checkbox">
                已阅读并同意遵守协议<a href="javascript:">内容</a>
            </label>
        </div>
        <mt-button @click="register">注册</mt-button>
    </div>
</template>

<script>
export default {
    data(){return{
        form:{
            uname:'',
            upwd:'',
            title:''
        }
    }},
    methods: {
        register(){
            var form=this.form;
            console.log(form)
            for(var item in form){
                if(form[item]==""){
                    this.$messagebox("提示","请填写完整")
                    return
                }
                if(form[item].search(/[\s\u4E00-\u9FA5]/)!=-1){
                    this.$messagebox("提示","不能包含汉字和非法字符")
                    return
                }
                if(item!="title"){
                    if(form[item].length<6||form[item].length>12){
                        this.$messagebox("提示","输入位数不足6位或超过12位")
                        return
                    }
                }
                
            }
            var url="register";
            this.axios.get(url,{params:this.form}).then(res=>{
                console.log(res)
                if(res.data.msg=="注册成功,可进行登录"){
                    this.$messagebox("提示","注册成功,可进行登录").then(()=>{
                        this.$router.push("/login")
                    }).catch(err=>{console.log(err)})
                }else{
                    this.$toast(res.data.msg)
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    },
}
</script>

<style scoped>
    .container{
        margin-top: 100px;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .title{
        margin-bottom: 20px;
    }
    .read{
        margin: 15px 0;
    }
    .read a{
        text-decoration: none;
    }
</style>
