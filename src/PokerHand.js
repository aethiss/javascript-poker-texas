import { winConditionRank } from "./helper/ranksHelper";

export class PokerHand {
	constructor(hand) {
		this.winConditionRank = winConditionRank(hand);
	}

	compareWith(opponentHand) {
		// check Rank
		if (this.winConditionRank.rank < opponentHand.winConditionRank.rank) {
			return Result.WIN;
		} else if (this.winConditionRank.rank > opponentHand.winConditionRank.rank) {
			return Result.LOSS;
		// If both hand have the same rank, check best rank value
		} else {
			if (this.winConditionRank.highRank > opponentHand.winConditionRank.highRank) {
				return Result.WIN;
			} else if (this.winConditionRank.highRank < opponentHand.winConditionRank.highRank) {
				return Result.LOSS;
			// If same Rank Value, check the highest card value
			} else {
				if (this.winConditionRank.highValue > opponentHand.winConditionRank.highValue) {
					return Result.WIN;
				} else if (this.winConditionRank.highValue < opponentHand.winConditionRank.highValue) {
					return Result.LOSS;
				} else {
					return Result.TIE;
				}
			}
		}
	}

}

export const Result = {
	WIN: 1,
	LOSS: 2,
	TIE: 3
};

export default PokerHand;
