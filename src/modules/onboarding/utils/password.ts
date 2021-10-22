export const isStrongPassword = (value: string | undefined) => {
  const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  return !!value ? regExp.test(value) : false;
};
