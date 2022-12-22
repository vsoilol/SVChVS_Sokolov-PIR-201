export interface ServerResponse<T>{
    result: boolean,
    message: string,
    data: T[]
}