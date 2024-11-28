#include <stdio.h>

int main() {
    int N;
    scanf("%d", &N);

    char A[N][N + 1], B[N][N + 1];

    // グリッドAの入力
    for (int i = 0; i < N; i++) {
        scanf("%s", A[i]);
    }

    // グリッドBの入力
    for (int i = 0; i < N; i++) {
        scanf("%s", B[i]);
    }

    // 異なる文字がある位置を探す
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (A[i][j] != B[i][j]) {
                printf("%d %d\n", i + 1, j + 1);
                return 0;
            }
        }
    }

    return 0;
}
