def main
  n = gets.to_i
  sticks = []

  n.times do
    s = gets.chomp
    # 文字列 s とその反転のうち辞書順で小さい方を選ぶ
    normalized_s = [s, s.reverse].min
    sticks << normalized_s
  end

  # ユニークな文字列の個数を出力
  puts sticks.uniq.size
end

main
