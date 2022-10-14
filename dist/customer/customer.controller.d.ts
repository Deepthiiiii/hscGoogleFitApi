import { Request, Response } from 'express';
import { CustomerService } from './customer.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    gfitConnect(req: Request, res: Response): void;
}
