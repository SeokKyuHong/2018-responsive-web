$(function(){
    /********사진 넘기기**************/
    var N;
	setInterval(function(){
        if(N<3){N++;}else{N=0;}
        $("#sec1 .s_img ul li").removeClass("op");
        $("#sec1 .s_img ul li").eq(N).addClass("op");
        
        $("#sec1 .s_img dl dd").removeClass("con");
        $("#sec1 .s_img dl dd").eq(N).addClass("con");
        
    },5000);
    
    var L=0;
    $("#sec1 .s_img dl dd").click(function(){
        $("#sec1 .s_img dl dd").removeClass("con");
        $(this).addClass("con");
        
        L=$(this).index();
        
        $("#sec1 .s_img ul li").removeClass("op");
        $("#sec1 .s_img ul li").eq(L).addClass("op");
        
    });
	
    /********메뉴**************/
    $(function(){
        $("#sec1 header nav>ul>li").hover(function(){
            $(this).find("ul").slideDown(300)
        },function(){
            $(this).find("ul").slideUp(300)
        })
        
    });
    
    
    /********************************/
    var G=0;
    $("#sec4 .dim .contller .left").click(function(e){
       e.preventDefault();
        
        if(G>0){G--;}else{G=3;}
        DD=G*(-1)*$("#sec4 .dim .box ul li").width();
        $("#sec4 .dim ul").css({"margin-left":DD});
    });
    $("#sec4 .dim .contller .right").click(function(e){
        e.preventDefault();
        if(G<3){G++;}else{G=0;}
        DD=G*(-1)*$("#sec4 .dim .box ul li").width();
        $("#sec4 .dim ul").css({"margin-left":DD});
    });
    
    /***********************/
    
        $("#sec4 .sec4_b ul li.img img").click(function(){
            $("#sec4 .dim").show(300);
        
        });
    
    
        $("#sec4 .dim .contller button").click(function(){
            $("#sec4 .dim").hide(300);
        });
    
    
    /**********************/
   
        $(".fix_nav>ul>li").hover(function(){
            $(this).find("ul").slideDown()
        },function(){
            $(this).find("ul").slideUp()
        })
        
    
    
    /*********************/
    var t;
	
	$(window).scroll(function(){
        t=$(window).scrollTop();
        
        if(t>=$("#sec2").offset().top-100){
            $(".fix_nav").addClass("menu");
       }
        else{
            $(".fix_nav").removeClass("menu");
        }
    });
    /***********dim********/
    
        $(".dim_m nav>ul>li").hover(function(){
            $(this).find("ul").slideDown(300)
        },function(){
            $(this).find("ul").slideUp(300)
        })
        
    
    
    var c=0;
    
        $("#sec1 header>a").click(function(e){
            e.preventDefault();
            
            
           if(c==0){
               $(".dim_m").show();
            $("#sec1 header>a>img").attr("src","images/ham_x.png");
               c=1;
           }else{
               $(".dim_m").hide();
            $("#sec1 header>a>img").attr("src","images/ham.png");
               c=0;
           } 
            
        });
        
   
    
    /*****************************/
    
	
	/*****************fixed**********/
	
	$(window).scroll(function(){
        t=$(window).scrollTop();
        
        if(t>=$(".wrapper").offset().top+200){
            $("#header .left_header .scroll").addClass("sss");
            $("#header .left_header .fixed").addClass("ttt");
			$("#header .left_header .top").addClass("ttt");
            
        }
        else{
            
            $("#header .left_header .scroll").removeClass("sss");
            $("#header .left_header .fixed").removeClass("ttt");
			$("#header .left_header .top").removeClass("ttt");
            
        }
    });
    
    $(function(){
    var location = new google.maps.LatLng(37.517928, 127.043521);         

    //구글맵 옵션 지정
    var mapInfo = {
        "center" : location ,                        
        "zoom" : 16 ,
        mapTypeId:google.maps.MapTypeId.ROADMAP 
    }

    //구글맵 지도객체 생성
    var myMap = new google.maps.Map(document.getElementById("map"),mapInfo);

    //구글맵에 마커 연결
    new google.maps.Marker({
        "position" : location,
        "map" : myMap,
        "title" : "박술녀한복"
    });
});


    
    /***************************/
//    var h;
//	$(window).resize(function(){
//        h=$(window).height();
//        $("section").css({height:h});
//		;
//		});
//	$(window).trigger("resize");
	
//	var f=0;
//	$(".wrapper").mousewheel(function(e, delta){
//            if($("html,body").is(":animated")){
//                return false;
//            }
//            if(delta>0){
//                if(f>0){
//                    f=f-1;
//                }
//            }else{
//                if(f<8){
//                    f=f+1;
//                }
//            }
//            
//        
//        $("html, body").stop().animate({scrollTop:$("section").eq(f).offset().top}, 800);
//    });
});












