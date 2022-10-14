import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    customers: any[]=[]

    create(customer) {
        this.customers.push(customer);
    }

    getAllCustomers() {
        return this.customers;
    }

    udpateCustomer(id, updatedCustomer) {
        let customer = this.customers.find(customer => customer.id === id);
        customer = updatedCustomer;
    }
}
