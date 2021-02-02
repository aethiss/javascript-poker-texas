# **Poker Hand Comparison**

Poker Hand Comparison is a little program that will compare two hands of poker according to the rules of [Texas Hold'em rules](https://en.wikipedia.org/wiki/Texas_hold_%27em#Hand_values).

## Requirements

The characteristics of the string of cards are:
* A space is used as card seperator
* Each card consists of two characters (not case sensitive)
* The first character is the value of the card, valid characters are: `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `T`(en), `J`(ack), `Q`(ueen), `K`(ing), `A`(ce)
* The second character represents the suit, valid characters are: `S`(pades), `H`(earts), `D`(iamonds), `C`(lubs)

The result of your poker hand compare can be one of these 3 options:
* WIN should return the integer `1`
* LOSS should return the integer `2`
* TIE should return the integer `3`

You are free to use any libraries you want but please do not anything that already evaluates poker hands ;)

Good luck!


## Enzo Test Solution

`If you have 1 pound, and you play this pound with poker, one day, when you will have 1 million, you will play 1 million.`
`So, the best is don't play ! (Enzo Dad) ! :P`

I'm not a poker player. I read the texas poker rules (seems similar to the italian poker, we just use more card).
Based on the poker rules, I started to understand all the possibility of victory/loss/tie. 

I split the different hands into `winConditionRank`. Each rank, from the first (1) to the last (9), is a different possibility to make a score with poker.
In case of draft, I read from the rules, the victory goes to the highest point, or to the highest card in hand.

For That reason I start to create some helper function who can help to simplify the computational complexity, like order the card value and the card face.

The functions who help on that are on `handHelper` file. (for example, order the cards, help easy to check if is a straight, or poker or flush)

The functionality who decide the ranks (and the other hand values), are on `ranksHelper` file, managed by `winConditionRank`.

## Code Testing

Understanding what was needed for the test, I follow the TDD principle, writing the unit tests I need in order to make sure every function return what is expected.

When the Helpers function's was done, was not difficult optimise all the complexity, in order to avoid parsing multiple time the hand/card array.

- `handHelper.test` (first)
- `ranksHelper.test` (make sure the rank object was the expected)
- `PokerHand.test` (add more test in order to cover several examples of poker play)

## Conclusion

I miss something ? Maybe yes, I'm not a poker expert, please ask me on face to face interview ;)
