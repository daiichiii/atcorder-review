# 入力の読み込み
n, m, k = gets.chomp.split.map(&:to_i)
# テスト結果を初期化
tests = []

# テスト結果を取得
m.times do
  line = gets.chomp.split
  #　鍵の数を取得
  c = line[0].to_i
  # 鍵の組み合わせをビットマスクマスクで取得
  keys = line[1, c].map { |i| 1 << (i.to_i - 1) }.sum
  # テストの結果を取得
  result = line[-1] == 'o'
  # 鍵の組み合わせと結果を代入
  tests << [keys, result]
end

# 0から2^n-1までの全ての整数を試す
(0...(2 ** n)).each do |combination|
  valid = true

  # 各テストを確認
  tests.each do |keys, result|
    # 正しい鍵の数を数える
    correct_keys = (combination & keys).to_s(2).count('1')

    # テスト結果が矛盾していないか確認
    if (correct_keys >= k) != result
      valid = false
      break
    end
  end

  # 全てのテストに矛盾しなければカウントを増やす
  valid_combinations += 1 if valid
end


puts valid_combinations
