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
            if($(".number-css").val() == "22") 
            {
                $(".matn").html("الان چیزی نوشته شد");
            }
            a=3;
        }
        
    })
})
