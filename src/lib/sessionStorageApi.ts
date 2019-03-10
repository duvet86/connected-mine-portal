interface IToken {
  createdAt: number;
  token: string;
}

export const storeToken = (token: string) => {
  sessionStorage.setItem(
    process.env.TOKEN_KEY!,
    JSON.stringify({
      createdAt: Math.floor(Date.now() / 1000),
      token
    })
  );
};

export const clearToken = () => {
  sessionStorage.removeItem(process.env.TOKEN_KEY!);
};

export const getToken = (): IToken | null => {
  const tokenKey = sessionStorage.getItem(process.env.TOKEN_KEY!);
  if (!tokenKey) {
    return null;
  }

  return JSON.parse(tokenKey);
};
