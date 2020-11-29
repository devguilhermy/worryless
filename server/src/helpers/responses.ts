export const responseOk = (message: String, data: any) => ({
    ok: true,
    message,
    ...data,
});

export const responseError = (message: String, error: any) => ({
    ok: false,
    message,
    error,
});
