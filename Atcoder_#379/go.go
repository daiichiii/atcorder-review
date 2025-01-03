package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// 標準入力の読み取り
	scanner := bufio.NewScanner(os.Stdin)

	// 1行目の読み取り (NとK)
	scanner.Scan()
	firstLine := strings.Split(scanner.Text(), " ")
	N, _ := strconv.Atoi(firstLine[0]) // 歯の本数
	K, _ := strconv.Atoi(firstLine[1]) // 必要な連続する丈夫な歯の数

	// 2行目の読み取り (歯の状態)
	scanner.Scan()
	S := scanner.Text() // 高橋君の歯の状態

	// 最大のイチゴの数を計算
	result := maxStrawberries(N, K, S)

	// 結果を出力
	fmt.Println(result)
}

/**
 * 最大で食べられるイチゴの数を計算する関数
 * @param N int - 歯の本数
 * @param K int - 必要な連続する丈夫な歯の数
 * @param S string - 高橋君の歯の状態
 * @return int - 最大のイチゴの数
 */
func maxStrawberries(N, K int, S string) int {
	strawberries := 0
	runes := []rune(S) // 文字列を変更可能なスライスに変換

	for i := 0; i <= N-K; i++ {
		// 現在のK本がすべて丈夫(O)かを確認
		if isHealthy(runes, i, K) {
			strawberries++                    // イチゴを食べる
			makeCavity(runes, i, K)           // 歯を虫歯にする
		}
	}

	return strawberries
}

/**
 * 現在のK本がすべて丈夫(O)か確認する関数
 * @param runes []rune - 歯の状態
 * @param start int - チェックを開始する位置
 * @param K int - 確認する長さ
 * @return bool - 全部丈夫ならtrue、それ以外はfalse
 */
func isHealthy(runes []rune, start, K int) bool {
	for i := start; i < start+K; i++ {
		if runes[i] != 'O' {
			return false
		}
	}
	return true
}

/**
 * 現在のK本の歯を虫歯(X)にする関数
 * @param runes []rune - 歯の状態
 * @param start int - 虫歯にする開始位置
 * @param K int - 虫歯にする長さ
 */
func makeCavity(runes []rune, start, K int) {
	for i := start; i < start+K; i++ {
		runes[i] = 'X'
	}
}
