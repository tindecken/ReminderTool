export function  countdown(count: number) {
    let timer = setInterval(_ => {
        count--
        if (count === -1)
            clearInterval(timer)
    }, 1000)
}