function getZipcode(zipcode) {
  console.log(zipcode);

  $('#modal--zipcode').val(zipcode); // id
  $('[name="customRadio"]').val(); // value of my radio group
}

function submitForm(zipcode, email) {
  console.log(zipcode, email);
  console.log(email);
}

$(document).ready(function() {
   // Event Handlers
   $('#go-btn').click(function(){
     var zipcode = $('#zipcode').val();
     var email = $('[name="email"]').val();

     getZipcode(zipcode);
   });

   $('#submit-btn').click(function(){
     var zipcode = $('#zipcode').val();
     var email = $('[name="email"]').val();

     submitForm(zipcode, email);
   });
});
