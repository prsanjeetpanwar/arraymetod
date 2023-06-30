"use strict";

var fs = require('fs');

function createCSV(data) {
  var csv = '';
  var headers = Object.keys(data[0]);
  csv += headers.join(',') + '\n';
  data.forEach(function (row) {
    var values = Object.values(row);
    var formattedValues = values.map(function (value) {
      return "\"".concat(value, "\"");
    });
    csv += formattedValues.join(',') + '\n';
  });
  return csv;
}

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#myForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var data = {
      name: formData.get('name'),
      email: formData.get('email'),
      age: formData.get('age')
    };
    var csvData = createCSV([data]);
    fs.writeFile('data.csv', csvData, function (err) {
      if (err) {
        console.error(err);
        return;
      }

      console.log('CSV file saved successfully.');
    });
  });
});