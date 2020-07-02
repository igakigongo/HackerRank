# frozen_string_literal: true

require './lib/insertion_sort_1'

RSpec.describe 'insertion sort' do
  it 'inserts an element in the correct position' do
    array = [1, 2, 4, 5, 8, 3]
    insertion_sort_1(6, array)
    expect(array).to eql([1, 2, 3, 4, 5, 8])
  end

  it 'works too' do
    array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
    insertion_sort_1(10, array)
    expect(array).to eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  end
end
