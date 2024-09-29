def main
  n = gets.to_i
  s = gets.chomp

  # 座標を管理する
  x, y = 0, 0
  # 訪れた座標を管理するハッシュセット
  visited = Set.new
  visited.add([x, y])

  # 各文字に応じて移動を行い、座標を記録していく
  s.each_char do |char|
    case char
    when 'R'
      x += 1
    when 'L'
      x -= 1
    when 'U'
      y += 1
    when 'D'
      y -= 1
    end

    # もし訪れた座標がすでに存在すれば "Yes" を出力して終了
    if visited.include?([x, y])
      puts "Yes"
      return
    end

    # 新たに訪れた座標を記録
    visited.add([x, y])
  end

  # 最後まで同じ座標が見つからなければ "No" を出力
  puts "No"
end

main
