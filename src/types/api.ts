type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserFilters = {
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
};

export interface User extends Record<string, any> {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};
