function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // 基线条件，如果数组只有一个元素或为空，直接返回
  }

  const pivot = arr[0]; // 基准值为数组的第一个元素
  const left = []; // 左侧子数组
  const right = []; // 右侧子数组

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // 将小于基准值的元素放入左侧子数组
    } else {
      right.push(arr[i]); // 将大于等于基准值的元素放入右侧子数组
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // 递归地对左右子数组进行快速排序，并将结果拼接返回
}

// 示例运行
const arr = [5, 3, 8, 4, 2, 9, 1, 6, 7];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]