//oddiy obyekt array ichida ochildi
const pizzaOrders = [
  { id: 1, type: "pepperoni", size: "large", cookTime: 1500 },
  { id: 2, type: "chicken", size: "medium", cookTime: 2000 },
  { id: 3, type: "cheese", size: "small", cookTime: 1000 },
  { id: 4, type: "ground beef", size: "large", cookTime: 2500 },
  { id: 5, type: "double cheese", size: "medium", cookTime: 1700 },
];

//pizza narxni hisoblayapti, men har bir pizza kamida pishloqli va default size small bogani uchun hech qanaqa narx pricega qoshilmayapti
function calPrice(order) {
  let price = 10000;
  if (order.type === "pepperoni") price += 5000;
  else if (order.type === "chicken") price += 6000;
  //cheese ozi har doim tekin qoshladi
  else if (order.type === "ground beef") price += 4000;
  else if (order.type === "double cheese") price += 3000;

  //small ozi asosy narxda bor
  if (order.size === "medium") price += 2000;
  else if (order.size === "large") price += 3000;

  return price;
}

//pastdagi callback yordamida price ni olyapti va buyurtmani oxirida ekranga pishdi deb chiqaryapti
function pizzaReadyCallback(order, price) {
  console.log(
    `pizza #${order.id} ${order.size} ${order.type} is ready, price => ${price}`
  );
}

//callback bn toliq narxni totalPrice ozgaruvchisi bilan pizzaReadyCallbackga jonatyapti
// va orasida 2 sekund pishishi uchun vaqt qoldiryapti
function orderPizza(order, callback) {
  console.log(
    `Pizza #${order.id} (${order.type}, ${order.size}) order received, it's cooking...`
  );

  //cooktimedan sekundlarni olib pizzaga qarab qoyadi
  setTimeout(() => {
    let totalPrice = calPrice(order);
    callback(order, totalPrice);
  }, order.cookTime);
}

//foreach loopda aylanib har bitta orderni olyapti
pizzaOrders.forEach((order) => {
  orderPizza(order, pizzaReadyCallback);
});
