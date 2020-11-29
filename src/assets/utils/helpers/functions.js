let debouncerTimer = null;

export const debouncer = (action, timeout, actionArguments) => {
    clearTimeout(debouncerTimer);
    debouncerTimer = setTimeout(() => action(...actionArguments), timeout);
};
