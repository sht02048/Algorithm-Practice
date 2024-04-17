function quickSelect(arr, left, right, index) {
    if (left === right) { // If the partition length is 1, return this element
        return arr[left];
    }

    // Partition the array and get the position of the pivot element
    let pivotIndex = partition(arr, left, right);

    if (index === pivotIndex) {
        return arr[pivotIndex];
    } else if (index < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, index);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, index);
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]]; // Swap pivot to the middle
    return i;
}

function solution(array, commands) {
    const result = [];
    
    commands.forEach(([firstIndex, lastIndex, targetIndex]) => {
        // Create a copy of the slice to prevent modifying the original array
        let subArray = array.slice(firstIndex - 1, lastIndex);
        let kthElement = quickSelect(subArray, 0, subArray.length - 1, targetIndex - 1);
        
        result.push(kthElement);
    });
    
    return result;
}
