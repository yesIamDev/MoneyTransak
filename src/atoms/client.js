import { atom, selector } from "recoil";

export const clientState = atom({
  key: "client-state",
  default: {
    currentClient: null,
  },
});

export const currentClient = selector({
  key: "current-client",
  get: ({ get }) => {
    const { currentClient } = get(clientState);
    if (currentClient == null) {
      return null;
    }
    return fetch(`http://localhost:3333/api/clients/${currentClient._id}`, {
      method: "GET",
    }).then((r) => r.json());
  },
});
