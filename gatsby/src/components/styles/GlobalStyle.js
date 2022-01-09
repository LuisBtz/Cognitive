import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    
    :root {
      --black: #000000;
      --white: #FFFFFF;
      --purple: #5E45FF;
      overflow-wrap: break-word;
    }
    * {
      box-sizing: border-box;
    }
    body {
        background-color: var(--white);
        font-family: var(--regular);
        font-size: 13px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
        transition: all .125s ease;
        width: 100vw;
        overflow-x: hidden;
        position: relative;
    }
body.dark {
  background-color: black;
  color: white;
}

body.dark header a {
  filter: invert(1);
}

body.dark svg {
  fill: white;
}

body, html {
  height: 100%;
}


.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

.clearfix {
  display: inline-block;
}

html[xmlns] .clearfix {
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.full {
  width: 100% !important;
}

.padding {
  padding: 0 50px;
}
`