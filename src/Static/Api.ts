const AllAPIs = {
  Shoes: "https://63f74ea0833c7c9c60810d71.mockapi.io/Shoes",
  OneShoe: "https://63f74ea0833c7c9c60810d71.mockapi.io/Shoes/",
  DeleteShoe: "https://63f74ea0833c7c9c60810d71.mockapi.io/Shoes/",
} as const;
type APIs = keyof typeof AllAPIs;

export const fetchData = (api: APIs, extension?: string, req?: RequestInit) => {
  return async () => {
    const res = await fetch(AllAPIs[api] + (extension || ""), { ...req });
    return res.json();
  };
};
