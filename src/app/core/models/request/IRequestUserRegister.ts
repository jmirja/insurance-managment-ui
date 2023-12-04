import { IRequestBase } from './IRequestBase';

export interface IRequestUserRegister extends IRequestBase{
    FullName: string;
    Email: string;
  }
  