var AAS_URI = 'http://141.66.8.240:8081/aas/persons/';
var snoopy;

$(document).ready(function() {
  getCurrentUser();
});

var getCurrentUser = function() {
  $.ajax({
    type: 'GET',
    url: AAS_URI + 'current',
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    },
    username: 'admin',
    password: 'admin',
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
    $('.message').text('You are logged in as: ' + data.id);
    $('.message').append('<div>Getting person with the username snoopy...</div>');
    findPersonById('snoopy');
  })
  .always(function(jqXHR) {
    console.log('get current user is finished', jqXHR);

    if (jqXHR.readyState === 0 && jqXHR.status === 0) {
      $('.message')
      .text('You are not logged in. ')
      .append('<a href="http://141.66.8.240:8081/aas/persons/current">Login</a>')
      .append(' and click the back button to return to this page.');
    }
  });
};

var findPersonById = function(id) {
  $.ajax({
    type: 'GET',
    url: AAS_URI + id,
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    },
    username: 'admin',
    password: 'admin',
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
    $('.message').append('<div>' + JSON.stringify(data) + '</div>');
    $('.message').append('<div>Updating snoopy...</div>');
    data.title = 'msc';
    console.log(data.title);
    updatePerson(data);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log('error: ', textStatus);
    console.log(jqXHR);
    $('#aas').append(jqXHR.statusText + '\n');
  })
  .always(function(jqXHR) {
    console.log('Find person by id finished: ', jqXHR);
  });
};

var updatePerson = function(data) {
  $.ajax({
    type: 'PUT',
    url: AAS_URI + data.id,
    data: data,
    contentType: 'application/json',
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    }
  })
  .done(function(data) {
    console.log('done. ', data);
    $('.message').append('<div>' + data.id + ' is updated</div>');
    $('.message').append('<div>' + JSON.stringify(data) + '</div>');
  })
  .always(function(jqXHR) {
    console.log('Send PUT Request is finished: ', jqXHR);
  });
};

var getGithubRequest = function() {
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
};
