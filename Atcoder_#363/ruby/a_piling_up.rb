R = gets.chomp.to_i

# ブロックに分けて値を次のレベルを算出
if R <= 99
  next_level = 100
elsif R <= 199
  next_level = 200
elsif R <= 299
  next_level = 300
end

required_increase = next_level - R
puts required_increase
