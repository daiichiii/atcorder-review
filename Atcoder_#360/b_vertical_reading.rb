S, T = gets.strip.split

# Sの長さを取得
s_length = S.length

# cとwのすべての組み合わせを試す
(1..s_length).each do |w|
  # wがSの長さ以上であればスキップ
  next if w >= s_length  

  (1..w).each do |c|
    result = ""

    # Sをw文字毎に区切る
    (0...s_length).step(w) do |i|
      # Sのi番目からw文字を取得
      part = S[i, w]
      # 部分文字列がc文字以上の場合、そのc文字目を連結
      if part.length >= c
        result += part[c - 1]
      end
    end

    # 連結した文字列がTと一致するか
    if result == T
      puts "Yes"
      exit
    end
  end
end

# 条件を満たす組が見つからない場合
puts "No"
