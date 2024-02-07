import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyARGmJ-vel8a1paSv2ikxOes0hDVnBq9P4",
  cx: "930486410b038417b",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};

{
  /** 

AIzaSyD6vBUnfRhwdFYpM8VPN105IsERuIeVYeg
77acd064d00994ec5

*/
}
