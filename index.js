// Code your solutions in this file
function writeCards(array, event){
    const message = [];
    for (let i = 0; i < array.length; i++) {
        message.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

function countDown(num){
    let count = num;
    while(count >= 0){
        console.log(count);
        count--;
    }
}