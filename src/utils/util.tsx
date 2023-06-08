export function cls(...className: string[]) {
  return className.join(" ");
}

interface IChangeValue {
  key: string;
  value: number;
}

// 장하다 재훈아ㅠㅠ
// @ts-ignore
const setProperty = (obj: any, path: string, value: number) => {
  const [head, ...rest] = path.split(".");

  if (Array.isArray(obj)) {
    const tmp = [...obj];
    tmp[Number(head)] = rest.length
      ? setProperty(obj[Number(head)], rest.join("."), value)
      : value;
    return [...tmp];
  } else {
    return {
      ...obj,
      [head]: rest.length
        ? setProperty(obj[head], rest.join("."), value)
        : value,
    };
  }
};

export function changeValue(prevObj: object, changesData: IChangeValue[]) {
  let newObj = { ...prevObj };
  changesData.forEach(({ key, value }) => {
    const splitKey = key
      .split("[")
      .join("")
      .split("]")
      .join("")
      .split("'")
      .filter((i) => i !== "")
      .join(".");

    newObj = setProperty(newObj, splitKey, value);
  });

  return newObj;
}
