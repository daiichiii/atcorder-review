# ユーザーからの入力を取得
s = gets.strip

# 文字列が '<' で始まるかどうかを確認するメソッド
def first_str?(s)
  s[0] == "<"
end

# 文字列内に '<' または '>' が含まれているかどうかを確認するメソッド
def during_str?(s)
  !s[1..-2].include?("<") && !s[1..-2].include?(">")
end

# 文字列が '>' で終わるかどうかを確認するメソッド
def last_str?(s)
  s[-1] == ">"
end

# 全ての条件を満たしているかどうかを確認するメソッド
def check_string(s)
  if first_str?(s) && during_str?(s) && last_str?(s)
    puts "Yes"
  else
    puts "No"
  end
end

# 文字列をチェック
check_string(s)
