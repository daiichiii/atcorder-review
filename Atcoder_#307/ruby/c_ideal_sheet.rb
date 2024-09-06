def read_sheet
  h, w = gets.chomp.split.map(&:to_i)
  sheet = []
  h.times do
    sheet << gets.chomp.chars.map { |v| v == '#' ? '1' : '0' }.join.to_i(2)
  end
  [h, w, sheet]
end

ha, wa, sheet_a = read_sheet
hb, wb, sheet_b = read_sheet
hx, wx, tmp = read_sheet

# sheet_x の初期化とゼロパディング
sheet_x = Array.new(10, 0)
hx.times do |i|
  sheet_x << (tmp[i].to_s(2) + '0' * (20 - wx)).to_i(2)
end
sheet_x += Array.new(20 - hx, 0)

START_HX = 10
START_WX = 10

(START_HX - ha + 1).upto(19) do |ai|
  (START_WX - wa + 1).upto(19) do |aj|
    (START_HX - hb + 1).upto(19) do |bi|
      (START_WX - wb + 1).upto(19) do |bj|
        combined = Array.new(30, 0)

        ha.times do |i|
          combined[ai + i] |= sheet_a[i] << (30 - (aj + wa))
        end

        hb.times do |i|
          combined[bi + i] |= sheet_b[i] << (30 - (bj + wb))
        end

        if combined == sheet_x
          puts 'Yes'
          return
        end
      end
    end
  end
end

puts 'No'
