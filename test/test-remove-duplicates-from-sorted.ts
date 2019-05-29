/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

import test from 'ava'


/**
 * Library under test
 */

import { inplaceRemoveDuplicatesFromSorted } from '../src/remove-duplicates-from-sorted'

function unique<T = any>(list: T[]): T[] {
    return list.filter((value, index, self) => self.indexOf(value) === index)
}

/*********************************************************************
 * Test cases
 ********************************************************************/

const macro = (t: any, input: number []): void => {
    t.deepEqual(
        unique(input.sort((x: number, y: number) => x - y)),
        inplaceRemoveDuplicatesFromSorted([...input])
    )
}
macro.title = (_ = '', input: number[]) => `Expected correct output from test-list ${input}`

test(macro, [])
test(macro, [0, 1, 2, 3, 4, 5])
test(macro, [0, 1, 1, 2, 3, 4, 5])
test(macro, [0, 1, 2, 3, 4, 5, 5])
test(macro, [0, 1, 1, 1, 2, 3, 4, 5])
test(macro, [0, 1, 1, 2, 2, 3, 4, 5])
test(macro, [0, 0, 0, 0, 0, 0, 0])
test(macro, [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4])
