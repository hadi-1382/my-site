$(document).ready(function(){
    a=0;
    $(".btn").click(function(){
        a++; 
        if(a == 1)
        {  
            $(".matn").html("جون محکمتر");
        }
        if(a == 2)
        {  
            $(".matn").html("خوشت نیاد");
        }
        if(a >= 3)
        {   
            if($(".number-css").val() == "" || $(".family-cj").val() == "") 
            {
                
                $(".matn").html("خیلی ور نرو برو اطلاعلات پر کن");
                a=0;
            }
            else
            {
                $(".matn").html("بسته دیگه خوش مزه");
                $(".matn").attr("class", "matn-red");
                $(".name").html($(".family-cj").val());
                $(".age").html($(".number-css").val());
                $(".hiden").attr("class", "matn-green");
                $(".hiden").attr("class", "matn-green");
                $(".img-cj").attr("src", "hndonh.jpg")
                a=3;
            }
            
        }
        
    })
})
