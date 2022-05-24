// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    colors: {
        blue: string;
        darkBlue: string;
        black: string;
        darkGray: string;
        lightGray: string;
        gray: string;
        red: string;
        darkRed: string;
    };
  }
}