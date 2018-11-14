export const LOGGED_IN = "LOGGED_IN";
export const login = (email, password) => {
  setTimeout(() => {
    return ({
      type: LOGGED_IN,
      loggedin: true,
      email,
      password
    });
  }, 5000);
}