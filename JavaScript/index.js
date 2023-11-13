document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('space');

    function appendToInput(value) {
        inputField.value += value;
    }

    function clearInput() {
        inputField.value = '';
    }

    function calculate() {
        try {
            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = 'Error';
        }
    }

    document.getElementById('btnClear').addEventListener('click', clearInput);

    for (var i = 1; i <= 9; i++) {
        document.getElementById('btn' + i).addEventListener('click', function () {
            appendToInput(this.textContent);
        });
    }

    document.getElementById('btnMultiply').addEventListener('click', function () {
        appendToInput('*');
    });

    document.getElementById('btnAdd').addEventListener('click', function () {
        appendToInput('+');
    });

    document.getElementById('btnSubtract').addEventListener('click', function () {
        appendToInput('-');
    });

    document.getElementById('btnZERO').addEventListener('click', function () {
        appendToInput('0');
    });

    document.getElementById('decimal').addEventListener('click', function () {
        if (!inputField.value.includes('.')) {
            appendToInput('.');
        }
    });

    document.getElementById('btnEqual').addEventListener('click', calculate);

    document.getElementById('btnDVD').addEventListener('click', function () {
        appendToInput('/');
    });
});