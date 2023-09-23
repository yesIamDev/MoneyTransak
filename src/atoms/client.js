import { atom, selector } from "recoil";

export const clientState = atom({
  key: "client-state",
  default: {
    currentClient: null,
  },
});


export const currentClient = selector({
  key:'current-client',
  get: ({get}) => {
    const {currentClient} = get(clientState)
    return currentClient
  }
})