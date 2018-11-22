	
	/*使得导航栏一直在最上方*/
    $(document).ready(function() {
        var navOffset=$(".nav_ul").offset().top;

        $(window).scroll(function(){

            var scrollPos=$(window).scrollTop();

            if(scrollPos >=navOffset){

                $(".nav_ul").addClass("fixed");

                $(".nav").addClass("full");

            }else{

                $(".nav_ul").removeClass("fixed");

                $(".nav").removeClass("full");
            }

         });
    });

    // $(".uk-nav-search li"){

    // }
    // var str = {"code":0,"data":[{"uid":"689791","username":"vaghyuzhihao","orgid":"627","status":"1","subname":"yuzhihao","roleids":"1","orgcode":"600251","name":"yuzhihao","mapid":"0","passwd":"","siteid":"0","createorgcode":"600251","alarmview":"0"}]};
    // var json = eval(str);
    // json.data[0].uid);

    var alts=[];//所有的alt;
    $.ready(function(){
        //假如ul的id为 "ul"
        var oUl=$(".uk-nav-search");
        //你的遍历我不知道是什么意思，是ul下有多个li么？然后取li中的img的alt？
        var olis=oUl.children() ;
        for(var i=0;i<olis.length;i++){
        var oImg=olis[i].children("img") ;//如果是多个还要再次循环;
        var alt=oImg.attr("alt");//alt属性的值
        alts[i]=alt;
        }
    });

    $("input[type='search']").bind('input propertychange',function(){
        var data = [{"id": 1,"name": "xiaoming"}, {"id": 2,"name": "xiaohong"}];
       
    });
  
