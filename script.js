function getZipcode(zipcode) {
  console.log(zipcode);

  $('#modal--zipcode').val(zipcode); // id
  $('[name="customRadio"]').val(); // value of my radio group
  $('[name="customRadio"]').val();
}

function submitForm(email, zipcode, phone, type, frequency, notes, newsletter) {
  console.log(email);
  console.log(zipcode);
  console.log(phone);
  console.log(type);
  console.log(frequency);
  console.log(notes);
  console.log(newsletter);
}

$(document).ready(function() {
   // Event Handlers
   $('#go-btn').click(function(){
     var zipcode = $('#zipcode').val();
     var email = $('[name="email"]').val();

     getZipcode(zipcode);
   });

   $('#submit-btn').click(function(){
     // Email
     var email = $('[name="email"]').val();
     // zipcode
     var zipcode = $('[name="zipcode"]').val();
     // phone
     var phone = $('[name="phone"]').val();
     // pickup type
     var type = $('[name="type"]').val();
     // frequency
     var frequency = $('[name="frequency"]').val();
     // Notes
     var notes = $('[name="notes"]').val();
     // newsletter
     var newsletter = $('[name="newsletter"]').val();

     submitForm(email, zipcode, phone, type, frequency, notes, newsletter);
   });
});
