def main
  n = gets.to_i
  q = gets.to_i

  # 各箱の中身を管理するための配列
  boxes = Array.new(n + 1) { [] }
  # カードの数字と、それが入っている箱の関係を管理するハッシュ
  card_to_boxes = Hash.new { |h, k| h[k] = Set.new }

  q.times do
    query = gets.split.map(&:to_i)

    if query[0] == 1
      # クエリ形式 1: カード i を箱 j に入れる
      i, j = query[1], query[2]
      boxes[j] << i
      card_to_boxes[i] << j

    elsif query[0] == 2
      # クエリ形式 2: 箱 i の中身を昇順で出力
      i = query[1]
      puts boxes[i].sort.join(" ")

    elsif query[0] == 3
      # クエリ形式 3: 数字 i が含まれる箱の番号を昇順で出力
      i = query[1]
      puts card_to_boxes[i].to_a.sort.join(" ")
    end
  end
end

main
