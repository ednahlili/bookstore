/*商品分类悬浮层*/
window.onload = function() {
    var Lis = document.getElementsByTagName("li");
    for (i = 0; i < Lis.length; i++) {
        Lis[i].i = i;
        Lis[i].onmouseover = function() {
            this.className = "lihover";
            var h0 = (this.i - 1) * 40 - 40;
            var y = this.getElementsByTagName("div")[0].offsetHeight;
            var h = this.getElementsByTagName("div")[0].style.top + y;
            if (h < h0) {
                this.getElementsByTagName("div")[0].style.top = h0 + "px";
            }
            if (y > 500) {
                this.getElementsByTagName("div")[0].style.top = "150px";
            }
        }

        Lis[i].onmouseout = function() {
            this.className = "";
        }
    }
    /*轮播图*/
    myFocus.set({
        id: 'boxID', //焦点图盒子ID
        loadIMGTimeout: '0',
        pattern: 'mF_fancy', //风格应用的名称
        time: 3, //切换时间间隔(秒)
        trigger: 'click', //触发切换模式:'click'(点击)/'mouseover'(悬停)
        width: 740, //设置图片区域宽度(像素)
        height: 335, //设置图片区域高度(像素)
        txtHeight: 'default' //文字层高度设置(像素),'default'为默认高度，0为隐藏
    });

    /*回到顶部*/
    var top_obtn = document.getElementById("top_btn");
    /*获取页面可视区的高度*/
    var clientHeight = document.documentElement.clientHeight;

    /*滚动条滚动时触发*/
    window.onscroll=function()
    {
    	var ostop = document.documentElement.scrollTop || document.body.scrollTop;
			if (ostop >= clientHeight) {
                top_obtn.style.display = "block";
            }
             else {
                top_obtn.style.display = "none";
            }
    }
    top_obtn.onclick = function() {
        /*设置定时器*/
        timer = setInterval(function() {
            var ostop = document.documentElement.scrollTop || document.body.scrollTop;
            /*兼容chrome浏览器*/
            var ispeed = Math.floor(-ostop / 6);
            /*加负号让滚动条到达最上面*/
            /*让速度先快后慢*/
            console.log(ostop - ispeed);
            document.documentElement.scrollTop = document.body.scrollTop += ispeed;
            if (ostop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }

}
