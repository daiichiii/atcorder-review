def main
  a = gets.to_i
  b = gets.chomp.split("")

  # ダミーの "-" を追加して処理を一貫させる
  b << "-"

  # 連続した "o" の最大値を記録するハッシュ
  hash = Hash.new(0)
  hash_t = Hash.new(0)

  # 配列を順に処理する
  b.each do |bb|
    if bb == "o"
      hash_t[bb] += 1  # "o" の連続をカウント
    else
      # "-" に遭遇したら、現在の最大値と比較して更新
      if hash["o"] < hash_t["o"]
        hash["o"] = hash_t["o"]
      end
      hash_t["o"] = 0  # カウントリセット
    end
  end

  # 最後に追加したダミーの "-" を削除
  b.pop

  # 全てが "o" だけなら -1 を出力
  if b.count("o") == a
    puts "-1"
  elsif hash["o"] == 0
    # 最大の "o" の連続が見つからなければ -1 を出力
    puts "-1"
  else
    # 最大の "o" の連続数を出力
    puts hash["o"]
  end
end

main
