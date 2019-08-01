<template>
    <div class="box">
        <div class="ahead">
            <h3>通讯录</h3>
            <div class="back" @click="back"></div>
        </div>
        <div class="abody"> 
            <div class="asearch"><input type="text" id="keyword" v-model="key" placeholder="请输入昵称"></div>
            <div class="firends" v-for="(item,i) of user" :key="i">
                <div class="arow" @click="show(item.uid)">
                    <div class="photo">
                        <img :src="item.title_photo">
                    </div>
                    <div class="acontent">
                        <div>{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){return{
        key:'',
        user:[]
    }},
    methods:{
        back(){
            console.log(111)
            this.$router.push({
                path:'/',
                query:{
                    active:"微信"
                }
            })
        },
        show(uid){
            this.$router.push({
                path:'/showfriend',
                query:{
                  uid  
                }
            })
        }
    },
    watch:{
        key(){
            var url="keyselect";
            this.axios.get(url,{params:{key:this.key}}).then(res=>{
                console.log(res)
                if(res.data.msg=="请登录"){
                    this.$router.push("/login")
                }else{
                    this.user=res.data.userlist
                }
            }).catch(err=>{console.log(err)})
        }
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
    }
    .ahead{
        text-align: center;
        width:100%;
        height:55px;
        line-height:20px;
        position:fixed;
        top:0;
        z-index:10;
        padding-bottom: 5px;
        background-color:#f1f1f1;
    }
    .ahead h3{
        margin: 25px 0 15px 0;
    }
    .back{
        height: 10px;
        width: 10px;
        transform-origin: -22px -30px;
        transform: rotate(-45deg); 
        border-top:1px solid black;
        border-left:1px solid black;
    }
    .abody{
        height: 100%;
        box-sizing: border-box;
        padding:60px 0 55px 0;  
        background-color: #f1f1f1;
    }
    .asearch input{
        width:100%;
        box-sizing: border-box;
        text-align:left;
        padding-left:20px; 
        border: 0;
        height:30px;
        margin-bottom: 5px;
    }
    .arow{
        width: 100%;
        display:flex;
        flex-wrap:nowrap;
        box-sizing: border-box;
        padding: 0.2em 0.3em;
    }
    .tab{
        font-size: 0.8em;
        color:#888;
        height: 2em;
        line-height: 2em;
        text-align: left;
        padding: 0 0.8em;
        margin-bottom: 0.2em;
        background-color: #f1f1f1;
    }
    .photo{
        width: 15%;
        text-align: center;
    }
    .photo img{
        width:2.5em;
        height:2.5em;
        border:1px solid #f1f1f1;
        border-radius:5px;
    }
    .acontent{
        width:85%;
        height:45px;
        font-weight: 600;
        margin: 0 0.8em; 
        border-bottom:1px solid #f1f1f1;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .firends:nth-child(4) .arow .acontent{
        border-bottom: 0;
    }
</style>
