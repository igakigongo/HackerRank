# frozen_string_literal: true

def big_sorting(unsorted)
  sorted = unsorted.map(&:to_i).sort!
  sorted.map(&:to_s)
end
