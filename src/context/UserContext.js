// import { createContext } from "react";

// const UserContext = createContext({
//    name: "",
//    userProfil: "",
//    isLogged: false,
// });

// export default UserContext;

import { create } from 'zustand'

const useUserStore = create((set) => ({
   pseudo: "Bradley Ortiz",
   userProfil: "",
   isLogged: false,
   upDatePseudo(pseudo) {
      set({ pseudo: pseudo })
   },
   upDateIsLogged() {
      set({ isLogged: true });
   }
}))

export default useUserStore;