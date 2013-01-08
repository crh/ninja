$(document).ready(function() {
    var AAS_URI = 'http://141.66.8.240:8081/aas/persons/';
    var snoopy;

    $.ajax({
      type: 'GET',
      url: AAS_URI + 'snoopy',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      statusCode: {
        404: function() {
          console.log('page not found.');
        },
        401: function() {
          console.log('unauthorized.');
        }
      }
    })
    .done(function(data) {
      console.log('data: ', data);
      snoopy = data;
      $('#aas').append('GET snoopy is successful');
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('error: ', errorThrown);
      console.log(jqXHR);
      $('#aas').append(jqXHR.statusText + '\n');
      if (jqXHR.readyState === 0 && jqXHR.status === 0) {
        window.open(AAS_URI);
      }
    })
    .always(function(data) {
      console.log('finsihed: ', data);
    });

    // Update snoopy
    $.ajax({
      type: 'PUT',
      url: AAS_URI + 'snoopy',
      async: false,
      data: snoopy,
      contentType: 'application/json',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      statusCode: {
        404: function() {
          console.log('page not found.');
        },
        401: function() {
          console.log('unauthorized.');
        }
      }
    })
    .done(function(data) {
      console.log('data: ', data);
      $('#aas').append('UPDATE snoopy is successful');
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('error: ', errorThrown);
      console.log(jqXHR);

      $('#aas').append(', but UPDATE snoopy failed. ');
    })
    .always(function(data) {
      console.log('finsihed: ', data);
    });

    var REST_URI = 'https://api.github.com';
    var xhr = $.ajax({
      url: REST_URI,
      dataType: 'json'
    })
    .done(function(data) {
      console.log('data: ', data);
      $('#github').append('success');
    })
    .error(function(data) {
      console.log('error: ', data);
      $('#github').append(data.statusText + '\n');
    })
    .always(function(data) {
      console.log('finsihed: ', data);
    });
});
