export function increase(number: number) {
    if(number > 100) {
        return 100;
    } else {
        return ++number;
    }
}