function deleteItem(arr, deleteItem) {
  var result = arr.filter(item => item !== deleteItem);
  return result
}
var ss = [1, 2, 3, 4, 5, 6]
ss = deleteItem(ss, 3)