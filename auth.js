import { auth, provider } from './firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';

const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('User logged in:', user);
    // Redirect to home page or handle login success
  } catch (error) {
    console.error('Error during login:', error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
    // Redirect to login page or handle logout success
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

export { login, logout };