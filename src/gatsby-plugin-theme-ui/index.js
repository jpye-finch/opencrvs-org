export default {
  breakpoints: ["37.5em", "48em", "64em"],
  sizes: {
    container: "940px"
  },
  layout: {
    container: {
      p: [3, 3, 0],
      mt: 5,
      display: "flex",
      flexDirection: "column",
      minHeight: 256
    }
  },
  space: [0, 4, 8, 16, 24, 48, 64, 128, 256],
  fonts: {
    body: "Noto Sans, serif",
    heading: "Noto Sans, serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 19, 24, 32, 44, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#111111",
    subHeading: "#4F4F4F",
    background: "#FFFEFA",
    primary: "#4C68C1",
    secondary: "#5E93ED",
    nightshade: {
      backgroundImage:
        "linear-gradient(0deg, rgba(60,85,163,1) 100%, rgba(76,104,193,1) 100%);"
    },
    muted: "#F3f3f3"
  },
  links: {
    bold: {
      fontWeight: "bold"
    },
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none"
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "Primary",
      "&:hover": {
        backgroundImage:
          "linear-gradient(0deg, rgba(60,85,163,1) 100%, rgba(76,104,193,1) 100%);"
      }
    },
    secondary: {
      color: "background",
      bg: "secondary"
    },
    icon: {
      fill: "primary",
      height: "40px",
      width: "40px",
      "&:hover": {
        transition: "background 120ms ease-in 0s",
        borderRadius: "100%",
        backgroundColor: "muted"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      maxWidth: "1260px",
      ml: "auto",
      mr: "auto",
      float: "none"
    },
    h1: {
      marginBlockStart: "0.4em",
      marginBlockEnd: "0.4em",
      color: "text",
      fontFamily: "Noto Sans, serif",
      lineHeight: "1.25",
      fontWeight: 800,
      fontSize: [5, 6, 6, 6]
    },
    h2: {
      marginBlockStart: "0.8em",
      marginBlockEnd: "0.8em",
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4, 5, 5, 5]
    },
    h3: {
      marginBlockStart: "0.8em",
      marginBlockEnd: "0.8em",
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h4: {
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      color: "subHeading",
      fontFamily: "heading",
      lineHeight: "1.5",
      fontWeight: "400",
      fontSize: [2, 3, 3]
    },
    h5: {
      color: "subHeading",
      fontFamily: "heading",
      lineHeight: "1.5",
      fontWeight: "400",
      fontSize: [1, 2, 2]
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "secondary"
    },
    navlink: {
      fontWeight: "bold",
      display: "flex",
      width: "auto",
      padding: "4px 8px",
      fontSize: 1,
      cursor: "pointer",
      borderRadius: "2px",
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        transition: "background 120ms ease-in 0s",
        backgroundColor: "muted"
      },
      "&.active": {
        color: "primary"
      }
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    hr: {
      color: "muted",
      marginTop: 4,
      marginBottom: 4
    },
    blockquote: {
      borderLeft: "3px solid #000",
      p: {
        fontSize: 3
      }
    },
    messages: {
      bg: "background",
      borderLeftWidth: 0,
      fontSize: 3,
      textAlign: "center",
      color: "subHeading",
      pt: 4,
      pl: 4,
      pr: 4,
      pb: 2
    }
  }
};
