$(document).ready(function() {

    $('#myForm').validate({
        rules:{
            name:'required',
            email:{
                required:true,
                email:true
             },
             age:{
                 required:true,
                 minlength:2,
                 greaterThan:true,
             },
             password:{
                required:true,
                minlength:6,
             },
             confirmPassword:{
                 required:true,
                 minlength:6,
                 equalTo: "#password"
             },
             movieLike:{
                required:true
             }
            //  ,
            //  receiveMails:{
            //     required:true 
            //  }
        },
        messages:{
            name: 'You have to enter a name',
            email:{
                required:'your adress mail is missing',
                email: 'Please enter a valid email'
            },
            age:{
                required:'Please confirm your age',
                greaterThan:'You need to be older than 13 years old'
            },
            confirmPassword:{
                required:'Please provide a password',
                minlength:'Your password must be at Least 6 characters',
                equalTo: "Please enter the same password as above"
            }
        
        },
        errorPlacement: function (error, element){
            $(element).before(error)
        },
        errorElement:'div', /* the error elm would be a div==> appear under the label and not in line if there is no this option */
    })


    // Create own custom method to verify age >13
    $.validator.addMethod('greaterThan', function(value, elemnt, param){
        return value > 13 ? true : false
    })




  })



//   cacher le bouton submit lorsque lutilisateur a
//    réussi a envoyer des informations valides et que 
//    le formulaire validé est envoyé


//   rules:{
//     ...
// },
// submitHandler: function(form)
// {
//     /* CACHER LE BOUTON */
//     jQuery("#btn_submit").hide();
// }


// ******************************

// errorPlacement: function(error, element) 
//         {
//             if ( element.is(":radio") ) 
//             {
//                 error.appendTo( element.parents('.container') );
//             }
//             else 
//             { // This is the default behavior 
//                 error.insertAfter( element );
//             }
//          }
//       });
    