import { testProp, fc } from 'ava-fast-check'
import { expect } from 'chai'

/**
 * Library under test
 */

import { inplaceRemoveDuplicatesFromSorted } from '../src/remove-duplicates-from-sorted'


testProp(
    'Should be idempotent',
    [fc.array(fc.integer())],
    (xs) => {
        const input = xs.sort((x, y) => x - y)
        const culled = inplaceRemoveDuplicatesFromSorted(input)
        expect(culled).to.deep.equal(inplaceRemoveDuplicatesFromSorted(culled))
    }
)

testProp(
    'Should not add any elements',
    [fc.array(fc.integer())],
    (xs) => {
        const input = xs.sort((x, y) => x - y)
        const culled = inplaceRemoveDuplicatesFromSorted(input)
        for (const element of culled) {
            expect(input).to.include(element)
        }
    }
)

testProp(
    'Should return ordered list',
    [fc.array(fc.integer())],
    (xs) => {
        const input = xs.sort((x, y) => x - y)
        const culled = inplaceRemoveDuplicatesFromSorted(input)
        culled.forEach((_, index, self) => {
            if (index + 1 === self.length) { return }
            expect(self[index]).to.be.below(self[index+1])
        })
    }
)

testProp(
    'Should return list without duplicates',
    [fc.array(fc.integer())],
    (xs) => {
        const input = [...xs, ...xs].sort((x, y) => x - y)
        const culled = inplaceRemoveDuplicatesFromSorted(input)
        culled.forEach((element, index, self) => {
            expect(self.indexOf(element)).to.equal(index)
        })
    }
)
