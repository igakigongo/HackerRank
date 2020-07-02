# frozen_string_literal: true

def insert(arr, ele, index)
  arr[index] = ele
end

def print_array(array)
  print array.join(' ')
  puts
end

def insert_with_print(arr, ele, index)
  insert arr, ele, index
  print_array arr
end

# Complete the insertionSort1 function below.
def insertion_sort_1(total_items, arr, should_print = false)
  i = total_items - 2
  unsorted_element = arr.last
  insert_method = should_print ? method(:insert_with_print) : method(:insert)

  while i > -1 && arr[i] > unsorted_element
    insert_method.call arr, arr[i], i + 1
    i -= 1
  end

  insert_method.call arr, unsorted_element, i + 1
end
