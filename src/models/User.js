export default class User {
  static async getByCredentials(email, password) {
    const users = {
      'admin@example.com': { id: '1', password: 'password123' }
    };
    
    const user = users[email];
    if (user && user.password === password) {
      return { id: user.id, email };
    }
    return null;
  }
}