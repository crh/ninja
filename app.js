$(document).ready(function(){
    var REST_URI = 'http://141.66.8.240:8081/aas/organizations';
    var xhr = $.ajax({
      url: REST_URI,
      dataType: 'json'
    })
    .done(function(data) {
      console.log('data: ', data);
      $('#aas').append('success');
    })
    .error(function(data) {
      console.log('error: ', data);
      $('#aas').append(data.statusText + '\n');
    })
    .always(function(data) {
      console.log('finsihed: ', data);
    });

//    var REST_URI = 'https://api.github.com';
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
