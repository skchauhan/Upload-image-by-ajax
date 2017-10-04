# Upload-image-by-ajax
How can upload image by ajax



$(document).ready(function(){
      
    if($('.mega-dropdown li').hasClass('active')) {
        $('.mega-dropdown').addClass('active');
    }


    $.validator.addMethod("alphabetsAndSpacesOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value); });

      /*form validation*/

      $("#start_project").validate({    
          // Specify the validation rules
          rules: {              
              name: {
                required: true,
                alphabetsAndSpacesOnly: true
              },
              website: "required",
              email: {
                  required: true,
                  email: true
              },
              phone: {
                  required: true,
                  number: true
              },
              service:  { 
                required: true
              },
              timeline:  { 
                required: true
              },
              details:  { 
                required: true
              }

          },
          
          // Specify the validation error messages
          messages: {
              name: "Please enter your name",            
              website: "Please enter company / website",
              email: "Please enter email Id",
              phone: "Please enter phone Number",
              service: "Please Select Service",
              timeline: "Please Select Timeline",
              details: "Please enter Project Details",
              
          },
          
          submitHandler: function(form) {
              form.submit();
          }
      });




      $("#career").validate({
          rules: {              
              name: {
                required: true,
                alphabetsAndSpacesOnly: true
              },
              email: {
                  required: true,
                  email: true
              },
              mobile: {
                  required: true,
                  number: true
              },
              designation:  { 
                required: true
              },
              file:  { 
                required: true,
                extension: "docx|pdf"
              }
          },
          
          // Specify the validation error messages
          messages: {
              name: "Please enter your name",            
              email: "Please enter email Id",
              mobile: "Please enter Mobile Number",
              designation: "Please enter your Designation",
              file: "Please upload docx, pdf file"
          },
          
          submitHandler: function(form) {
              form.submit();
          }
      });


      $("#contact_form").validate({
          rules: {              
              first_name: {
                required: true
              },
              last_name: {
                required: true
              },
              email: {
                  required: true,
                  email: true
              },
              mobile: {
                  required: true,
                  number: true
              }
          },
          
          // Specify the validation error messages
          messages: {
              first_name: "Please enter your first name",            
              last_name: "Please enter your last name",            
              email: "Please enter email Id",
              mobile: "Please enter Mobile Number"
          },
          
          submitHandler: function(form) {
              form.submit();
          }
      });

    });
    
