export function counterReducer (state, action) {
    switch (action.type) {
        case 'increment': {
            return action.countValue += 1;
        }
        case 'decrement': {
            return action.countValue -= 1;
        }
        case 'zerar': {
            return 0;
        }
    }
}