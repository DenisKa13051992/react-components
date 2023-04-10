import { SetStateAction } from 'react';

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
  userPhoto?: string;
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

export type AllCharacters = {
  info: CharacterInfo;
  results: CharacterResults[];
};

type CharacterInfo = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};

export type CharacterResults = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ModalCartState = {
  characterResult: CharacterResults;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
};

export type CharacterResultsState = {
  characterResults: CharacterResults[];
};

export type CharacterResultState = {
  characterResult: CharacterResults;
};

export type CharacterResultsStatesByName = {
  updateCartList: React.Dispatch<SetStateAction<CharacterResults[]>>;
};
