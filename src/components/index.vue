<template>
    <div class="box">
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="微信">
                <weixin :user="user" :list="list"></weixin>
            </mt-tab-container-item>
            <mt-tab-container-item id="通讯录">
                <tongxunlu :user="user" :list="list"></tongxunlu>
            </mt-tab-container-item>
            <mt-tab-container-item id="发现">
                <faxian></faxian>
            </mt-tab-container-item>
            <mt-tab-container-item id="我">
                <wo :myuser="myuser"></wo>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="微信">
                <img slot="icon" :src="active!='微信'?require('../assets/wechat/weixin.png'):require('../assets/wechat/weixined.png')">微信
            </mt-tab-item>
            <mt-tab-item id="通讯录">
                <img slot="icon" :src="active!='通讯录'?require('../assets/wechat/tongxunlu.png'):require('../assets/wechat/tongxunlued.png')">通讯录
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" :src="active!='发现'?require('../assets/wechat/faxian.png'):require('../assets/wechat/faxianed.png')">发现
            </mt-tab-item>
            <mt-tab-item id="我">
                <img slot="icon" :src="active!='我'?require('../assets/wechat/wo.png'):require('../assets/wechat/woed.png')">我
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import weixin from './weixin.vue';
import tongxunlu from './tongxunlu.vue';
import faxian from './faxian.vue';
import wo from './wo.vue';
import { setInterval } from 'timers';
export default {
    data(){return{
        active:'微信',
        myuser:{},
        list:[],
        user:[],
        result:''
    }},
    methods: {
        load(){
            var url="index";
            this.axios.get(url).then(result=>{
                if(result.data.msg=="请登录"){
                    this.$router.push("/login")
                }else{
                    //if(this.result!=result.data.msgs.toString()){
                        //console.log(result.data.msgs.toString())
                        //console.log(this.result)
                        this.result=result.data.toString()
                        var myuser=result.data.myuser;
                        var msgs=result.data.msgs;
                        var msgobj={};
                        msgs.filter(function(elem){
                            var index=elem.myuid;
                            if(index!=myuser.uid){
                                if(msgobj[index]==undefined){
                                    msgobj[index]=[]
                                    msgobj[index].push(index)
                                }
                                msgobj[index].push(elem)
                            }else{
                                if(msgobj[elem.youuid]==undefined){
                                    msgobj[elem.youuid]=[]
                                    msgobj[elem.youuid].push(elem.youuid)
                                }
                                msgobj[elem.youuid].push(elem)
                            }
                        })
                        var list=[]
                        for(var index in msgobj)(
                            list.push(msgobj[index])
                        )
                        this.list=list
                        var userlist=result.data.userlist;
                        var userobj={};
                        userlist.filter(function(elem){
                            var index=elem.uid;
                            userobj[index]=elem
                        })
                        this.user=userobj;
                        this.myuser=result.data.myuser;
                        //console.log(this.list)
                    //}
                }
            }).catch(err=>{console.log(err)})
        }
    },
    created() {
        var active=this.$route.query.active;
        if(active!=undefined){
            this.active=active
        };
            this.load();

    },
    components:{
        weixin,
        tongxunlu,
        faxian,
        wo
    }
}
</script>

<style scoped>
    .box{
        height: 100%;
    }
    .mint-tabbar>.mint-tab-item{
        color:#999999;
    }
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color: transparent;
        color:#45c018;
    }
</style>