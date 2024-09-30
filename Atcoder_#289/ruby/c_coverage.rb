def solve
  n, m = gets.split.map(&:to_i)

  # 各集合を読み込む
  sets = []
  m.times do
    c = gets.to_i
    a = gets.split.map(&:to_i)
    sets << a
  end

  valid_count = 0

  # bit全探索
  (1...2**m).each do |bit|
    covered = Array.new(n+1, false)

    # bitに対応する集合を選ぶ
    m.times do |i|
      if bit[i] == 1
        sets[i].each do |num|
          covered[num] = true
        end
      end
    end

    # 1からNまで全てがカバーされているか確認
    if (1..n).all? { |num| covered[num] }
      valid_count += 1
    end
  end

  # 条件を満たす選び方の数を出力
  puts valid_count
end

solve
