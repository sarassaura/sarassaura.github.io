let timer: unknown;

export const throttle = function (func: () => void, delay: number) {
    if (timer) {
        return;
    }

    timer = setTimeout(function () {
        func();

        timer = undefined;
    }, delay);
};
