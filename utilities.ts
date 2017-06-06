export function countdown(count: number) {
    let timer = setInterval(() => {
        tick(count--);
        if(count === 0){
            clearInterval(timer);
        }
    }, 1000)
}