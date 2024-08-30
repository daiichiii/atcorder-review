def main
  # 売り手と買い手の人数を取得
  n, m = gets.split.map(&:to_i)

  # 売り手の価格リストと買い手の価格リストを取得
  s = gets.split.map(&:to_i).tally
  b = gets.split.map { |n| n.to_i + 1 }.tally

  # デフォルト値を0に設定
  s.default = 0
  b.default = 0

  # 売り手と買い手の価格を合わせたキーのリストをソート
  keys = (s.keys | b.keys).sort

  # 累積人数を初期化
  s_num = 0
  b_num = m  # 最初は全員が買える

  # 価格を下から順に見ていく
  keys.each do |k|
    s_num += s[k]  # 現在の価格で売りたい売り手の人数を加算
    b_num -= b[k]  # 現在の価格で買いたい買い手の人数を減算

    # 売り手の人数が買い手の人数以上であれば、その価格を出力
    if s_num >= b_num
      puts k
      return
    end
  end
end

main
