<template>
    <div class="container"  >
        <div class="head">
            <button class="btn1" @click="back">
                く<span>28</span>
            </button>
            <h3>{{user[1].uid==myuid?user[0].title:user[1].title}}</h3>  
            <button class="btn2">···</button>  
        </div>
        <div class="body" id="pos">
            <div class="list" v-for="(item,i) of msgs" :key="i">
                <div :class="`item ${item.myuid==myuid?'my':'you'}`">
                    <div>
                        <img :src="user[1].uid==item.myuid?user[1].title_photo:user[0].title_photo" alt="">
                    </div>
                    <div class="msg">
                        {{item.msg}}
                    </div>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="output">
                <span>语音输入</span>
                <input v-model="mymsg" placeholder="请输入消息" type="text" @focus="focus" id="output">
            </div>
            <div class="output2">
                <span class="face">☺</span>
                <span v-if="fly" class="add">⊕</span>
                <span v-else @click="sub" class="sub">发送</span>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    data(){return{
        mymsg:'',
        myuid:'',
        msgs:[],
        user:[[],[]],
        times:'',
        fly:true
    }},
    methods:{
        back(){
            this.$router.push({
                path:"/",
                query:{
                    active:"微信"
                }    
            })
        },
        load(){
            var url="index/msgs";
            var uid=this.$route.query.uid;
            this.axios.get(url,{params:{uid}}).then(result=>{
                if(result.data.msg=="请登录"){
                    this.$router.push("/login")
                }
                if(result.data.msg=="查询成功"){
                    this.user=result.data.user;
                    if(this.msgs.toString()!=result.data.msgs.toString()){
                        this.msgs=result.data.msgs; 
                    }
                    this.myuid=result.data.myuid;
                }
            }).catch(err=>{console.log(err)})
        },
        sub(){
            if(this.mymsg!=""){
                var url="index/msgs/add"
                var uid=this.$route.query.uid;
                var msg=this.mymsg.toString();
                msg=msg.replace(/["]/g,"'")
                console.log(msg)
                this.axios.get(url,{params:{msg,uid}}).then(result=>{
                    console.log(result.data.msg)
                    this.mymsg='';
                    this.focus();
                }).catch(err=>{console.log("发生错误")})
            }
        },
        focus(){
            var output=document.getElementById("output");
            output.focus();
            var pos=document.getElementById("pos");
            document.documentElement.scrollTop=pos.scrollHeight-500;
        }
    },
    watch: {
        msgs(){
            setTimeout(this.focus,50)
            console.log(this.msgs)
        },
        mymsg(){
            if(this.mymsg!=''){
                this.fly=false;
            }else{
                this.fly=true;
            }
        }
    },
    created() {
        this.load();
        setTimeout(this.focus,100);
        this.times=setInterval(this.load,500)
    },
    beforeDestroy(){
        clearInterval(this.times)
    }
}
</script>

<style scoped>
    .container{
        height: 100%;
        width: 100%;
    }
    .head{
        box-sizing:border-box;
        padding:0 0.7em;
        height: 55px;
        width: 100%;
        position:fixed;
        top:0;
        background-color: #eee;
        display:flex;
        justify-content:space-between;
        align-items: flex-end;
        box-sizing: border-box;
        padding-bottom: 10px;
    }
    .head button{
        background:0;
        border:0;
        outline:0;
    }
    .head .btn1{
        font-size:1em;
    }
    .head .button:active{
        opacity:0.5;
    }
    .head .btn1 span{
        background:#bbb;
        color:white;
        border-radius:1em;
        padding:0.2em .5em;
        font-size:0.9em;
    }
    .head .btn2{
        font-size:1.3em;
        font-weight:600;
        margin-right:0.4em;
    }
    .body{
        box-sizing: border-box;
        padding:60px 0.7em 50px  ;
        width: 100%;
        overflow:auto;
    }
    .list{
        width: 100%;
    }
    .list img{
        width:3em;
        height:3em;
        border:1px solid rgb(240,240,240);
        border-radius:5px;
    }
    .item{
        display: flex;
    }
    .msg{
        text-align: start;
        word-wrap: break-word;
        font-size: 1em;
        max-width: 60%;
        min-width: 1em;
        min-height: 2em;
        height: auto;
        background-color: rgb(249,249,249);
        color: black;
        line-height: 2em;
        padding: 0.2em 1em 0;
        margin: 0.5em;
        border-radius: .5em;  
    }
    .list .my{   
        flex-direction: row-reverse;
        justify-content: flex-start;
    }
    .list .you{
        justify-content: flex-start;
    }
    .foot{
        font-size: 1em;
        height: 50px;
        width:100%;
        box-sizing:border-box;
        padding:0 .5em;
        position:fixed;
        bottom:0px;
        background-color: #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .output{
        width: 75%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .output input{
        margin-left: 0.5em;
        height: 35px;
        width: 65%;
        overflow: auto;
        box-sizing: border-box;
        border-radius: 0.3em;
        border:0 solid white;
    }
    .output2{
        width: 25%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .face{
        font-size: 32px;
        margin-bottom: 5px;
    }
    .add{
        font-size: 28px;
        margin-bottom: 8px;
    }
</style>