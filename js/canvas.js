

        (function(){
                var ctx;

                var arr = new Array();
                var starCount = 400;

                var rains = new Array();
                var rainCount =6;

                //初始化画布及ctx
                function init(){
                    //获取canvas
                    var canvas = document.getElementById("canvas");
                        canvas.width=window.innerWidth;
                        canvas.height=window.innerHeight;
                        //获取ctx
                        ctx = canvas.getContext("2d");
                }
                init();

                //创建一个星星对象
                var Star = function (){

                    this.color = '#3b3c4d';
                    this.globalAlpha = Math.round(Math.random()*1);
                    //圆心坐标
                    this.x = Math.round(Math.random()*canvas.width);
                    this.y = Math.round(Math.random()*canvas.height);
                    //速度(不同方向)
                    this.vx = (Math.random()-0.5)*0.4;
                    this.vy = (Math.random()-0.5)*0.4;
                    //随机半径
                    this.radius = Math.random() > 0.9 ? 1.8 + Math.random() * 1 : 0.5 + Math.random() * 1;
                    
                }

                Star.prototype.draw = function(){
                    ctx.beginPath();
                    ctx.fillStyle = this.color;
                    ctx.arc(this.x,this.y,this.radius,0,360,false);
                    ctx.globalAlpha = this.globalAlpha;
                    ctx.fill();
                }

                Star.prototype.move = function(){
                    if (this.x<0 || this.x>canvas.width) {
                        this.vx = -this.vx;
                    }
                    if (this.y<0 || this.y>canvas.height) {
                        this.vy = -this.vy;
                    }
                    this.x += this.vx;
                    this.y += this.vy;
                }



                /*流星雨开始*/
                var MeteorRain = function(){
                    
                    this.init = function (){//初始化
                        this.getPos();
                        this.alpha = 1;//透明度
                        this.getRandomColor();
                        //最小长度，最大长度
                        var x = Math.random() * 80 + 80;
                        this.length = Math.ceil(x);
                        this.angle = 30; //流星倾斜角
                        var y = Math.random()+0.5;
                        this.speed = Math.ceil(y); //流星的速度
                        var cos = Math.cos(this.angle*3.14/180);
                        var sin = Math.sin(this.angle*3.14/180) ;
                        this.width = this.length*cos ;  //流星所占宽度
                        this.height = this.length*sin ;//流星所占高度
                        this.offset_x = this.speed*cos ;
                        this.offset_y = this.speed*sin;
                    };

                    /**************获取随机颜色函数*****************/
                    this.getRandomColor = function (){
                        var a = Math.ceil(255-240* Math.random()); 
                        //中段颜色
                        this.color1 = "rgba("+a+","+a+","+a+",1)";
                        //结束颜色
                        this.color2 = "rgba(255,255,255,0.3)";
                    }


                    /***************重新计算流星坐标的函数******************/
                    this.countPos = function (){
                        //往左下移动,x减少，y增加
                        this.x = this.x - this.offset_x;
                        this.y = this.y + this.offset_y;
                    }

                    /*****************获取随机坐标的函数*****************/
                    this.getPos = function (){
                        this.x = Math.random() * window.innerWidth; //窗口高度
                        //纵坐标小于600
                        //this.y = Math.random() * window.innerHeight;  //窗口宽度
                        if(this.x<window.innerWidth/3){
                            this.y = Math.random() * window.innerHeight; 
                        }
                        else if(this.x> window.innerWidth*0.75){
                            this.y = Math.random() * (window.innerHeight*0.9); 
                        }
                        else{
                            this.x=Math.random()*window.innerWidth/3;
                            this.y = Math.random() * window.innerHeight; 
                        }
                    }
                }

                /****绘制流星***************************/
                MeteorRain.prototype.draw = function (){ //绘制一个流星的函数
                    ctx.save();
                    ctx.beginPath();
                    ctx.lineWidth = 1; //宽度
                    ctx.globalAlpha = this.alpha; //设置透明度
                    //创建横向渐变颜色,起点坐标至终点坐标
                    var line = ctx.createLinearGradient(this.x, this.y, 
                        this.x + this.width, 
                        this.y - this.height);

                    //分段设置颜色
                    line.addColorStop(0, "white");
                    line.addColorStop(0.5, "white");
                    line.addColorStop(0.9, this.color2);
                    ctx.strokeStyle = line;
                    //起点
                    ctx.moveTo(this.x, this.y);
                    //终点
                    ctx.lineTo(this.x + this.width, this.y - this.height);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.restore();
                };
                MeteorRain.prototype.move = function(){
                    //清空流星像素
                    var x = this.x+this.width;
                    var y = this.y-this.height;
                    ctx.clearRect(x-3,y-3,this.offset_x,this.offset_y);
                    //重新计算位置，往左下移动
                    this.countPos();
                    //透明度降低
                    this.alpha -= 0.002;
                    //重绘
                    //this.draw(); 
                }

                for (var i=0;i<rainCount;i++) {
                    var rain = new MeteorRain();
                    rain.init();
                    rains.push(rain);
                }

                for (var i=0;i<starCount;i++) {
                    var star = new Star();
                    arr.push(star);
                }

                function infinate(){
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    init();
                    for (var i=0;i<arr.length;i++) {
                        arr[i].draw();
                        arr[i].move();
                    }
                    for (var n = 0; n < rains.length; n++){ 
                        rains[n].draw();
                        rains[n].move();//移动
                        if(rains[n].y>window.innerHeight){//超出界限后重来
                            ctx.clearRect(rains[n].x,rains[n].y-rains[n].height,rains[n].width,rains[n].height);
                            rains[n] = new MeteorRain();
                            rains[n].init();
                        }
                    }  
                    requestAnimationFrame(infinate);
                }
                infinate();
        })();