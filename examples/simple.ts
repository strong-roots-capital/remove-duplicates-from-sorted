import { inplaceRemoveDuplicatesFromSorted } from '../src/remove-duplicates-from-sorted'
import randomInt from 'random-int'

const list = Array(10).fill(100).map(randomInt)
const listWithDuplicates = [...list, ...list].sort()

console.log(listWithDuplicates)
//=>[ 14, 14, 17, 17, 30, 30, 4, 4, 41, 41, 69, 69, 89, 89, 90, 90, 93, 93, 97, 97 ]

console.log(inplaceRemoveDuplicatesFromSorted(listWithDuplicates))
//=>[ 14, 17, 30, 4, 41, 69, 89, 90, 93, 97 ]
