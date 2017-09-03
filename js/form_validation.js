$(document).ready(function(){
    
      $("#reg").validate({
          rules: {              
              name: {
                required: true
              }
          }
      });

     $("#reg").validate();

     $("input.ipfile").each(function(){        
        $(this).rules("add", {            
            required:true,            
            extension: "php|jpeg"        
        });                        
    });


     $(document).on("submit", "#reg", function(e){
      
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'tap.php',
            data: new FormData(this),
            contentType: false,
            // cache: false,
            processData: false,
            success: function(result){
                $('.result').html(result);
            }

        });
     });





     

    });
    
