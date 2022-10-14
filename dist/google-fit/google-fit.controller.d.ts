import { Request, Response } from 'express';
import { GoogleService } from './google.service';
export declare class GoogleFitController {
    private readonly googleService;
    constructor(googleService: GoogleService);
    getGoogleFitUrl(req: Request, res: Response): void;
    getTokens(req: Request, res: Response): void;
    getSteps(req: Request, res: Response): void;
}
