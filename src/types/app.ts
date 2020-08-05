export interface IUserData {
  gender?: string;
  weight?: number;
  typeWeight?: string;
  weightList?: Array<any>;
  height?: number;
  typeHeight?: string;
  hairColor?: string;
  eyeColor?: string;
  skinColor?: string;
  topSize?: string;
  bottomSize?: number;
  shoesSize?: number;
  typeBody?: string;
  style?: string;
  setGender?: (value: string) => void;
  setWeight?: (value: number) => void;
  setHeight?: (value: number) => void;
  setTypeWeight?: (value: string) => void;
}

export interface IWeight {
  typeWeight?: string | 'kilos';
  weightList?: Array<any> | [];
  setTypeWeight?: (value: string) => void;
  setToggleWeight?: (value: Array<any>) => void;
}

export interface IHeight {
  typeHeight?: string | 'centimeters';
  heightList?: Array<any> | [];
  setTypeHeight?: (value: string) => void;
  setToggleHeight?: (value: Array<any>) => void;
}
