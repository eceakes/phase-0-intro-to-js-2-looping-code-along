const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


const names = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}
writeCards(names);
console.log(writeCards(cards));

function countDown() {
    for (let countDown = 10; countDown > -1; countDown--) {
        console.log(countDown);
    }
}