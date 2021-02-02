import { orderCardsHand,
  orderFacesHand,
  checkStraight,
  findDuplicate,
  removeDuplicatedCards } from "../handHelper";

// S(pades), H(earts), D(iamonds), C(lubs)

describe('handHelper', () => {
  describe('orderCardsHand', () => {
    it('should return ordered hand array', () => {
      const orderedHand = orderCardsHand("AH 2H 3H 4H 5H");
      expect(orderedHand[0]).toBe("2");
    });
    it('should return ordered hand array with jack before ace', () => {
      const orderedHand = orderCardsHand("AD 2S JH 4D 5H");
      expect(orderedHand[2]).toBe("5");
      expect(orderedHand[3]).toBe("J");
      expect(orderedHand[4]).toBe("A");
    });
  });
  describe('facesOrder', () => {
    it('return ordered Faces of cards', () => {
      const orderedHand = orderFacesHand("AH 2H JD 4H 5H");
      expect(orderedHand[3]).toBe("H");
      const anotherOrder = orderFacesHand("AD 2H JD 4S 5S");
      expect(anotherOrder[4]).toBe("S");
    })
  });
  describe('findDuplicate', () => {
    it('should find 1 duplicate of 2 similar element', () => {
      const duplicate2 = findDuplicate(orderCardsHand("2H AD 3S 5H JD"));
      expect(Array.isArray(Object.entries(duplicate2))).toBe(true);
      const duplicate = findDuplicate(orderCardsHand("2H 2D 3S 3H JD"));
      expect(Object.entries(duplicate)[0]).toEqual(['2', 2])
      expect(Object.entries(duplicate)[1]).toEqual(['3', 2])
      const tris = findDuplicate(orderCardsHand("2H AD JS JH JD"));
      expect(Object.entries(tris)[1]).toEqual(['J', 3])
    });
  });
  describe('checkStraight', () => {
    it('should return true if is a straight', () => {
      expect(checkStraight(orderCardsHand("2D 3D 4S 5D 6S"))).toBe(true);
      expect(checkStraight(orderCardsHand("4D 3D 7S 5D 6S"))).toBe(true);
    });
    it('should return false if not a straight', () => {
      expect(checkStraight(orderCardsHand("2D 3D 4S 4D 6S"))).toBe(false);
    });
  });
  describe('removeDuplicatedCards', () => {
    it('remove Q card from hand', () => {
      const leftHand = removeDuplicatedCards('Q', orderCardsHand("QD 3D QS 4D QC"));
      expect(leftHand).toEqual(["3", "4"]);
    })
  });
});
