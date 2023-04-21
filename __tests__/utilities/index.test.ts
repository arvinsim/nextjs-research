import {sampleUtilityFunction} from "../../utilities";

describe('utilities', () => {
    describe('sampleUtilityFunction', () => {
        it('returns abc', () => {
            expect(sampleUtilityFunction('a', 1, true)).toEqual('abc');
        })
    })
})
