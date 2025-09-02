
function quickSort(arr) {
  const stack = []; // 创建一个栈
  stack.push(arr); // 将整个数组推入栈中

  while (stack.length) { // 栈不为空时循环
    const currentArray = stack.pop(); // 弹出栈顶的数组

    if (currentArray.length <= 1) {
      continue; // 如果数组长度为空或为1，则不需要进行排序，继续下一次循环
    }

    const pivot = currentArray[0]; // 基准值为数组的第一个元素
    const left = []; // 左侧子数组
    const right = []; // 右侧子数组

    for (let i = 1; i < currentArray.length; i++) {
      if (currentArray[i] < pivot) {
        left.push(currentArray[i]); // 将小于基准值的元素放入左侧子数组
      } else {
        right.push(currentArray[i]); // 将大于等于基准值的元素放入右侧子数组
      }
    }

    stack.push(...right); // 将右侧子数组推入栈中
    stack.push(pivot); // 将基准值推入栈中
    stack.push(...left); // 将左侧子数组推入栈中
  }

  return stack;
}

// 示例运行
const arr = [5, 3, 8, 4, 2, 9, 1, 6, 7];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]