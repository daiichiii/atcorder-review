n, m = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)
solved = []

# ボーナス点の入力を受け取る（ここでボーナス点を設定）
bonus_points = Array.new(n) { |i| i + 1 } # ボーナス点を設定

n.times do
  solved << gets.chomp
end

# 各プレイヤーの現在の得点を計算
current_scores = []
remaining_problems = []

n.times do |i|
  score = bonus_points[i]  # ボーナス点を初期スコアに加える
  remaining = []
  m.times do |j|
    if solved[i][j] == 'o'
      score += a[j]
    else
      remaining << a[j]
    end
  end
  current_scores << score
  remaining_problems << remaining.sort.reverse
end

# 全プレイヤー中の最大スコアを計算（1回だけ計算）
max_score = current_scores.max

# 各プレイヤーに対する回答を求める
n.times do |i|
  # 自分が最大スコアの場合は0を出力
  if current_scores[i] == max_score
    puts 0
    next
  end

  # プレイヤー i が他の全プレイヤーを上回るために必要なスコアを計算
  needed_score = max_score + 1 - current_scores[i]

  solved_count = 0
  current_sum = 0

  remaining_problems[i].each do |score|
    current_sum += score
    solved_count += 1

    if current_sum >= needed_score
      break
    end
  end

  puts solved_count
end
