window.onload = function() {
	var img1 = document.getElementById('img1');
    img1.onclick = function() {
        if (this.src.search("u2349.png") != -1) {
            this.src = "./images/u1783.png";
        } else {
            this.src = "./images/u2349.png";
        }
    }


    var img1 = document.getElementById('img1_wxz');
    img1.onclick = function() {
        // console.log( img.src);
        if (this.src.search("weixuanzhong@2x.png") != -1) {
            this.src = "./images/xuanzhong@2x.png";
            console.log(this.src);
        } else {
            this.src = "./images/weixuanzhong@2x.png";
        }
    } 
    var img2 = document.getElementById('img2_wxz');
    img2.onclick = function() {
        // console.log( img.src);
        if (this.src.search("weixuanzhong@2x.png") != -1) {
            this.src = "./images/xuanzhong@2x.png";
            console.log(this.src);
        } else {
            this.src = "./images/weixuanzhong@2x.png";
        }
    }




// 订单确认里的按钮
    var price = $("div.price p");
    var discount = $("div.discount p");
    var money=$("div.money p");
    console.log($(price).text());
$("#btn").click(function(){
    if($(this).hasClass("orange")){
        $(this).removeClass("orange");
        $(price).text("¥0.00");
        $(price).css("color","#686868");
        $(money).text("应付金额    ¥0.00");
        $(money).css("color","#686868");
        $(discount).css("color","#686868");
    }else{
        $(this).addClass("orange");
        $(price).text("¥4200.00");
        $(price).css("color","#ff9914");
        $(money).text("应付金额     ¥4200.00");
        $(money).css("color","#ff9914");
        $(discount).css("color","#ff9914");
    }    
}); 


}



    var tanchu = $('.tanchu');
    var shade = $('.shade');
    $('.link').click(function(){
        tanchu.slideDown(1000);
        shade.css('display','block');
        tanchu.css('backgroundColor','rgba(0)'); 
    })
    
    var quxiao = $('.quxiao');
    quxiao.click(function(){
        tanchu.slideUp(1000);
        shade.css('display','none');
    })

    var order = $('.order');
    var dg = $('.dg');
    dg.click(function(){
       order.slideDown(1000);
       shade.css('display','block');
       order.css('backgroundColor','#ff9914'); 
       // console.log('CLICK');

    })
    var close_btn = $('.close_btn');
    close_btn.click(function(){
        order.slideUp(1500);
        shade.css('display','none');
    })





