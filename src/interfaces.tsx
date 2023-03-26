export interface IDataProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type IDataProductWithKey = {
  dataProduct: IDataProduct;
  key: number;
};

export type StateType = {
  isActive?: boolean;
  value?: string;
};

export type StateTypeCard = {
  isActive?: boolean;
  value?: UserCardType | string;
};

export type UserNameForm = {
  userName: string;
  propRef: React.Ref<HTMLInputElement>;
};

export type UserCountryForm = {
  userName: string;
  propRef: React.Ref<HTMLSelectElement>;
};

export type UserFileForm = {
  propRef: React.Ref<HTMLInputElement>;
};

export type UserCardType = {
  userName?: string;
  userBirthdate?: string;
  userCountry?: string;
  userPhoto?: File | string;
  userAgree?: boolean | string;
  userGender?: string;
};

export type UserCardTypeWithKey = {
  userCardInfo: UserCardType;
  key?: number;
};
