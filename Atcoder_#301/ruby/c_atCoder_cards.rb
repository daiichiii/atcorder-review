def can_win?(s, t)
  # @ に変換可能な文字を定義
  atcoder_chars = ['a', 't', 'c', 'o', 'd', 'e', 'r']

  # 各文字のカウントを行う
  s_count = Hash.new(0)
  t_count = Hash.new(0)

  s.chars.each { |ch| s_count[ch] += 1 unless ch == '@' }
  t.chars.each { |ch| t_count[ch] += 1 unless ch == '@' }

  # S と T の @ の数を取得
  s_at = s.count('@')
  t_at = t.count('@')

  # S側とT側の文字を比較し、足りない分を@で補えるか確認
  atcoder_chars.each do |ch|
    if s_count[ch] > t_count[ch]
      t_at -= (s_count[ch] - t_count[ch])
    elsif t_count[ch] > s_count[ch]
      s_at -= (t_count[ch] - s_count[ch])
    end
    # @が足りなくなったら不可能
    return false if s_at < 0 || t_at < 0
  end

  # @ を使わない部分の文字もチェック
  (('a'..'z').to_a - atcoder_chars).each do |ch|
    return false if s_count[ch] != t_count[ch]
  end

  true
end

# 入力の取得
s = gets.chomp
t = gets.chomp

# 結果を判定して出力
if can_win?(s, t)
  puts 'Yes'
else
  puts 'No'
end
