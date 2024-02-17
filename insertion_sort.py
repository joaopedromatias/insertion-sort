def insertion_sort(arr):
    current = 0
    position_to_insert = 0 

    for pointer in range(1, len(arr)): 
        current = arr[pointer]
        position_to_insert = pointer
        while(position_to_insert > 0 and arr[position_to_insert -1] > current): 
            arr[position_to_insert] = arr[position_to_insert - 1]
            position_to_insert -= 1
        arr[position_to_insert] = current
    return arr

arr = [100, -5, 14, -98, 167, 8, 4, 2, 51, 86, 57, 3, 1, -200]
print(insertion_sort(arr))