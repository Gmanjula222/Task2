document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');
    const historyList = document.getElementById('historyList');

    const history = [];

    function normalizeInput(str) {
        return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    }

    function isPalindrome(str) {
        const normalized = normalizeInput(str);
        const reversed = normalized.split('').reverse().join('');
        return normalized === reversed;
    }

    function updateHistory(input, isPalin) {
        const listItem = document.createElement('li');
        listItem.textContent = `"${input}" is ${isPalin ? '' : 'not '}a palindrome.`;
        historyList.prepend(listItem);
    }

    checkButton.addEventListener('click', () => {
        const userInput = inputText.value.trim();
        if (userInput === '') {
            resultDiv.textContent = 'Please enter a value.';
            resultDiv.style.color = 'orange';
            return;
        }

        const palindromeResult = isPalindrome(userInput);
        resultDiv.textContent = palindromeResult ?
            `"${userInput}" is a palindrome!` :
            `"${userInput}" is not a palindrome.`;
        resultDiv.style.color = palindromeResult ? 'green' : 'red';

        history.push({ input: userInput, result: palindromeResult });
        updateHistory(userInput, palindromeResult);

        inputText.value = '';
    });
});