/**
 * remove-duplicates-from-sorted
 * Remove duplicates from sorted list in-place
 */

import deepEqual from 'fast-deep-equal'


/**
 * Remove duplicates from a sorted list.
 *
 * @remarks
 * - this function modifies `list` in-place
 * - this functions requires a sorted array as input
 *
 * @param list - List from which to cull duplicates
 * @returns - Same list without any duplicates
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function inplaceRemoveDuplicatesFromSorted<T = any>(list: T[]): T[] {
    let i = 0
    while (i < list.length - 1) {
        while (deepEqual(list[i], list[i+1])) {
            list.splice(i+1, 1)
        }
        i += 1
    }
    return list
}
