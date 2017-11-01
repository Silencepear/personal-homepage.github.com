var oul = document.getElementById("oul");
var btnStart = document.getElementById("btnStart");
var btnsuspend = document.getElementById("btnsuspend");
var bjyy = document.getElementById("bjyy");
var siwang = document.getElementById("siwang");
var siwu = document.getElementById("siwu");
var zuigao = document.getElementById("zuigao");
var fenshu = document.getElementById("fenshu");
var level = document.getElementById("level");
var direction = 39;//方向   37左键 38上键 39右键 40下键
//个数
var geshu = 30;
//整个li的盒子
var lis = [];
//存蛇的索引（下标）
//var snake = [{pos:0,color:"#f10"},{pos:1,color:"#859"},{pos:2,color:"#231"},{pos:3,color:"#167"},{pos:4,color:"#654"}];
var snake= [];
for(var i=0 ; i<5 ; i++){
    snake.push({pos:i , color:randColor()})
}
//食物的索引
var food = {pos:0,color:"yellow"};
//蛇的熟读
shudu = 100;
//分数
fenshu.innerHTML = snake.length;
//历史最高分
var score = localStorage.getItem("score")||0;
zuigao.innerHTML = score;
//初始化格子
function init(){
    var pianduan = document.createDocumentFragment();
    for(var i = 0 ; i < 900 ; i++){
        var oli = document.createElement("li");
        pianduan.appendChild(oli); 
    }
    oul.appendChild(pianduan);
    lis = oul.children;
}
//随机色
function randColor(){
    return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}
//初始化前五个格子改背景色
function initSnake(){
    for(var i=0,l=snake.length ; i<l ; i++){
        lis[snake[i].pos].style.background=snake[i].color; 
    }
}
function isInSnake(index){
    for(var i=0,l=snake.length ; i<l ; i++){
        if(snake[i].pos == index){
            return true;
            break;
        }
    }
    return false;
}
//生成食物
function initFood(){
    var index = Math.floor(Math.random()*900);
    while(isInSnake(index)){
        index = Math.floor(Math.random()*900);
    }
    food = {pos:index,color:randColor()};
    lis[food.pos].style.background=food.color;
}

//死亡函数
function death(){
    //获取蛇的长度
    var changdu = snake.length;
    //历史最高分
    var score = localStorage.getItem("score")||0;
    if(changdu > score){
        localStorage.setItem("score" , changdu);
    }
    //音乐特效
    siwang.play();
    //背景音乐结束
    bjyy.pause();
    alert("你以头破血流，游戏结束！");
    //location.href=location.href;
    location.reload();
}
init();
initSnake();
initFood();
function yundong(){
    //蛇跑
    var shetou = snake.slice(-1)[0].pos;
    //关于墙的碰撞检测
    if((shetou+1)%geshu == 0 && direction == 39){
        death()    
    }else if(shetou>=(900-geshu) && direction == 40){
        death()
    }else if((shetou < geshu) && direction == 38){
       death()
    }else if(shetou%geshu == 0 && direction == 37){
       death()
    }
    //绘制蛇
    var shewei = snake.slice(0,1)[0].pos;
    lis[shewei].style.background = "#fff";
    for(var i=0 , l=snake.length ; i<l-1 ; i++){
        snake[i].pos = snake[i+1].pos;
    }
    if(direction == 40){//向下
        snake[l-1].pos = snake[l-1].pos+30;
    }else if(direction == 37){//向左
        snake[l-1].pos = snake[l-1].pos-1;
    }else if(direction == 39){//向右
        snake[l-1].pos = snake[l-1].pos+1;
    }else if(direction == 38){//向上
        snake[l-1].pos = snake[l-1].pos-30;
    }
    shetou = snake[l-1].pos
    //蛇吃食物的碰撞检测
    if(shetou == food.pos){
        //将食物放到数组的前面
        snake.unshift({pos:shewei,color:food.color});
        //音乐特效
        siwu.play();
        //分数
        fenshu.innerHTML = snake.length;
        //生成新的食物
        initFood();
    }
    //检测是否吃到自己
    for(var i=0 , l=snake.length ; i<l-1 ; i++){
        if(snake[i].pos == shetou){
            siwang.play();
            alert("你已经自毁，游戏结束！");
            location.reload();
            break;
        }
    }

    initSnake();
}
var timer = null;
//开始游戏
btnStart.onclick = function(){
    //设置难度
    shudu = level.value;
    clearInterval(timer);
    timer =  setInterval(yundong,shudu);

    //背景音乐开始
    bjyy.play();
}
//暂停游戏
btnsuspend.onclick = function(){
    clearInterval(timer);
} 
//给文档加点击下键事件
document.addEventListener("keydown" , function(e){
    e=e || window.event;
    //获取按下的是什么键
    switch(e.keyCode){
        //左键
        case 37:{
            if(direction == 39)return false;
            direction = e.keyCode;
            break;
        }
        //上键
        case 38:{
            if(direction == 40)return false;
            direction = e.keyCode;
            break;
        }
        //右键
        case 39:{
            if(direction == 37)return false;
            direction = e.keyCode;
            break;
        } 
        //下键
        case 40:{
            if(direction == 38)return false;
            direction = e.keyCode;
            break;
        }
    }
} , false)