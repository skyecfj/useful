/**
 * Created by Administrator on 2017/7/8.
 */
(function (d,$) {
    //jquery的扩展
    $.fn.flower=function (options) {
        var flower={
            flowerChar:"&#10047",
            minSize:10,
            maxSize:100,
            timer:100,      //花生成的间隔时间，单位：毫秒
            flowerColor:"pink"
        };
        $.extend(flower,options);
        //flower = options || flower;

        //开始生成花
        var $flower=$("<div></div>").css({"position":"absolute","top":"50px"});

        $flower.html( flower.flowerChar );

        //获取网页大小
        var dWidth=$(document).width();
        var dHeight=$(document).height();

        setInterval(function () {
            //开始计算位置
            var startPositionLeft=Math.random()*dWidth-100;
            var startOpacity=Math.random()+0.5;
            //起始大小
            var startSize=flower.minSize + Math.random()*(flower.maxSize - flower.minSize);

            if( startSize>10 && startSize<70 ){
                flower.flowerColor="lime";
            }else if( startSize>70 && startSize<100 ){
                flower.flowerColor="cyan";
            }
            
            //定义结束的位置
            var endPositionLeft=startPositionLeft-100+Math.random()*200;
            var endPositionTop=dHeight - flower.maxSize;
            //花飘落的速度
            var durationFall=dHeight*5 +  Math.random()*5000;

            //把这个花生成到网页里面去
            $flower.clone()
                .appendTo( $("body") )
                .css({
                    left:startPositionLeft,
                    opacity:startOpacity,
                    color:flower.flowerColor,
                    'font-size':startSize
                })
                .animate({
                    top:endPositionTop,
                    left:endPositionLeft,
                    opacity:0.1
                },durationFall,"linear",function () {
                    //当动画完成，意味着这朵花已经凋谢飘落完毕
                    $(this).remove();
                })
        },flower.timer);
    }
})(document,$);