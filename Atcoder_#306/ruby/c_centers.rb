def main
  # 入力を取得
  n = gets.to_i
  a = gets.split.map(&:to_i)

  # 各数字の2番目の出現位置を記録するハッシュ
  position_map = Hash.new { |hash, key| hash[key] = [] }

  # 各要素の出現位置を記録
  a.each.with_index do |num, idx|
    position_map[num] << idx + 1
  end

  # f(i) のリストを作成して、2番目の出現位置でソート
  result = (1..n).to_a.sort_by { |i| position_map[i][1] }

  # 結果を出力
  puts result.join(' ')
end

main
