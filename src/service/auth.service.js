import request from "./request";

const ENDPOINT = "api/user";
const BOOK="api/book"

const Allbook =(data)=>{
  const url = `${BOOK}/all`;
  return request.post(url, data).then((res) => {
    return res;
  });
}

const login = async (data) => {
  const url = `${ENDPOINT}/login`;
  return request.post(url, data).then((res) => {
    return res;
  });
};

const create = async (data) => {
  const url = `${ENDPOINT}`;
  return request.post(url, data).then((res) => {
    return res;
  });
};

const authService = {
  login,
  create,
  Allbook,
};

export default authService;
