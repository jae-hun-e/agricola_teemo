// const _ = require("lodash");
import tmp from "lodash";

export function cls(...className: string[]) {
  return className.join(" ");
}

interface IChangeValue {
  key: string;
  value: number;
}

export function changeValue(prevObj: object, changesData: IChangeValue[]) {
  const newObj = { ...prevObj };
  changesData.forEach(({ key, value }) => {
    const splitKey = key
      .split("[")
      .join("")
      .split("]")
      .join("")
      .split("'")
      .filter((i) => i !== "");

    console.log("splitKey", splitKey, value);
    tmp.set(newObj, splitKey, value);
  });

  return newObj;
}

export function changeObj() {
  function setDeep(obj, path, value, setrecursively = false) {
    path.reduce((a, b, level) => {
      if (level === path.length) {
        a[b] = value;
        return value;
      }
      return a[b];
    }, obj);
  }
}
