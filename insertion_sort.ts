function insertionSort(arr: (number | string)[]) {
  let current: string | number
  let positionToInsert: number

  for (let pointer = 1; pointer < arr.length; pointer++) {
    current = arr[pointer]
    positionToInsert = pointer
    while (positionToInsert > 0 && arr[positionToInsert - 1] > current) {
      arr[positionToInsert] = arr[positionToInsert - 1]
      positionToInsert--
    }
    arr[positionToInsert] = current
  }
  return arr
}

const arr = [100, -5, 14, -98, 167, 8, 4, 2, 51, 86, 57, 3, 1, -200]
console.log(insertionSort(arr))
