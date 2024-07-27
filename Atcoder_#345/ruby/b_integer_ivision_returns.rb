require 'bigdecimal'
require 'bigdecimal/util'

# 標準入力から整数Xを取得
X = gets.to_i

# 10をXで割り、結果を天井関数で丸める
result = (BigDecimal('10') / X).ceil

# 結果を出力
puts result
