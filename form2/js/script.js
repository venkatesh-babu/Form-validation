var input1,input2,input3,size,condition,condition2;
$(document).ready(function(){
    $("form").submit(function(){
        input1 = $(".input1").val();
        input2 = $(".input2").val();
        input3 = $(".input3").val();
        size = input3.length;
        condition = input2.includes("@");
        condition = input2.includes(".");
        condition2 = input2.includes(" ");
        
        if (input1=="" || input2=="" || input3=="") {
            
            if(input1==""){
                $(".hiden1").css("display","block");
                $(".hiden2").css("display","none");
                $(".hiden3").css("display","none");
                $('.input1').removeAttr('placeholder');
                $(".label1").css({"display": "inline-block"});

                $(".input1").css({
                    "border": "thin solid red",
                    "background-color":"#fff"
                });
                $(".input1~i").css({
                    "top": "-10px",
                    "left": "15px",
                    "font-size": "small",
                      "background-color":"#fff",
                    "padding":"0 9px 0 9px"
                });
                return false;
            }
            
            if(input2=="") {
                $(".hiden2").css("display","block");
                $(".hiden1").css("display","none");
                $(".hiden3").css("display","none");
                $(".hidden-xtra2").css("display","none");
                $(".label2").css({"display": "inline-block"});
               $('.input2').removeAttr('placeholder');
                $(".hidden-xtra").css("display","none");
                $(".input2").css({
                    "border": "thin solid red",
                    "background-color":"#ff"
                });
                $(".input2~i").css({
                    "top": "-10px",
                    "left": "15px",
                    "font-size": "small",
                    "background-color":"#fff",
                    "padding":"0 9px 0 9px"
                });
                return false;  
            }
            
            if(input3=="") {
                $(".hiden3").css("display","block");
                $(".hiden2").css("display","none");
                $(".hiden1").css("display","none");
                $(".hidden-xtra").css("display","none");
                $('.input3').removeAttr('placeholder');
                $(".label3").css({
                "display": "inline-block"});
                $(".input3").css({
                    "border": "thin solid red",
                    "background-color":"#ff"
                });
                $(".input3~i").css({
                    "top": "-10px",
                    "left": "15px",
                    "font-size": "small",
                    "background-color":"#fff",
                    "padding":"0 9px 0 9px"
                });
                return false;
            }
        }
        
        else if(condition == false) {
            $(".hidden-xtra").css({"display":"block"});
            $(".hiden2").css("display","none");
            $(".input2").css("border-color","red");
            return false;
        }
        
        else if(condition2 == true) {
            $(".hidden-xtra").css({"display":"block"});
            $(".hiden2").css("display","none");
            $(".input2").css("border-color","red");
            return false;
        }
        
        else if(size < "8") {
            $(".hidden-xtra2").css("display","block");
            $(".hidden-xtra").css("display","none");
            $(".hiden3").css("display","none");
            $(".input3").css({
                "border": "thin solid red",
                "background-color":"#ff"
            });
            $(".input3~i").css({
                "top": "-10px",
                "left": "15px",
                "font-size": "small",
                "background-color":"#fff",
                "padding":"0 9px 0 9px"
            });
            return false;
        }
        
        else  {
            $("input").val("");
            return true;
        }
    });
    
    $(".input").focusout(function(){
        input1 = $(".input1").val();
        input2 = $(".input2").val();
        input3 = $(".input3").val();
        if(input1==""){
            
        }
        else {
            $(".input1").css({
                "border": "thin solid #32cd32",
                 "background-color":"#fff"
            });
            $(".input1~i").css({
                "top": "-10px",
                "left": "15px",
                "font-size": "small",
                "color": "black",
                "background-color":"#fff",
                "padding":"0 9px 0 9px"
            });
            $(".label1").css({
                "display": "inline-block"
            });
        }
        if(input2==""){
            
        }
        else {
        $(".input2").css({
            "border": "thin solid #32cd32",
            "background-color":"#fff"
            });
            $(".input2~i").css({
                "top": "-10px",
                "left": "15px",
                "font-size": "small",
                "color": "black",
                "background-color":"#fff ",
                "padding":"0 9px 0 9px"
            });
             $(".label2").css({
                "display": "inline-block"
            });
        }
        if(input3==""){
            
        }
        else {
        $(".input3").css({
            "border": "thin solid #32cd32",
            "background-color":"#fff"
            });
            $(".input3~i").css({
                "top": "-10px",
                "left": "15px",
                "font-size": "small",
                "color": "black",
                "background-color":"#fff",
                "padding":"0 9px 0 9px"
            });
             $(".label3").css({
                "display": "inline-block"
            });
        }
    });
}); 

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}