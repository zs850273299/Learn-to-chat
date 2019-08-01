<template> 
    <div class="box">
        <div class="ahead">
            <h3>微信(35)</h3>
            <div class="navigator">
                <img @click="select" src="../assets/wechat/+.png">
                <div v-if="navigatorshow" class="nav-list">
                    <div class="icon"></div>
                    <div @click="showSelect">
                        添加好友
                    </div>
                </div>
            </div>
            <div class="asearch"><input type="text" placeholder="搜索"></div>
        </div>
        <div class="abody"> 
            <div class="arow" v-for="(item,i) of list" :key="i" @click="show(item[0])">
                <div class="photo">
                    <img :src="user[item[0]].title_photo">
                </div>
                <div class="acontent">
                    <div class="aulist">
                        <div class="auname">{{user[item[0]].title}}</div>
                        <div class="aumsg">{{item[item.length-1].msg | slice}}...</div>
                        <div class="audate">昨天</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigatorshow:false,
            key:''
        }
    },
    props:{
        list:{type:Array},
        user:{default:{}}
    },
    methods:{
        show(id){
            var uid=id
            this.$router.push({
                path:'/weixin',
                query:{
                    uid
                }    
            })
        },
        select(){
            this.navigatorshow==false?this.navigatorshow=true:this.navigatorshow=false;
            var vue=this;
            window.onclick=function(e){
                if(e.target.parentNode.className!="navigator"){
                    if(vue.navigatorshow==true){
                        vue.navigatorshow=false
                    }
                }  
            }
        },
        showSelect(){
            this.navigatorshow=false;
            this.$router.push({
                path:'/weixin/select'
            })  
        }    
    },
    filters:{
        slice:function(value){
            return value.slice(0,12)
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
        height:90px;
        line-height:20px;
        position:fixed;
        top:0;
        z-index:10;
        padding-bottom: 5px;
        background-color:#f1f1f1;
    }
    .ahead h3{
        margin:0;
        padding:0;
        margin: 25px 0 15px 0;
    }
    .ahead .navigator{
        text-align: right;
        position: absolute;
        top:30px;
        right:5px;
    }
    .ahead .navigator .nav-list{
        background-color: #222;
        color: #fff;
        padding: 1em 1em;
        border-radius: 10px;
        box-sizing: border-box;
        position: relative;
    }
    .icon{
        background-color: #222;
        position: absolute;
        top:-3px;
        right:5px;
        height: 14px;
        width: 14px;
        transform: rotate(45deg)
    }
    .ahead div img{
        height: 20px;
        width: 25px;
    }
    .abody{
        box-sizing: border-box;
        margin:110px .5em 55px .5em;  
    }
    .asearch input{
        width:95%;
        text-align:center;
        border-radius:5px;
        height:25px;
    }
    .arow{
        width: 100%;
        display:flex;
        flex-wrap:nowrap;
        margin: 0.5em 0.3em;
    }
    .photo{
        width: 15%;
        text-align: center;
    }
    .photo img{
        width:3em;
        height:3em;
        border:1px solid #f1f1f1;
        border-radius:5px;
    }
    .acontent{
        width:85%;
        height:55px;
        border:0px;
        margin: 0 0.8em; 
        border-bottom:1px solid #f1f1f1;
        overflow-x: hidden;
    }
    .aulist{
        position:relative;
        height:55px;
    }
    .auname{
        position:absolute;
        font-weight:600;
    }
    .aumsg{
        position:absolute;
        bottom:10px;
        color: #888;
        font-size: 0.8em;
    }
    .audate{
        position:absolute;
        top:2px;
        right:5px;
        font-size:0.6em;
    }
</style>