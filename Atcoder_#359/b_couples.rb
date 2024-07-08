# 標準入力から整数を取得
n = gets.to_i

# 標準入力から配列を取得し、整数に変換
a = gets.split.map(&:to_i)

# 新しいハッシュを作成し、キーが存在しない場合に空の配列を初期化
positions = Hash.new { |hash, key| hash[key] = [] }

# 配列aを走査し、各色の位置をハッシュに格納
a.each_with_index do |color, index|
  positions[color] << index
end

# 特定の条件を満たすペアの数をカウント
count = 0

# 各色ごとに、その色が出現するインデックスのペアをチェック
positions.each do |color, indices|
  # インデックスの差が2である場合にカウントを増やす
  if indices[1] - indices[0] == 2
    count += 1
  end
end

# 結果を出力
puts count
