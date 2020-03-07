const AuthService = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = {
        users: [],
        currentUser: null,
        registerUser(user) {
          this.users.push(user);
        },
        logIn() {},
        isLogin() {
          return !!this.currentUser;
        },
      };
    }
    return this._instance;
  },
};

export default AuthService;
