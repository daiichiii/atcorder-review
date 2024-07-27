# 入力を受け取る
N = gets.strip.to_i
cards = []

N.times do |i|
  strength, cost = gets.strip.split.map(&:to_i)
  cards << {index: i + 1, strength: strength, cost: cost}
end

# コストだけで比較するようにするため強さ順にソート
cards.sort_by! { |card| card[:strength] }

# 残るカードの集合を決定
remaining_cards = []
# 最初の値を必ず対象にするため、初期値を無限に設定
min_cost = Float::INFINITY

# コストを比較し、残るカードを格納
cards.reverse_each do |card|
  if card[:cost] < min_cost
    remaining_cards << card[:index]
    min_cost = card[:cost]
  end
end

# 昇順にソートして出力
remaining_cards.sort!

# 捨てられなかったカードを出力
puts remaining_cards.size
# 捨てられなかったカードの番号を出力
puts remaining_cards.join(' ')
