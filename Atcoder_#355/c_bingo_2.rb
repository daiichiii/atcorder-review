# 入力の読み込み
n, t = gets.strip.split.map(&:to_i)
a = gets.strip.split.map(&:to_i)

# 行、列、対角線のカウントを初期化
row_count = Array.new(n, 0)
col_count = Array.new(n, 0)
diag1_count = 0
diag2_count = 0

# ビンゴチェック用フラグ
bingo_achieved = false
bingo_turn = -1

# 宣言された整数に対して処理
a.each.with_index do |number, turn|
  # マス目の行と列を計算
  i = (number - 1) / n
  j = (number - 1) % n

  # 行と列のカウントを増やす
  row_count[i] += 1
  col_count[j] += 1

  # 対角線のカウントを増やす
  diag1_count += 1 if i == j
  diag2_count += 1 if i + j == n - 1

  # ビンゴのチェック
  if row_count[i] == n || col_count[j] == n || diag1_count == n || diag2_count == n
    bingo_turn = turn + 1
    bingo_achieved = true
    break
  end
end

# 結果の出力
puts bingo_achieved ? bingo_turn : -1
