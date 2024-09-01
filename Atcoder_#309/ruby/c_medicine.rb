def main
  n, k = gets.split.map(&:to_i)
  pills = []

  # 各薬について、日数と錠数を取得
  n.times do
    a, b = gets.split.map(&:to_i)
    pills << [a, b]
  end

  # a の昇順にソートする
  pills.sort!

  # 全錠数の合計
  total_pills = pills.map(&:last).sum

  if total_pills <= k
    puts 1
    return
  end

  # 処方日の順に累積錠数を計算していく
  pills.each do |a, b|
    total_pills -= b  # その日の錠数を減算

    if total_pills <= k
      puts a + 1
      return
    end
  end
end

main
