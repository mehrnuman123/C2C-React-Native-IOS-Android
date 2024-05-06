import React from 'react';
import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  name: string;
  auth_provider: string;
  email: string;
  role: string;
  uId: string;
  profile: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  isVerified: string;
  password: string;
  status: string;
  company: string;
  id: number;
};

export default class AuthStore {
  authToken!: string | null;
  user!: User | null;
  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    this.authToken = await AsyncStorage.getItem('authToken');
    this.user =
      (await JSON.parse((await AsyncStorage.getItem('user')) || '{}')) || null;
  }

  async update(field: string, value: any) {
    await AsyncStorage.setItem(field, JSON.stringify(value));
    if (field === 'authToken') {
      this.authToken = value;
    } else {
      this.user = value;
    }
  }

  async clear() {
    await AsyncStorage.clear();
    this.authToken = null;
    this.user = null;
  }
}

const AuthStoreContext = React.createContext(new AuthStore());

// custom hooks available for the app to connect to the stores
export const useStores = () => React.useContext(AuthStoreContext);
