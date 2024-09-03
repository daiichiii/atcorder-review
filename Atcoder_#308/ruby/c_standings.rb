def main
  n = gets.to_i
  people = []

  (1..n).each do |i|
    a, b = gets.split.map(&:to_i)
    people << [i, a, b]
  end

  # 成功率の高い順、同じ成功率の場合は番号順でソート
  people.sort! do |(_, a_i, b_i), (_, a_j, b_j)|
    left = a_i * (b_j + a_j)
    right = a_j * (b_i + a_i)
    right <=> left
  end

  # 結果を出力
  puts people.map { |i, _, _| i }.join(' ')
end

main
