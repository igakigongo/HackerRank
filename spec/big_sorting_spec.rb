# frozen_string_literal: true

require './lib/big_sorting.rb'

RSpec.describe 'big sorting' do
  it 'works for large integers' do
    expected = %w[1 3 3 5 10 31415926535897932384626433832795]
    array = %w[31415926535897932384626433832795 1 3 10 3 5]
    sorted_array = big_sorting(array)
    expect(sorted_array).to eql(expected)
  end
end
