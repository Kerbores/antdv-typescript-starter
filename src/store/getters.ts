import { RootState } from "@/store/index";

const getters = {
  sidebar: (state: RootState) => state.app.sidebar,
  // device: (state: IRootState) => state.app.device,
  fixSiderbar: (state: RootState) => state.app.fixSiderbar,
  layoutMode: (state: RootState) => state.app.layoutMode,
  navTheme: (state: RootState) => state.app.navTheme,
  language: (state: RootState) => state.app.language,
  primaryColor: (state: RootState) => state.app.primaryColor,
  colorWeak: (state: RootState) => state.app.colorWeak,
  token: (state: RootState) => state.user.jwtToken
};

export default getters;
