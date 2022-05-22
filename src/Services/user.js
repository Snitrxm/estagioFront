import Api from'./api'

const UserService = {
  register: (params) => Api.post('user/register', params),
  login: async (params) => {
    const response = await Api.post('user/login', params);
    localStorage.setItem('user', JSON.stringify(response.data));
  },
  createProduct: (params) => Api.post('product/create', params),
  allProducts: (params) => {
    return Api.post('product/all', params);
  },
  sellProduct: (id, params) => {
    return Api.put(`product/sell/${id}`, params);
  },
  editProduct: (id, params) => {
    return Api.put(`product/edit/${id}`, params);
  },
  deleteProduct: (id) => {
    return Api.delete(`product/delete/${id}`);
  },
  searchProduct: (productName) => Api.get(`product/search/${productName}`),
}

export default UserService