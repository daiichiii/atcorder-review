def main
  # 入力を取得
  n, m, h, k = gets.split.map(&:to_i)
  s = gets.chomp.chars
  items = {}

  # アイテムの位置をセットとして管理
  m.times do
    x, y = gets.split.map(&:to_i)
    items[[x, y]] = true
  end

  # Takahashiの初期位置
  x, y = 0, 0

  # 各移動処理
  s.each do |move|
    # 移動ごとに体力を1減少させる
    h -= 1

    # 体力が0未満ならTakahashiは倒れる
    if h < 0
      puts "No"
      return
    end

    # 移動に応じて座標を変更
    case move
    when 'R'
      x += 1
    when 'L'
      x -= 1
    when 'U'
      y += 1
    when 'D'
      y -= 1
    end

    # アイテムが現在の位置にあり、かつ体力がK未満なら回復する
    if items[[x, y]] && h < k
      h = k
      items.delete([x, y]) # アイテムは消費される
    end
  end

  # 全ての移動を問題なく行えた場合
  puts "Yes"
end

main
