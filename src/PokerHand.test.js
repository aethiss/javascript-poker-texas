import PokerHand, { Result } from './PokerHand.js';

// S(pades), H(earts), D(iamonds), C(lubs)

describe('PokerHand', () => {
	describe('compareWith()', () => {
		it(`ties`, () => {
			const hand1 = new PokerHand('AC 4S 5S 8C AH');
			const hand2 = new PokerHand('4C 5S 8C AS AD');
			expect(hand1.compareWith(hand2)).toBe(Result.TIE);
		});
		it(`High card win`, () => {
			const hand1 = new PokerHand('2C 4S 5S 8C AH');
			const hand2 = new PokerHand('4C 5S 8C 3S QD');
			expect(hand1.compareWith(hand2)).toBe(Result.WIN);
		});
		it('poker win VS pair', () => {
			const hand1 = new PokerHand('AC AS 5S AC AH');
			const hand2 = new PokerHand('4S 5C 8C 8S AD');
			expect(hand1.compareWith(hand2)).toBe(Result.WIN);
		});
		it('flush win VS pair', () => {
			const hand1 = new PokerHand('2S AS 5S QS 9S');
			const hand2 = new PokerHand('4S 4C 8C 8S AD');
			expect(hand1.compareWith(hand2)).toBe(Result.WIN);
		});
		it('Poker loose VS Royal Flush', () => {
			const hand1 = new PokerHand('AC AS 5C AC AH');
			const hand2 = new PokerHand('2S 3S 4S 5S 6S');
			expect(hand1.compareWith(hand2)).toBe(Result.LOSS);
		});
		it('Double Pair loose VS Tris', () => {
			const hand1 = new PokerHand('QD 3S QH 3C 2C');
			const hand2 = new PokerHand('QC QS QH 4C 2C');
			expect(hand1.compareWith(hand2)).toBe(Result.LOSS);
		});
	});
});
