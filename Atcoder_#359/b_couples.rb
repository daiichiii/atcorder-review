n = gets.to_i
a = gets.split.map(&:to_i)

positions = Hash.new { |hash, key| hash[key] = [] }

a.each_with_index do |color, index|
  positions[color] << index
end

count = 0
positions.each do |color, indices|
  if indices[1] - indices[0] == 2
    count += 1
  end
end

# 結果を出力
puts count