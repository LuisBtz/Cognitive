import { createGlobalStyle } from 'styled-components';

import acMedWoff from '../../assets/fonts/AcuminPro-Medium.woff';
import acMedWoff2 from '../../assets/fonts/AcuminPro-Medium.woff2';

import acBolWoff from '../../assets/fonts/AcuminPro-Bold.woff';
import acBolWoff2 from '../../assets/fonts/AcuminPro-Bold.woff2';

export const Typography = createGlobalStyle`

@font-face {
    font-family: 'Acumin Pro Medium';
    src: url('${acMedWoff2}') format('woff2'),
        url('${acMedWoff}') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Acumin Pro Bold';
    src: url('${acBolWoff2}') format('woff2'),
        url('${acBolWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'Acumin Pro Medium', sans-serif;
    --bold: 'Acumin Pro Bold', sans-serif;
}
a {
    color: var(--black);
}
`