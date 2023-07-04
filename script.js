function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        var calculatedResult = eval(result);
        document.getElementById('result').value = calculatedResult;
    } catch (error) {
        alert('Invalid input!');
    }
}
