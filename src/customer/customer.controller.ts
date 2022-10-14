import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, response, Response } from 'express';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('login')
  create(@Req() req: Request, @Res() res: Response) {
    if (req && req.body) {
      const email = req.body.email;
      const customerIndex = this.customerService.customers.findIndex(
        (customer) => customer.email === email,
      );
      if (customerIndex === -1) {
        this.customerService.create({ email: email });
        res.send({ newCustomer: true });
      } else if (this.customerService.customers[customerIndex].dateOfBirth) {
        res.send({ data: this.customerService.customers[customerIndex] });
      } else {
        res.send({ newCustomer: true });
      }
    } else {
      res.send({ message: 'Bad Request' });
    }
  }

  @Put('register')
  update(@Req() req: Request, @Res() res: Response) {
    if (req && req.body) {
      const email = req.body.email;
      const customerIndex = this.customerService.customers.findIndex(
        (customer) => customer.email === email,
      );
      if (customerIndex === -1) {
        res.send({ message: "Customer doesn't exist" });
      } else {
        this.customerService.customers[customerIndex]['name'] = req.body.name;
        this.customerService.customers[customerIndex]['email'] = req.body.email;
        this.customerService.customers[customerIndex]['dateOfBirth'] =
          req.body.dateOfBirth;
        res.send({ data: this.customerService.customers[customerIndex] });
      }
    }
  }

  @Put('gfit-connect')
  gfitConnect(@Req() req: Request, @Res() res: Response) {
    if (req && req.body) {
      const email = req.body.email;
      const customerIndex = this.customerService.customers.findIndex(
        (customer) => customer.email === email,
      );
      if (customerIndex === -1) {
        res.send({ message: "Customer doesn't exist" });
      } else {
        fetch('http://localhost:3000/account/googlefit-url', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then((result) => {
          res.send({
            url: result.url,
          });
        });
      }
    }
  }
}
