<template> 
    <div class="box">
        <div class="ahead">
            <h3>通讯录<img src="../assets/wechat/+.png"></h3>
            <div class="asearch"><input type="text" placeholder="搜索"></div>
        </div>
        <div class="abody"> 
            <div class="firends" v-for="(item,i) of user" :key="i">
                <div class="arow" @click="show(item.uid)">
                    <div class="photo">
                        <img :src="item.title_photo">
                    </div>
                    <div class="acontent">
                        <div>{{item.title}}</div>
                    </div>
                </div>
                <div class="tab" v-if="i==4">☆&nbsp;星标朋友</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{type:Array},
        user:{default:{}}
    },
    methods:{
        show(id){
            var uid=id;
            if(uid==1){
                this.$router.push({
                    path:'/tongxunlu/add',   
                })
            }else if(uid==2){

            }else if(uid==3){
                
            }else if(uid==4){
                
            }else{
                this.$router.push({
                    path:'/showfriend',
                    query:{
                        uid
                    }    
                })
            }
        }
    }
}
</script>

<style scoped>
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
    .ahead h3 img{
        height: 20px;
        width: 25px;
        position: absolute;
        right:1em;
    }
    .abody{
        box-sizing: border-box;
        margin:100px 0 55px 0;  
    }
    .asearch{
        text-align: center;
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
