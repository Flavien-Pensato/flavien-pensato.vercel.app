export const howOldAmI = () => {
  const now = new Date();
  const birthdate = new Date(1994, 9, 24);

  return Math.floor((now - birthdate) / 31536000000);
};

export const forHowManyYearILiveInLyon = () => {
  const now = new Date();
  const date = new Date(2017, 0, 0);

  return Math.floor((now - date) / 31536000000);
};

export const forHowManyYearIWorkAtUnow = () => {
  const now = new Date();
  const date = new Date(2019, 3, 0);

  return Math.floor((now - date) / 31536000000);
};
