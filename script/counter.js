var btnmax = document.querySelector('.max');
var btnmin = document.querySelector('.min');
var Counter = document.querySelector('.counter');
var sav = document.querySelector('#save');
var CounterValue = 1;

btnmax.addEventListener('click', CounterMax);
btnmin.addEventListener('click', CounterMin);

function CounterMax() {
    //console.log(productCounterValue);
    setProductCounter(1);
}
function CounterMin() {
    setProductCounter(-1);
}
function setProductCounter(value) {
    if ((CounterValue + value) > 0) {
        CounterValue += value;
        Counter.innerHTML = CounterValue;
    }
}
function conti(){
    window.alert('Validation Succeeds')
}