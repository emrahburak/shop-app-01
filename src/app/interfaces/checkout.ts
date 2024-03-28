
import {Cart} from './cart';

export class Checkout {
    constructor(
        public firstName: string,
        public lastName: string,
        public companyName: string,
        public text: string,
        public country: string,
        public addressOne: string,
        public addressTwo: string,
        public zipCode: string,
        public city: string,
        public district: string,
        public tel: string,
        public email: string,
        public cart: Cart
        ){}
}