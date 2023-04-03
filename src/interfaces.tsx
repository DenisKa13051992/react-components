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
  isInvalid?: boolean;
};

export type StateTypeCard = {
  isActive?: boolean;
  value?: UserCardType | string;
  isInvalidPass: boolean;
  showAddUserMessage?: boolean;
};

export type UserNameForm = {
  userName: string;
  propRef?: React.Ref<HTMLInputElement>;
  propMaleRef?: React.Ref<HTMLInputElement>;
  propFemaleRef?: React.Ref<HTMLInputElement>;
  isInvalidName?: boolean;
  isInvalidBirthDate?: boolean;
  isInvalidGender?: boolean;
  cleanForm?: boolean;
  showAddUserMessage?: boolean;
  isInvalidAgree?: boolean;
};

export type UserCountryForm = {
  userName: string;
  propRef: React.Ref<HTMLSelectElement>;
  isInvalidCountry: boolean;
};

export type UserFileForm = {
  propRef: React.Ref<HTMLInputElement>;
  isInvalidUserFile: boolean;
};

export type UserCardType = {
  userName?: string;
  userBirthdate?: string;
  userCountry?: string;
  userPhoto?: File | string;
  userAgree?: boolean | string;
  userGender?: string;
};

export interface UserCardTypeData {
  userName?: string;
  userBirthdate?: string;
  userCountry?: string;
  userPhoto?: FileList;
  userAgree?: boolean | string;
  userGender?: string;
}

export type UserCardTypeWithKey = {
  userCardInfo: UserCardType;
  key?: number;
};
