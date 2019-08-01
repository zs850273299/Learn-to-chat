<template>
    <div class="box">
        <div class="head">
            <div class="back" @click="back"></div>
            <div class="load">...</div>
        </div>
        <div class="body">
            <div class="body-item title">
                <div class="title-item-1">
                    <img :src="user.title_photo" alt="">
                    <div class="title-user">
                        <h3>{{user.title}}</h3>
                        {{user.sex}}<img src="" alt="">
                        <div v-if="isFriend">微信号:{{user.uname}}</div>
                        <div>地区：{{user.location}}</div>
                    </div>
                </div>
                <div v-if="isFriend" class="title-item-2">
                    <span>设置备注和标签</span>
                    <div class="go"></div>
                </div>
                <div v-if="!isFriend" class="title-item-2">
                    <span>添加后查看更多消息</span>
                    <div class="go"></div>
                </div>
            </div>
            <div v-if="isFriend" class="body-item content">
                <div class="content-item-1">
                    <span>朋友圈</span>
                    <div>
                        <img src="" alt="">
                    </div>
                    <div class="go"></div>
                </div>
                <div class="content-item-2">
                    <span>更多信息</span>
                    <div class="go"></div>
                </div>
            </div>
            <div class="body-item function">
                <div v-if="isFriend" class="function-item-1">
                    <span>发消息</span>
                </div>
                <div v-if="!isFriend" class="function-item-2" @click="addfirend">
                    <span>加为好友</span>
                </div>
                <div v-if="isFriend" class="function-item-2">
                    <span>音视频通话</span>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    data(){return{
        myuser:'',
        user:[],
        isFriend:false
    }},
    methods: {
        load(){
            var url="showfirend"
            var uid=this.$route.query.uid;
            this.axios.get(url,{params:{uid}}).then(res=>{
                console.log(res)
                if(res.data.msg=="请登录"){
                    this.$router.push("/")
                    return
                }
                this.user=res.data.user;
                this.myuser=res.data.myuser;
                var arr=this.myuser.friends.split(",")
                for(let item of arr){
                    this.user.uid==item?this.isFriend=true:"";
                }
            }).catch(err=>{console.log(err)})
        },
        back(){
            this.$router.push({
                path:"/",
                query:{
                    active:"通讯录"
                }
            })
        },
        addfirend(){
            var user=this.user;
            var url="addfriend"
            this.axios.get(url,{params:{user}}).then(res=>{
                console.log(res)
                this.$toast(res.data.msg)
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    created() {
        this.load()
    }
}
</script>

<style scoped>
    .box{
        height: 100%;
        width: 100%;
    }
    .head{
        box-sizing:border-box;
        padding:0 0.7em;
        height: 60px;
        background-color: #fff;
        display:flex;
        justify-content:space-between;
        align-items: flex-end;
        box-sizing: border-box;
        padding-bottom: 15px;
    }
    .back{
        height: 10px;
        width: 10px;
        transform-origin: 0px 0px;
        transform: rotate(-45deg); 
        border-top:1px solid black;
        border-left:1px solid black;
    }
    .load{
        font-size: 25px;
    }
    .body{
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
    }
    .body .body-item{
        margin-bottom: 10px;
        background-color: #fff;
    }
    .title-item-1{
        height:100px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border-bottom: 1px solid #f1f1f1;
    }
    .title .title-item-1 img{
        height: 60px;
        width: 60px;
        max-width: 100%;
        max-height: 100%;
        margin: 0 20px;
        border-radius: 10px;
    }
    .title-user{
        flex:1;
        text-align: left;
    }
    .title-item-2{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        font-weight: 600;
    }
    .go{
        height: 10px;
        width: 10px;
        transform-origin: -0px -10px;
        transform: rotate(45deg); 
        border-top:1px solid black;
        border-right:1px solid black;
    }
    .content-item-1{
        height: 80px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f1f1f1;
    }
    .content-item-2{
        height: 50px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .function div{
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        color: #2222aa;
    }
</style>
