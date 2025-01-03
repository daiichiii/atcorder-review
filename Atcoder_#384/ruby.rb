require 'ostruct' # OpenStruct を使用するために必要

# 入力を受け取る
n, r = gets.split.map(&:to_i)

# コンテスト情報を格納
contests = []
n.times do
  d, a = gets.split.map(&:to_i) # ローカル変数として小文字に変更
  contests << OpenStruct.new(division: d, score: a)
end

# レーティング更新の対象を判定
#
# @param [Integer] current_rating
# @param [Integer] division
# @return [Boolean] 更新対象であれば、true
def update_target?(current_rating, division)
  if division == 1
    # ARC Div. 1 の条件
    (1600..2799).include?(current_rating)
  elsif division == 2
    # ARC Div. 2 の条件
    (1200..2399).include?(current_rating)
  else
    false
  end
end

# レーティング更新処理
current_rating = r
contests.each do |contest|
  if update_target?(current_rating, contest.division)
    current_rating += contest.score
  end
end

# 結果を出力
puts current_rating
