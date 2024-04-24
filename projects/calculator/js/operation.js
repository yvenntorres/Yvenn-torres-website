function operation(oper) {
    document.getElementById('operation-input').value = oper;

    if(document.getElementById('previous').value != 0) {
        equal();
    }
    document.getElementById('previous').value = document.getElementById('number-input').value;
    document.getElementById('number-input').value = "";
}
function equal() {
    var textbox = document.getElementById('number-input');
    var previous = document.getElementById('previous').value;

    var operation = document.getElementById('operation-input').value;

    switch(operation) {
        case '+':
            textbox.value = Number(textbox.value) + Number(previous);
            break;
        case '-':
            textbox.value = Number(previous) - Number(textbox.value);
            break;
        case '*':
            textbox.value = Number(textbox.value) * Number(previous);
            break;
        case '/':
            textbox.value = Number(previous) / Number(textbox.value);
            break;
    }
    
}