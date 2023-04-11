import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


:root {
    --primaryColor-1: #27AE60;
    --primaryColor-2: #93D7AF;
    --secundaryColor: #EB5757;

    --greyScale-1: #333333;
    --greyScale-2: #828282;
    --greyScale-3: #E0E0E0;
    --greyScale-4: #F5F5F5;

    --feedBackPalette-negative: #E60000;
    --feedBackPalette-warning: #FFCD07;
    --feedBackPalette-sucess: #168821;
    --feedBackPalette-information: #155BCB;

}

body {
    font-family: 'Inter', sans-serif;
}

input {
    cursor: text;
}

.boxUlResultSearch {
    margin-top: calc(139px + 1rem);

    display: flex;
    flex-direction: column;
}

@media(min-width: 769px) { 

    button {
        cursor: pointer;
    }

    .boxUlResultSearch {
    margin-top: 100px;
}
}
`