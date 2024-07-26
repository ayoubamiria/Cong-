
export interface HashService {
    hashPassword(password: string): Promise<string>;
}