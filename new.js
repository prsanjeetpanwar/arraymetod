const fs = require('fs');

function createCSV(data) {
  let csv = '';

  const headers = Object.keys(data[0]);
  csv += headers.join(',') + '\n';

  data.forEach((row) => {
    const values = Object.values(row);
    const formattedValues = values.map((value) => `"${value}"`);
    csv += formattedValues.join(',') + '\n';
  });

  return csv;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#myForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      age: formData.get('age')
    };

    const csvData = createCSV([data]);

    fs.writeFile('data.csv', csvData, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('CSV file saved successfully.');
    });
  });
});
