const sum = (a: number, b: number): number => {
    return a + b;
};

describe('Sample', () => {
    it('sum', () => {
        expect(sum(1, 2)).toEqual(3);
        expect(sum(2, 3)).toEqual(5);
        expect(sum(3, 10)).toEqual(13);
    });
});
