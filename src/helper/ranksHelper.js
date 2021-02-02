import { orderCardsHand, orderFacesHand, checkStraight, findDuplicate, removeDuplicatedCards } from "./handHelper";

const order = "23456789TJQKA"

export const winConditionRank = (hand) => {
  // Based on the Texas Poker Rules, each level(Rank) is top-down victory condition

  // This helper function order the cards value, to make efficient the complexity to check the high rank
  const orderedCardsValues = orderCardsHand(hand);
  const orderedFaces = orderFacesHand(hand);
  const duplicated = findDuplicate(orderedCardsValues);

  /* Because faces are ordered, if the first is the same to the last, is flush !! :) */
  const isFlush = orderedFaces[0] === orderedFaces[4];

 /* Because the card(hand) values is ordered, is easy find if we have 4 same values */
  const isPoker = orderedCardsValues[0] === orderedCardsValues[3] || orderedCardsValues[1] === orderedCardsValues[4];

  // Check if is linear values
  const isStraight = checkStraight(orderedCardsValues);

  // Based o duplicates values, we know if we have a tris or a pair of card
  // The combination of two, is a full (3+2)
  const isTris = Object.entries(duplicated).filter((val) => {
    return val[1] === 3;
  });
  const isDouble = Object.entries(duplicated).filter((val) => {
    return val[1] === 2;
  });


  /*
  * The Rank decide the win condition.
  * The Rank Value, is the value of the highest card on the rank (like the best tris or pair)
  * The highValue just return the high card on hand
  * */

  // 1 Royal flush (Italian : Scala Reale)
  if (isFlush && isStraight) {
    return {
      rank: 1,
      highRank: order.indexOf(orderedCardsValues[4]),
      highValue: order.indexOf(orderedCardsValues[4]),
    }
  }
  // 2 Poker (Italian: Poker, the same :P )
  else if (isPoker) {
    return {
      rank: 2,
      highRank: orderedCardsValues[0] === orderedCardsValues[3] ? order.indexOf(orderedCardsValues[3]) : order.indexOf(orderedCardsValues[4]),
      highValue: order.indexOf(orderedCardsValues[4]),
    }
  }
  // 3 Full (Italian: Full)
  else if (isTris.length && isDouble.length) {
    return {
      rank: 3,
      highRank: order.indexOf(isTris[0][0]),
      highValue: order.indexOf(isDouble[0][0]),
    }
  }
  // 4 Flush (Italian: Colore)
  else if (isFlush) {
    return {
      rank: 4,
      highRank: order.indexOf(orderedCardsValues[4]),
      highValue: order.indexOf(orderedCardsValues[4]),
    }
  }
  // 5 Straight (Italian: Scala)
  else if (isStraight) {
    return {
      rank: 5,
      highRank: order.indexOf(orderedCardsValues[4]),
      highValue: order.indexOf(orderedCardsValues[4]),
    }
  }
  // 6 Tris (i hope)
  else if (isTris.length) {
    return {
      rank: 6,
      highRank: order.indexOf(isTris[0][0]),
      highValue: order.indexOf(removeDuplicatedCards(isTris[0][0], orderedCardsValues)[1]),
    }
  }
  // 7 Double Pair (Italian: Doppia Coppia)
  else if (isDouble.length === 2) {
    let lastCard = removeDuplicatedCards(isDouble[0][0], orderedCardsValues);
    lastCard = removeDuplicatedCards(isDouble[1][0], lastCard);
    return {
      rank: 7,
      highRank: order.indexOf(isDouble[0][0]) > order.indexOf(isDouble[1][0]) ? order.indexOf(isDouble[0][0]) : order.indexOf(isDouble[1][0]),
      highValue: order.indexOf(lastCard[0]),
    }
  }
  // 8 Pair (Italian: Coppia)
  else if (isDouble.length) {
    return {
      rank: 8,
      highRank:  order.indexOf(isDouble[0][0]),
      highValue: order.indexOf(removeDuplicatedCards(isDouble[0][0], orderedCardsValues)[2]),
    }
  }
  // 9 Nothing (Italian: ##F@!!)
  return {
    rank: 9,
    highRank: order.indexOf(orderedCardsValues[4]),
    highValue: order.indexOf(orderedCardsValues[4]),
  }
}
