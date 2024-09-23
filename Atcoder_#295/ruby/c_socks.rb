def main
  # N を取得
  n = gets.to_i
  # 靴下の色を表す配列 A を取得
  a = gets.split.map(&:to_i)

  # 色ごとの靴下の数をカウントするためのハッシュ
  sock_count = Hash.new(0)

  # 靴下の色ごとにカウント
  a.each do |color|
    sock_count[color] += 1
  end

  # ペアの数を数える
  pairs = 0
  sock_count.each_value do |count|
    pairs += count / 2  # 2枚で1ペア
  end

  # 結果を出力
  puts pairs
end

main
