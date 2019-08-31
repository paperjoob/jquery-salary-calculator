$(document).ready(readyNow);

const allEmployees = [
    {
        firstName: 'Jen', 
        lastName: 'Barber', 
        id: 4521, 
        title: 'Team Lead', 
        annualSalary: `$80,000`
    },
    {
        firstName: 'Maurice', 
        lastName: 'Moss', 
        id: 8724, 
        title: 'Support Team', 
        annualSalary: `$58,000`
    },
    {
        firstName: 'Roy', 
        lastName: 'Smith', 
        id: 9623, 
        title: 'Quality Assurance', 
        annualSalary: `$48,000`
    }
];

function readyNow() {
    appendDom();
    console.log('in ReadyNow');
    $('#submitButton').on('click', handleSubmit);
}

function appendDom() {
    console.log('in appendDom');
    $('#empTable').empty();
    $('#tableBody').empty();

    let table = $(`<table id='empTable'></table>`);
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th>Delete</th></thead>');

    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);

    $('.employeeTable').append(table);

    allEmployees.forEach(function(employee) {
        let empName = $(`<tr><td>` + employee.firstName + `<td> ` + employee.lastName  + ` <td>` + employee.id + `<td>` + employee.title  + ` <td> ` + employee.annualSalary  +  `<td>` + `<button class=deleteButton'>Delete</button>` + `<td></tr>`);
        $('#tableBody').append(empName );
    })
}

function handleSubmit() {
    let firstNameVal = $('#firstNameIn').val();
    let lastNameVal = $('#lastNameIn').val();
    let idInVal = $('#idIn').val();
    let titleInVal = $('#titleIn').val();
    let annualSalaryInVal= $('#annualSalaryIn').val();

    let newEmployee = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        id: idInVal,
        title: titleInVal,
        annualSalary: annualSalaryInVal
    }

    allEmployees.push(newEmployee);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleValIn').val('');
    $('#annualSalaryIn').val('');
    appendDom();
}

