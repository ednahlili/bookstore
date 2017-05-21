window.onload = function() {
    /*商品分类悬浮层*/
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
    window.onscroll = function() {
        var ostop = document.documentElement.scrollTop || document.body.scrollTop;
        if (ostop >= clientHeight) {
            top_obtn.style.display = "block";
        } else {
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

/****************************************************登录悬浮层**************************************/
//获取元素对象
function g(id) {
    return document.getElementById(id);
}

//登录框自动居中
function autoCenter(el) {
    //获取可视区域宽高
    var wHeight = document.documentElement.clientHeight;
    var wWidth = document.documentElement.clientWidth;
    //获取元素的宽高
    var elw = el.offsetWidth;
    var elh = el.offsetHeight;
    el.style.left = (wWidth - elw) / 2 + "px";
    el.style.top = (wHeight - elh) / 2 + "px";
}

//全屏遮罩
//获取页面的宽度和高度
var sHeight = document.documentElement.scrollHeight;
var sWidth = document.documentElement.scrollWidth;

//添加遮罩层结点
var omask = document.createElement("div");
omask.id = "mask";
omask.style.height = sHeight + "px";
omask.style.width = sWidth + "px";
document.body.appendChild(omask);

 function showDialog() {
    omask.style.display = "block";
    g("login_area").style.display = "block";
    autoCenter(g("login_area"));
    //鼠标偏移
    var mouseOffsetX = 0;
    var mouseOffsetY = 0;
    var isDraging = false; //是否可拖拽
    //鼠标事件1，在标题栏上按下
    g("login_title").addEventListener('mousedown', function(e) {
        var e = e || window.event;
        mouseOffsetX = e.pageX - g("login_area").offsetLeft;
        mouseOffsetY = e.pageY - g("login_area").offsetTop;
        isDraging = true;
    });
    //鼠标事件2，鼠标移动时
    document.onmousemove = function(e) {
            var e = e || window.event;
            //鼠标当前位置
            var mouseX = e.pageX;
            var mouseY = e.pageY;
            //浮层元素的新位置
            var moveX = 0;
            var moveY = 0;
            if (isDraging === true) {
                //鼠标的偏移
                moveX = mouseX - mouseOffsetX;
                moveY = mouseY - mouseOffsetY;
                //范围限定:moveX>0且moveX<(页面宽度-浮层宽度)
                var pageWidth = document.documentElement.clientWidth;
                var pageHeight = document.documentElement.clientHeight;
                var dialogWidth = g("login_area").offsetWidth;
                var dialogHeight = g("login_area").offsetHeight;
                var maxX=pageWidth - dialogWidth;
                var maxY=pageHeight-dialogHeight;
                //moveX=Math.max(0,moveX);返回大的值，则moveX最小为0
                moveX=Math.min(maxX,Math.max(0,moveX));
                moveY=Math.min(maxY,Math.max(0,moveY));

                g("login_area").style.left = moveX + 'px';
                g("login_area").style.top = moveY + 'px';

            }
        }
        //鼠标事件3，鼠标松开时不可拖动
    document.onmouseup = function() {
        isDraging = false;
    }
}
 function hideDialog() {
    g("login_area").style.display = "none";
    omask.style.display = "none";
}
window.onresize =function(){
            autoCenter(g('login_area'));
        }
