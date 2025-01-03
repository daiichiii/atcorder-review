package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	// マス目の状態を格納する8x8の2次元スライス
	board := make([][]rune, 8)
	for i := 0; i < 8; i++ {
		scanner.Scan()
		line := scanner.Text()
		board[i] = []rune(line)
	}

	// コマが置かれている行と列を記録する
	rows := make([]bool, 8) // 各行にコマがあるか
	cols := make([]bool, 8) // 各列にコマがあるか

	// コマの位置を確認
	for i := 0; i < 8; i++ {
		for j := 0; j < 8; j++ {
			if board[i][j] == '#' {
				rows[i] = true
				cols[j] = true
			}
		}
	}

	// 空マスで、どのコマにも取られないマスを数える
	count := 0
	for i := 0; i < 8; i++ {
		for j := 0; j < 8; j++ {
			if board[i][j] == '.' && !rows[i] && !cols[j] {
				count++
			}
		}
	}

	// 結果を出力
	fmt.Println(count)
}
