const busTicket = 800;
const age = 8;

if (age < 10){
    console.log('Under Age Your bus Ticket is Free')
}
else if (age < 18){
    const discount = busTicket * 50 / 100;
    console.log('Student You Have to Pay', discount , 'Taka');
}
else if (age >= 60){
    const discounts = busTicket * 15 / 100;
    const newBalance = busTicket - discounts;
    console.log('Senior Citizen You Have to Pay', newBalance, 'Taka');
}
else (
    console.log('You Have to pay', busTicket, 'Taka')
)