N = gets.strip.to_i

users = []

# N人のユーザの名前とレートをusersオブジェクトに格納
N.times do
  name, rate = gets.strip.split
  users << {name: name, rate: rate.to_i}
end

# 辞書順にソート
users.sort_by! { |user| user[:name] }

# レートの合計を算出
total_rate = users.sum { |user| user[:rate] }

# 勝者を決定
winner_index = total_rate % N

# 勝者のユーザー名を出力
puts users[winner_index][:name]
