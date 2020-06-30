# frozen_string_literal: true

require './lib/factorial.rb'

RSpec.describe 'factorial' do
  it 'works for 10' do
    expect(factorial(10)).to eql(3_628_800)
  end

  it 'works for 20' do
    expect(factorial(20)).to eql(2_432_902_008_176_640_000)
  end

  it 'works for 30' do
    expect(factorial(30)).to eql(265_252_859_812_191_058_636_308_480_000_000)
  end
end
