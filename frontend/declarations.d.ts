// Crie um arquivo declarations.d.ts na raiz do seu projeto
declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}