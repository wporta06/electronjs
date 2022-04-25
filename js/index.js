const database = require('./js/database');
const control =require('../js/control')

window.onload = function() {

  populateTable();

  
  document.getElementById('add').addEventListener('click', () => {

   
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');

    // Saveto database
    // database.addPerson(firstname.value, lastname.value);
    control.add(firstname.value, lastname.value);

    // Reset the input fields
    firstname.value = '';
    lastname.value = '';

   
    populateTable();
  });
}


function populateTable() {

  // get all users
  database.getPersons(function(persons) {

    // generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].firstname + '</td>';
      tableBody += '  <td>' + persons[i].lastname + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// delete
function deletePerson(id) {

 
  database.deletePerson(id);

  
  populateTable();
}
