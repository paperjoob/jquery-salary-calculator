$(document).ready(readyNow);

function readyNow() {
    appendDom();
    console.log('hello');
}

function appendDom() {
    let header = $('<h1>Salary Calculator</h1>');
    $('.container').append(header);

    $('<p>Add Employee</p>');

}