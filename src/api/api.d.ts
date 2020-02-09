/* eslint-disable @typescript-eslint/no-explicit-any */
type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

/// <reference path="./apmp/api.d.ts" />
