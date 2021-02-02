import { winConditionRank } from "../ranksHelper";

// S(pades), H(earts), D(iamonds), C(lubs)

const royalHand = "6H 2H 3H 4H 5H";
const flushHand = "8H 2H 3H 9H AH";
const pokerHand = "2S 2H 2D 2C 4H";
const pokerHand2 = "5S 5H 5D 5C 4H";
const straightHand = "4D 5S 6S 7H 8S";
const trisHand = "QD QS QH 4C 2C";
const doublePairHand = "QD 3S QH 3C 2C";
const pairHand = "QD 3S QH 4C 2C";
const fullHand = "QD QS 2H QC 2C";
const nothigHand = "QD, JS, AC, 2C, 3C";

describe('ranksHelper', () => {
  describe('winConditionRank', () => {
    it('return rank 1 if royal flush', () => {
      expect(winConditionRank(royalHand)).toMatchObject({
        highRank: 4, highValue: 4, rank: 1
      })
    });
    it('return rank 2 if poker', () => {
      expect(winConditionRank(pokerHand)).toMatchObject({
        highRank: 0, highValue: 2, rank: 2,
      });
      expect(winConditionRank(pokerHand2)).toMatchObject({
        highRank: 3, highValue: 3, rank: 2,
      });
    });
    it('return rank 3 if is full', () => {
      expect(winConditionRank(fullHand)).toMatchObject({
        rank: 3, highRank: 10, highValue: 0
      });
    });
    it('return rank 4 if is flush', () => {
      expect(winConditionRank(flushHand)).toMatchObject({
        rank: 4, highRank: 12, highValue: 12,
      });
    });
    it('return rank 5 if is normal straight', () => {
      expect(winConditionRank(straightHand)).toMatchObject({
        rank: 5, highRank: 6, highValue: 6,
      });
    });
    it('return rank 6 if is tris', () => {
      expect(winConditionRank(trisHand)).toMatchObject({
        rank: 6, highRank: 10, highValue: 2,
      });
      expect(winConditionRank(pairHand)).not.toMatchObject({
        rank: 6, highRank: 10, highValue: 2,
      });
    });
    it('return rank 7 if double pair', () => {
      expect(winConditionRank(doublePairHand)).toMatchObject({
        rank: 7, highRank: 10, highValue: 0,
      });
    });
    it('return rank 8 if is pair', () => {
      expect(winConditionRank(pairHand)).toMatchObject({
        rank: 8, highRank: 10, highValue: 2,
      });
    });
    it('return rank 9 if is nothing', () => {
      expect(winConditionRank(nothigHand)).toMatchObject({
        rank: 9, highRank: 12, highValue: 12,
      });
    });
  });
});
