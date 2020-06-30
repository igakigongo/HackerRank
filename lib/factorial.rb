# frozen_string_literal: true

def factorial_helper(num, memo)
  return 1 if num.equal?(0) || num.equal?(1)

  return memo[num] if memo.key?(num)

  fact = num * factorial_helper(num - 1, memo)
  memo.store(num, fact)
  fact
end

def factorial(num)
  memo = {}
  factorial_helper(num, memo)
end
