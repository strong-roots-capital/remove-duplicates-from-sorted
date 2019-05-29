# remove-duplicates-from-sorted [![Build status](https://travis-ci.org/strong-roots-capital/remove-duplicates-from-sorted.svg?branch=master)](https://travis-ci.org/strong-roots-capital/remove-duplicates-from-sorted) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/remove-duplicates-from-sorted.svg)](https://npmjs.org/package/@strong-roots-capital/remove-duplicates-from-sorted) [![codecov](https://codecov.io/gh/strong-roots-capital/remove-duplicates-from-sorted/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/remove-duplicates-from-sorted)

> Remove duplicates from sorted list in-place


This code modifies shared data. To minimize the chance of unexpected
behavior, [fast-check] is used for Property-Based Testing of key
invariants:

- this function should be idempotent
- this function should not add any elements to the given list
- this function should preserve ordering of the given list
- this function should return the given list without any duplicates

## Install

```shell
npm install @strong-roots-capital/remove-duplicates-from-sorted
```

## Use

```typescript
import { removeDuplicatesFromSorted } from '@strong-roots-capital/remove-duplicates-from-sorted'
import randomInt from 'random-int'

const list = Array(10).fill(100).map(randomInt)
const listWithDuplicates = [...list, ...list].sort((x: number, y: number) => x - y)

console.log(listWithDuplicates)
//=>[ 23, 23, 45, 45, 63, 63, 66, 66, 74, 74, 78, 78, 85, 85, 90, 90, 92, 92, 99, 99 ]

console.log(inplaceRemoveDuplicatesFromSorted(listWithDuplicates))
//=>[ 24, 45, 63, 66, 74, 78, 85, 90, 92, 99 ]
```

## Acknowledgments

- [fast-check]

[fast-check]: https://github.com/dubzzz/fast-check
