import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      palleteType: PalleteType;
      primary: string;
      secondary: string;
    };
  }
}
