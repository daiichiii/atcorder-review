n = gets.to_i
days_in_month = gets.split.map(&:to_i)

# ゾロ目の日付のカウント
count = 0

(1..n).each do |month|
  # 各月で日付がゾロ目になるか確認
  (1..days_in_month[month - 1]).each do |day|
    month_str = month.to_s
    day_str = day.to_s
    # 月と日が同じ1桁の数字で構成されているかを確認
    if month_str.length == 1 && day_str.length == 1 && month_str == day_str
      count += 1
    elsif month_str.length > 1 && day_str.length == 1 && month_str.chars.uniq.size == 1 && month_str[0] == day_str
      count += 1
    elsif month_str.length == 1 && day_str.length > 1 && day_str.chars.uniq.size == 1 && day_str[0] == month_str
      count += 1
    elsif month_str.length > 1 && day_str.length > 1 && month_str.chars.uniq.size == 1 && day_str.chars.uniq.size == 1 && month_str[0] == day_str[0]
      count += 1
    end
  end
end

# 結果を出力
puts count
