const waitMillisecondsAsync = (time: number) => new Promise<void>((resolve, _reject) => {
    setTimeout(_ => resolve(), time)
});

export {
    waitMillisecondsAsync
}