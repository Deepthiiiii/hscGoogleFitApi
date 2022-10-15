import { Request } from "express";
export declare class GoogleService {
    private oauthClient;
    getUrl(req: Request): string;
    getTokens(code: any): Promise<import("google-auth-library/build/src/auth/oauth2client").GetTokenResponse>;
}
