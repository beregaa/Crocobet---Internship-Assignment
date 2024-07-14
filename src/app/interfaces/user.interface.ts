import { AddressInterface } from './address.interface';
import { CompanyInterface } from './company.interface';

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  name: String;
  email: string;
  address: AddressInterface;
  phone: string;
  website: string;
  company: CompanyInterface;
}
