export interface Global {
  header: Header;
  multitab: Multitab;
  notice: Notice;
  settingDrawer: SettingDrawer;
}

export interface SettingDrawer {
  pageStyleTitle: string;
  dartTooltipTitle: string;
  lightTooltipTitle: string;
  themeTitle: string;
  layoutTitle: string;
  sideMenuTitle: string;
  topMenuTitle: string;
  dustRed: string;
  volcano: string;
  sunsetOrange: string;
  cyan: string;
  polarGreen: string;
  daybreakBlue: string;
  geekBlue: string;
  goldenPurple: string;
  contentWidth: string;
  fixed: string;
  flux: string;
  fixHeader: string;
  effectiveWhenFixHeader: string;
  hideHeaderWhenSliding: string;
  fixedSideMenu: string;
  other: string;
  colorWeakMode: string;
  multiTabMode: string;
}
export interface Notice {
  notice: string;
  message: string;
  todo: string;
}
export interface Multitab {
  leftHasNoTag: string;
  rightHasNoTag: string;
  closecurrent: string;
  closecright: string;
  closecleft: string;
  closecall: string;
}
export interface Header {
  compilingLanguage: string;
  compilingTheme: string;
  userCenter: string;
  settings: string;
  logout: string;
  confirm: string;
  confirmMessage: string;
  ok: string;
  cancle: string;
}

export interface Menu {
  dashboard: string;
}

export interface Page {
  dashboard: Dashboard;
}

export interface Dashboard {
  a: string;
}

export interface Locale {
  global: Global;
  menu: Menu;
  page: Page;
}
