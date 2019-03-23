function getZipcode(zipcode) {
  console.log(zipcode);

  $('#modal--zipcode').val(zipcode); // <input id="modal--zipcode" />
}

function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  // Open Google Sheet > Tools > Script Editor > Publish > Deploy as web app...
  var url = 'https://script.google.com/...';

  // ajax documentation:  https://api.jquery.com/jQuery.ajax/
  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}

$(document).ready(function() {
   // Event Handlers
   $('#form--quote').submit(function(e){
     e.preventDefault(); // prevents the browser from reloading

     formSubmit(e.currentTarget.name);
   });

   $('#go-btn').click(function(){
     var zipcode = $('#zipcode').val();

     getZipcode(zipcode);
   });
});
