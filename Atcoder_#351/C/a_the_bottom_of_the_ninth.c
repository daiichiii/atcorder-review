#include <stdio.h>

int main() {
    int A[9], B[8];
    int sum_A = 0, sum_B = 0;

    // チーム高橋の得点を入力
    for (int i = 0; i < 9; i++) {
        scanf("%d", &A[i]);
        sum_A += A[i];
    }

    // チーム青木の得点を入力
    for (int i = 0; i < 8; i++) {
        scanf("%d", &B[i]);
        sum_B += B[i];
    }

    // 勝利するために必要な最小得点を計算
    int required_score = (sum_A - sum_B) + 1;

    // 結果を出力
    printf("%d\n", required_score);

    return 0;
}
