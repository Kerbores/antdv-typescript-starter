export interface Global {
  header: Header;
  multitab: Multitab;
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
}

export interface Locale {
  global: Global;
}
