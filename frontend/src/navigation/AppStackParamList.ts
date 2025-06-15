import { Home, Login, SignUp } from '../pages';

export type AppStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export const stackRoutes: { name: keyof AppStackParamList; component: React.ComponentType<any> }[] = [
  { name: 'Login', component: Login },
  { name: 'SignUp', component: SignUp },
  { name: 'Home', component: Home },
];

