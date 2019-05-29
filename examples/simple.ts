import { inplaceRemoveDuplicatesFromSorted } from '../src/remove-duplicates-from-sorted'
import randomInt from 'random-int'

const list = Array(10).fill(100).map(randomInt)
const listWithDuplicates = [...list, ...list].sort((x: number, y: number) => x - y)

console.log(listWithDuplicates)
//=>[ 23, 23, 45, 45, 63, 63, 66, 66, 74, 74, 78, 78, 85, 85, 90, 90, 92, 92, 99, 99 ]

console.log(inplaceRemoveDuplicatesFromSorted(listWithDuplicates))
//=>[ 24, 45, 63, 66, 74, 78, 85, 90, 92, 99 ]
