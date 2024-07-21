#include <stdio.h>

int main(void) {
    int r;
    int next_level;
    int required_increase;
    
    scanf("%d", &r);

    if (r <= 99) {
        next_level = 100;
    } else if (r <= 199) {
        next_level = 200;
    } else {
        next_level = 300;
    }

    required_increase = next_level - r;
    
    printf("%d\n", required_increase);
    
    return 0;
}
