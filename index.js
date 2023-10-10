/*
    MAKING A SHOPPING APPLICATION

    * get the name of a customer
    * see how many flight tickets, hotel nights, and adventures/outings they want to buy
    * 
    * check if there's a discount (the customer should put in a code; if that code fails they don't get the discount)
    * Discount code: when you buy three items, you get 50% off (of those three items)
    * Apply a tax and show us the total and subtotal
    * 
    * use conditionals, confirm/prompt/alert, arethmetic, and assign your variables
    
*/


let name = "Bob";
let tickets = 2;
let hotelNights = 4;
let outings = 3;

let ticketPrice = 150;
let hotelNightPrice = 275;
let outingsPrice = 143;

let discountCode = "code50";

console.log(name);
console.log(ticketPrice)

totalTicket = tickets*ticketPrice;
totalNights = hotelNights*hotelNightPrice;
totalOutings = outings*outingsPrice;

if(tickets >= 3 && dicsountCode === "code50"){
    totalTickets = totalTickets*.5;
    console.log(totalTickets);
}

if(hotelNights >= 3 && dicsountCode === "code50"){
    totalNights = totalNights*.5;
    console.log(totalNights);
}

if(outings >= 3 && dicsountCode === "code50"){
    totalOuts = totalNights*.5;
    console.log(totalNights);
}

