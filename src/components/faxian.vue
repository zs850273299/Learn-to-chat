<template>
    <div class="box">
        <div class="ahead">
            <h3>发现</h3>
        </div>
        <div class="abody">
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
            [{title:'朋友圈',photo:require('../assets/faxian/pengyouquan.jpg')}],
            [{title:'扫一扫',photo:require('../assets/faxian/saoyisao.jpg')},
            {title:'摇一摇',photo:require('../assets/faxian/yaoyiyao.jpg')}],
            [{title:'附件的人',photo:require('../assets/faxian/fujinderen.jpg')}]
        ]
    }}
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
</style>

