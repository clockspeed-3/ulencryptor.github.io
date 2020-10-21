/**
* Template Name: eNno - v2.1.0
* Template URL: https://bootstrapmade.com/enno-free-simple-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

   $("form[id='contact-us']").validate({
          rules: {
            your_name: {
              required: true,
              specialcharactercheck: true,
			  lettersonly: true
            },
            email: {
              required: true,
			  email: true
            },
            tell_us: {
              required: true
            }
          },
          messages: {
			your_name: {
              required: "Please enter your Name",
			  specialcharactercheck: "Special characters not allowed",
			  lettersonly: "Accept only letters and spaces"
            },
            email: {
				required:"Please enter a valid email address"
			},
			tell_us: {
              required: "Please enter a message"
            },
          },
          
        }); 
		
		 $.validator.methods.email = function( value, element ) {
          return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
        }
		$.validator.methods.specialcharactercheck = function( value, element ) {
          return this.optional( element ) || /^[a-zA-Z0-9 ]+$/.test( value );
        }
		$.validator.methods.lettersonly = function( value, element ) {
          return this.optional( element ) || /^[a-z ]+$/i.test( value );
        }

})(jQuery);