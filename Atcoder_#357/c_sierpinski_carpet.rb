# 指定されたレベルのシェルピンスキーのカーペットを生成する
def generate_sierpinski_carpet(n)
  size = 3 ** n  # カーペットのサイズは 3 の n 乗
  carpet = Array.new(size) { Array.new(size) }  # サイズに応じた2次元配列を初期化

  # 各セルの値を計算してカーペットを生成
  (0...size).each do |i|
    (0...size).each do |j|
      carpet[i][j] = calculate_cell_value(i, j, n)
    end
  end

  carpet
end

# 指定されたセルの値を再帰的に計算する
def calculate_cell_value(x, y, n)
  if n == 0
    "#"  # レベル0ではすべてのセルが黒（#）
  else
    block_size = 3 ** (n - 1)  # 小さいブロックのサイズ
    block_x = x / block_size  # 現在のセルが属するブロックのx位置
    block_y = y / block_size  # 現在のセルが属するブロックのy位置

    if block_x == 1 && block_y == 1
      "."  # 中央のブロックは白（.）
    else
      calculate_cell_value(x % block_size, y % block_size, n - 1)  # 小さいブロック内の位置を再帰的に計算
    end
  end
end

# カーペットを出力する
def print_carpet(carpet)
  carpet.each do |row|
    puts row.join  # 各行を文字列に結合して出力
  end
end

# メイン処理
n = gets.to_i  # 標準入力からレベルを取得
carpet = generate_sierpinski_carpet(n)  # カーペットを生成
print_carpet(carpet)  # カーペットを出力
