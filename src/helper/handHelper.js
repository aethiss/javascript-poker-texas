/**
 * The usage of indexOf for a long array's would be kind of inefficient, but we know this array is
 * 5 length, and the complexity is acceptable.
 */
const order = "23456789TJQKA"

export const orderCardsHand = (hand) => {
  const cards = hand.split(" ");
  return cards.sort((a,b) => order.indexOf(a[0]) - order.indexOf(b[0])).map(a => a[0]);
}

export const orderFacesHand = (hand) => {
  const cards = hand.split(" ");
  return cards.map(a => a[1]).sort();
}

export const findDuplicate = (cardsValuesHand) => {
  const counter = {}
  cardsValuesHand.forEach((card) => { counter[card] = (counter[card] || 0) + 1 });
  return counter;
}

export const checkStraight = (cardsValuesHand) => {
  const orderArr = order.split('');
  const first = orderArr.indexOf(cardsValuesHand[0]);
  const isGreater = (element, index) => (element === orderArr[index+first]);
  return cardsValuesHand.every(isGreater);
}

export const removeDuplicatedCards = (card, cardsValuesHand) => cardsValuesHand.filter((val) => val !== card)
