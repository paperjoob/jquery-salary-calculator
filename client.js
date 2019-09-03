$(document).ready(readyNow);

const allEmployees = [
    {
        firstName: 'Jen', 
        lastName: 'Barber', 
        id: 4521, 
        title: 'Team Lead', 
        annualSalary: 80000
    },
    {
        firstName: 'Maurice', 
        lastName: 'Moss', 
        id: 8724, 
        title: 'Support Team', 
        annualSalary: 58000
    },
    {
        firstName: 'Roy', 
        lastName: 'Smith', 
        id: 9623, 
        title: 'Quality Assurance', 
        annualSalary: 48000
    }
];

function readyNow() {
    appendDom();
    addMonthlyCosts();
    $('#submitButton').on('click', handleSubmit);
}

function appendDom() {
    console.log('in appendDom');
    $('#tableBody').empty();
    let table = $('#empTable');
    table.empty();
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th>Delete</th></thead>');
    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);
    $('.employeeTable').append(table);

    allEmployees.forEach(function(employee) {
        let empName = $(`<tr><td>` + employee.firstName + `<td> ` + employee.lastName  + ` <td>` + employee.id + `<td>` + employee.title  + ` <td> ` + '$' + employee.annualSalary  +  `<td>` + `<button class="deleteButton">Delete</button>` + `<td></tr>`);
        $('#tableBody').append(empName);
    })
    $('.deleteButton').on('click', deleteEmp); // delete the parent's parent of the deleteButton
}

function handleSubmit() {
    let firstNameVal = $('#firstNameIn').val();
    let lastNameVal = $('#lastNameIn').val();
    let idInVal = $('#idIn').val();
    let titleInVal = $('#titleIn').val();
    let annualSalaryInVal= $('#annualSalaryIn').val();

    let newEmployee = {
        firstName: firstNameVal, // assign firstname to the value of the firstName
        lastName: lastNameVal,
        id: idInVal,
        title: titleInVal,
        annualSalary: annualSalaryInVal
    } // end newEmployee constructor
    allEmployees.push(newEmployee); // push new employees into allEmployees array
    $('#firstNameIn').val(''); // clears out input field after submission
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
    addMonthlyCosts();
    appendDom();
} // end handleSubmit

function addMonthlyCosts() {
    console.log('in addMonthlyCosts');
    let totalMonthlySpend = 0;
    for (employee of allEmployees) {
        totalMonthlySpend += employee.annualSalary / 12;
    } // end for loop
    let totalEl = $('#totalMonthlyOut');
    totalEl.empty();
    totalEl.append(totalMonthlySpend);
    $('#totalMonthlyOut').html(totalMonthlySpend);

    if (totalMonthlySpend > 20000){
        $('#totalMonthlyOut').addClass('red');
    } else {
        $('#totalMonthlyOut').removeClass('red');
    } // end if more than 20,000
}

function deleteEmp() {
    console.log('in deleteEmp');
    $(this).parent().parent().remove();
    allEmployees.splice(employee, 1)//access employee and remove 1 object in the array
    addMonthlyCosts();
} // end deleteEmp
