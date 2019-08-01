<template>
    <div class="box">
        <div class="ahead">
            <img src="" alt="">
        </div>
        <div class="abody">
            <div class="list">
                <div class="item title-item">
                    <div class="item-title title-item-title">
                        <img :src="myuser.title_photo" alt="">
                        <div class="title-user">
                            <h3>{{myuser.title}}</h3>
                            <div>微信号:{{myuser.uname}}</div>
                        </div>
                    </div>
                    <div class="go"></div>
                </div>
            </div>
            <div class="list" v-for="(item,index) of list" :key="index">
                <div class="item" v-for="(tmp,i) of item" :key="i">
                    <div class="item-title">
                        <img :src="tmp.photo" alt="">
                        <span>{{tmp.title}}</span>
                    </div>
                    <div class="go"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){return{
        list:[
            [{title:'支付',photo:require('../assets/wo/zhifu.jpg')}],
            [{title:'收藏',photo:require('../assets/wo/shoucang.jpg')},
            {title:'相册',photo:require('../assets/wo/xiangce.jpg')},
            {title:'卡包',photo:require('../assets/wo/kabao.jpg')},
            {title:'表情',photo:require('../assets/wo/biaoqing.jpg')}],
            [{title:'设置',photo:require('../assets/wo/shezhi.jpg')}]
        ]
    }},
    props:{
        myuser:{default:{}}
    }
}
</script>

<style scoped>
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
        margin:0;
        padding:0;
        margin: 25px 0 15px 0;
    }
    .abody{
        height: 100%;
        padding: 65px 0;
        background-color: #f1f1f1;
    }
    .list{
        margin-bottom:10px; 
    }
    .item{
        display: flex;
        height: 50px;
        background-color: #fff;
        justify-content: space-between;
    }
    .item-title{
        width: 8em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .item-title img{
        width: 30px;
        max-width: 60%;
        max-height: 60%;
        margin: 0 10px;
    }
    .go{
        height: 10px;
        width: 10px;
        transform-origin: -25px -0px;
        transform: rotate(45deg); 
        border-top:1px solid black;
        border-right:1px solid black;
    }
    .title-item{
        height: 100px;
    }
    .title-item img{
        width: 60px;
        max-width: 60%;
        max-height: 60%;
        margin: 0 20px;
    }
    .title-item-title{
        width: 300px;
    }
    .title-item .go{
        transform-origin: -60px 14px;
    }
    .title-user{
        height:60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }
</style>
