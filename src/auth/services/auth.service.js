const AuthService = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = {
        users: [],
        currentUser: null,
        registerUser(_username, _password) {
          const index = this.users.findIndex(
            user => user.username === _username,
          );

          if (index < 0) {
            const currentUser = {username: _username, password: _password};
            this.users.push(currentUser);
            this.currentUser = currentUser;

            return {
              status: true,
              message: 'user was created',
            };
          } else {
            return {
              status: false,
              message: 'username has exist',
            };
          }
        },
        logIn(_username, _password) {
          if (this.users.length <= 0) {
            return false;
          }
          for (var i = 0; i < this.users.length; i++) {
            if (
              this.users[i].username === _username &&
              this.users[i].password === _password
            ) {
              this.currentUser = this.users[i];
              i = this.users.length;
              return true;
            }
          }
          return false;
        },
        logOut() {
          this.currentUser = null;
          return true;
        },
        isLogin() {
          return !!this.currentUser;
        },
      };
    }
    return this._instance;
  },
};

export default AuthService;
