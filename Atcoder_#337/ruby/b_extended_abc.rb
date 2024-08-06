def main(input)
  s = input.strip
  # 正規表現を使って、拡張ABC文字列であるかどうかを判定します
  if s.match?(/\AA*B*C*\z/)
    puts 'Yes'
  else
    puts 'No'
  end
end

input = gets
main(input)
