function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValueString = inputElement.value;
    const inputValue = parseFloat(inputValueString);
    inputElement.value = '';

    return inputValue;
};
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
