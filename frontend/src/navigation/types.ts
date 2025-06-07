export type RootStackParamList = {
  Login: undefined;   
  Home: undefined;    
  Register?: {        
    email?: string;   
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}