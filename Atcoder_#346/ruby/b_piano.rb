def exists_w_b_substring?(w, b)
  s = 'wbwbwwbwbwbw'
  s_size = s.size
  target_size = w + b

  # 必要に応じて、十分な長さに文字列を拡張
  extended_s = s * ((target_size / s_size.to_f).ceil + 1)

  # 部分文字列をスライドしながらチェック
  0.upto(extended_s.size - target_size) do |i|
    substring = extended_s[i, target_size]
    w_count = substring.count('w')
    b_count = substring.count('b')
    if w_count == w && b_count == b
      return "Yes"
    end
  end

  "No"
end

# 入力を受け取る
w, b = gets.strip.split.map(&:to_i)

# 結果を出力
puts exists_w_b_substring?(w, b)
