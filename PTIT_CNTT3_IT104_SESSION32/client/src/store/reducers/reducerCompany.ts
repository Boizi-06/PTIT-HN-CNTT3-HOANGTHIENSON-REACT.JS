// reducerCompany.ts
export interface CompanyState {
  company: string;
}

const initialState: CompanyState = {
  company: "Rikkei Academy",
};

export const CHANGE_COMPANY = "CHANGE_COMPANY";

export const changeCompany = () => ({
  type: CHANGE_COMPANY,
});

export default function reducerCompany(
  state = initialState,
  action: any
): CompanyState {
  switch (action.type) {
    case CHANGE_COMPANY:
      return { ...state, company: "RikkeiSoft" };
    default:
      return state;
  }
}
