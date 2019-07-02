var numbersBase = ['380631111111', '380952222222', '380993333333', '380684444444'];

document.getElementById('order_form').addEventListener('submit', function(event){

    event.preventDefault();

    var numberRaw = document.getElementById('phone').value;
    var number = numberRaw.match(/\d/g).join("");
    
    if(isInBase(number))    
    {
        location.href="https://google.com";
    }
    else
    {
        this.submit();
    }

});

function isInBase(number)
{
    return numbersBase.includes(number);
}