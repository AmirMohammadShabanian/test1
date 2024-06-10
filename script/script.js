document.getElementById('button').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const selectedOption = document.getElementById('listBox').value;
    alert(`متن وارد شده: ${inputText}\nگزینه انتخاب شده: ${selectedOption}`);
});
