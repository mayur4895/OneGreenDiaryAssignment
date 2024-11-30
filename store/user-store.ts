// store/useUserStore.ts
import {create} from 'zustand';

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: Company;
}

interface UserStore {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const useUserStore = create<UserStore>((set:any) => ({
  users: [],
  setUsers: (users) => set((state:any) => {
    if (state.users.length === 0) {
      return { users }; 
    }
    return state;  
  }),
}));
