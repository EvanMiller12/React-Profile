// need to get user vals from local storage if avail and add here
export const currentUser = {
  isAuthenticated: false,
  email: null,
  password: null,
  fullName: null,
  phone: null,
  favColor: null,
  get(email) {
    const userJsonString = localStorage.getItem(email);
    const user = JSON.parse(userJsonString);
    return user;
  },
  async signin(email, password) {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    currentUser.isAuthenticated = true;
    currentUser.email = email;
    currentUser.password = password;

    const user = JSON.stringify(currentUser);
    localStorage.setItem(email, user);
    sessionStorage.setItem("isLoggedIn", true);
  },
  async signout() {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    currentUser.isAuthenticated = false;
    currentUser.email = null;
    currentUser.password = null;
    sessionStorage.removeItem("isLoggedIn");
  },
  async update(email, password, phone, fullName, favColor) {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    currentUser.email = email;
    currentUser.password = password;
    currentUser.phone = phone;
    currentUser.fullName = fullName;
    currentUser.favColor = favColor;

    const user = JSON.stringify(currentUser);
    localStorage.setItem(email, user);
  },
  async delete(email) {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    localStorage.removeItem(email);
    currentUser.email = null;
    currentUser.password = null;
    currentUser.phone = null;
    currentUser.fullName = null;
    currentUser.favColor = null;
    currentUser.isAuthenticated = false;
    sessionStorage.removeItem("isLoggedIn");
  }
};
