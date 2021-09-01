import styled from "styled-components";

const Container = styled.div`
  position: relative;
  text-align: center;
  transform: scale(1);
  @media screen and (max-width: 1400px) {
      transform: scale(0.9);
  }

  @media screen and (max-width: 1000px) {
      transform: scale(0.8);
  }

  @media screen and (max-width: 600px) {
      transform: scale(0.7);
  }
  @media screen and (max-width: 500px) {
      margin-right: 50%;
  }
`;

const Logo = () => (
  <Container>
    <svg
      width="433"
      height="124"
      viewBox="0 0 433 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M199.008 118.24C198.336 118.24 197.664 118.192 196.992 118.096C196.32 118 195.792 117.888 195.408 117.76V116.68H198.528C199.872 116.68 200.824 116.44 201.384 115.96C201.96 115.48 202.248 114.72 202.248 113.68C202.248 113.088 202.12 112.6 201.864 112.216C201.608 111.816 201.288 111.496 200.904 111.256C200.52 111.016 199.984 110.736 199.296 110.416C198.464 110.048 197.784 109.688 197.256 109.336C196.744 108.984 196.304 108.48 195.936 107.824C195.584 107.168 195.408 106.32 195.408 105.28C195.408 103.824 195.776 102.744 196.512 102.04C197.264 101.32 198.416 100.96 199.968 100.96C200.64 100.96 201.312 101.008 201.984 101.104C202.656 101.2 203.184 101.312 203.568 101.44V102.52H200.448C199.488 102.52 198.768 102.752 198.288 103.216C197.808 103.68 197.568 104.368 197.568 105.28C197.568 105.92 197.704 106.456 197.976 106.888C198.248 107.304 198.584 107.64 198.984 107.896C199.4 108.152 199.952 108.44 200.64 108.76C201.472 109.16 202.128 109.528 202.608 109.864C203.104 110.2 203.528 110.68 203.88 111.304C204.232 111.912 204.408 112.704 204.408 113.68C204.408 115.264 203.992 116.424 203.16 117.16C202.344 117.88 200.96 118.24 199.008 118.24ZM209.935 118.24C208.751 118.24 207.855 117.968 207.247 117.424C206.639 116.864 206.335 115.856 206.335 114.4C206.335 112.992 206.639 112.024 207.247 111.496C207.855 110.952 208.751 110.68 209.935 110.68C210.575 110.68 211.375 110.76 212.335 110.92V109.84C212.335 108.816 212.119 108.12 211.687 107.752C211.271 107.384 210.607 107.2 209.695 107.2H207.295V106.24C207.679 106.112 208.143 106 208.687 105.904C209.231 105.808 209.727 105.76 210.175 105.76C211.199 105.76 212.015 105.872 212.623 106.096C213.247 106.32 213.711 106.728 214.015 107.32C214.335 107.896 214.495 108.736 214.495 109.84V118H212.695L212.575 117.28H212.455C212.151 117.584 211.775 117.824 211.327 118C210.879 118.16 210.415 118.24 209.935 118.24ZM210.655 116.8C210.943 116.8 211.247 116.752 211.567 116.656C211.887 116.56 212.143 116.448 212.335 116.32V112.12H210.655C209.983 112.12 209.455 112.296 209.071 112.648C208.687 112.984 208.495 113.568 208.495 114.4C208.495 115.296 208.687 115.92 209.071 116.272C209.455 116.624 209.983 116.8 210.655 116.8ZM219.66 118L216.42 106H218.46L221.172 115.96H221.268L223.98 106H226.02L222.78 118H219.66ZM232.258 118.24C231.026 118.24 230.042 118.056 229.306 117.688C228.586 117.304 228.058 116.664 227.722 115.768C227.386 114.856 227.218 113.6 227.218 112C227.218 110.432 227.37 109.192 227.674 108.28C227.994 107.368 228.458 106.72 229.066 106.336C229.674 105.952 230.458 105.76 231.418 105.76C232.378 105.76 233.162 105.952 233.77 106.336C234.378 106.72 234.834 107.368 235.138 108.28C235.458 109.192 235.618 110.432 235.618 112V112.72H229.378C229.378 113.76 229.49 114.576 229.714 115.168C229.938 115.76 230.29 116.184 230.77 116.44C231.266 116.68 231.922 116.8 232.738 116.8H235.138V117.76C234.754 117.888 234.29 118 233.746 118.096C233.202 118.192 232.706 118.24 232.258 118.24ZM233.458 111.28C233.458 109.776 233.266 108.704 232.882 108.064C232.514 107.408 232.026 107.08 231.418 107.08C230.81 107.08 230.314 107.408 229.93 108.064C229.562 108.704 229.378 109.776 229.378 111.28H233.458ZM247.028 118V112.72L242.948 101.2H245.108L248.108 109.72L251.108 101.2H253.268L249.188 112.72V118H247.028ZM258.072 118.24C256.568 118.24 255.448 117.768 254.712 116.824C253.992 115.864 253.632 114.256 253.632 112C253.632 109.744 253.992 108.144 254.712 107.2C255.448 106.24 256.568 105.76 258.072 105.76C259.576 105.76 260.688 106.24 261.408 107.2C262.144 108.144 262.512 109.744 262.512 112C262.512 114.256 262.144 115.864 261.408 116.824C260.688 117.768 259.576 118.24 258.072 118.24ZM258.072 116.92C258.744 116.92 259.288 116.544 259.704 115.792C260.136 115.04 260.352 113.776 260.352 112C260.352 110.224 260.136 108.96 259.704 108.208C259.288 107.456 258.744 107.08 258.072 107.08C257.4 107.08 256.848 107.456 256.416 108.208C256 108.96 255.792 110.224 255.792 112C255.792 113.776 256 115.04 256.416 115.792C256.848 116.544 257.4 116.92 258.072 116.92ZM268.871 118.24C267.639 118.24 266.711 117.984 266.087 117.472C265.463 116.944 265.151 116 265.151 114.64V106H267.311V114.64C267.311 115.424 267.511 115.984 267.911 116.32C268.311 116.64 268.871 116.8 269.591 116.8C269.879 116.8 270.183 116.752 270.503 116.656C270.823 116.56 271.079 116.448 271.271 116.32V106H273.431V118H271.631L271.511 117.28H271.391C271.087 117.584 270.711 117.824 270.263 118C269.815 118.16 269.351 118.24 268.871 118.24ZM276.542 106H278.366L278.486 106.96H278.606C279.374 106.32 280.366 106 281.582 106H282.782V107.8H280.382C279.694 107.8 279.134 107.96 278.702 108.28V118H276.542V106ZM290.341 118L291.301 101.2H293.941L297.853 112.72H297.949L301.861 101.2H304.501L305.461 118H303.301L302.581 105.52H302.461L298.981 115.84H296.821L293.341 105.52H293.221L292.501 118H290.341ZM312.906 118.24C311.674 118.24 310.69 118.056 309.954 117.688C309.234 117.304 308.706 116.664 308.37 115.768C308.034 114.856 307.866 113.6 307.866 112C307.866 110.432 308.018 109.192 308.322 108.28C308.642 107.368 309.106 106.72 309.714 106.336C310.322 105.952 311.106 105.76 312.066 105.76C313.026 105.76 313.81 105.952 314.418 106.336C315.026 106.72 315.482 107.368 315.786 108.28C316.106 109.192 316.266 110.432 316.266 112V112.72H310.026C310.026 113.76 310.138 114.576 310.362 115.168C310.586 115.76 310.938 116.184 311.418 116.44C311.914 116.68 312.57 116.8 313.386 116.8H315.786V117.76C315.402 117.888 314.938 118 314.394 118.096C313.85 118.192 313.354 118.24 312.906 118.24ZM314.106 111.28C314.106 109.776 313.914 108.704 313.53 108.064C313.162 107.408 312.674 107.08 312.066 107.08C311.458 107.08 310.962 107.408 310.578 108.064C310.21 108.704 310.026 109.776 310.026 111.28H314.106ZM318.917 106H320.717L320.837 106.72H320.957C321.277 106.4 321.629 106.16 322.013 106C322.397 105.84 322.845 105.76 323.357 105.76C324.589 105.76 325.485 106.112 326.045 106.816C326.413 106.496 326.877 106.24 327.437 106.048C328.013 105.856 328.533 105.76 328.997 105.76C330.069 105.76 330.893 106.024 331.469 106.552C332.061 107.08 332.357 108.016 332.357 109.36V118H330.197V109.36C330.197 108.592 330.013 108.04 329.645 107.704C329.293 107.368 328.837 107.2 328.277 107.2C327.941 107.2 327.605 107.248 327.269 107.344C326.933 107.44 326.669 107.552 326.477 107.68C326.637 108.16 326.717 108.72 326.717 109.36V118H324.557V109.36C324.557 108.592 324.373 108.04 324.005 107.704C323.653 107.368 323.197 107.2 322.637 107.2C322.365 107.2 322.085 107.248 321.797 107.344C321.509 107.44 321.269 107.552 321.077 107.68V118H318.917V106ZM339.447 118.24C337.943 118.24 336.823 117.768 336.087 116.824C335.367 115.864 335.007 114.256 335.007 112C335.007 109.744 335.367 108.144 336.087 107.2C336.823 106.24 337.943 105.76 339.447 105.76C340.951 105.76 342.063 106.24 342.783 107.2C343.519 108.144 343.887 109.744 343.887 112C343.887 114.256 343.519 115.864 342.783 116.824C342.063 117.768 340.951 118.24 339.447 118.24ZM339.447 116.92C340.119 116.92 340.663 116.544 341.079 115.792C341.511 115.04 341.727 113.776 341.727 112C341.727 110.224 341.511 108.96 341.079 108.208C340.663 107.456 340.119 107.08 339.447 107.08C338.775 107.08 338.223 107.456 337.791 108.208C337.375 108.96 337.167 110.224 337.167 112C337.167 113.776 337.375 115.04 337.791 115.792C338.223 116.544 338.775 116.92 339.447 116.92ZM346.526 106H348.35L348.47 106.96H348.59C349.358 106.32 350.35 106 351.566 106H352.766V107.8H350.366C349.678 107.8 349.118 107.96 348.686 108.28V118H346.526V106ZM354.685 104.32V101.68H356.845V104.32H354.685ZM354.685 118V106H356.845V118H354.685ZM364.656 118.24C363.424 118.24 362.44 118.056 361.704 117.688C360.984 117.304 360.456 116.664 360.12 115.768C359.784 114.856 359.616 113.6 359.616 112C359.616 110.432 359.768 109.192 360.072 108.28C360.392 107.368 360.856 106.72 361.464 106.336C362.072 105.952 362.856 105.76 363.816 105.76C364.776 105.76 365.56 105.952 366.168 106.336C366.776 106.72 367.232 107.368 367.536 108.28C367.856 109.192 368.016 110.432 368.016 112V112.72H361.776C361.776 113.76 361.888 114.576 362.112 115.168C362.336 115.76 362.688 116.184 363.168 116.44C363.664 116.68 364.32 116.8 365.136 116.8H367.536V117.76C367.152 117.888 366.688 118 366.144 118.096C365.6 118.192 365.104 118.24 364.656 118.24ZM365.856 111.28C365.856 109.776 365.664 108.704 365.28 108.064C364.912 107.408 364.424 107.08 363.816 107.08C363.208 107.08 362.712 107.408 362.328 108.064C361.96 108.704 361.776 109.776 361.776 111.28H365.856ZM372.947 118.24C372.499 118.24 372.003 118.192 371.459 118.096C370.915 118 370.451 117.888 370.067 117.76V116.8H372.467C373.571 116.8 374.363 116.656 374.843 116.368C375.339 116.08 375.587 115.584 375.587 114.88C375.587 114.304 375.387 113.864 374.987 113.56C374.603 113.24 374.003 112.92 373.187 112.6C372.483 112.296 371.915 112.024 371.483 111.784C371.067 111.528 370.707 111.168 370.403 110.704C370.099 110.224 369.947 109.616 369.947 108.88C369.947 107.712 370.291 106.904 370.979 106.456C371.667 105.992 372.763 105.76 374.267 105.76C374.715 105.76 375.211 105.808 375.755 105.904C376.299 106 376.763 106.112 377.147 106.24V107.2H374.747C373.883 107.2 373.227 107.336 372.779 107.608C372.331 107.864 372.107 108.288 372.107 108.88C372.107 109.456 372.299 109.904 372.683 110.224C373.083 110.528 373.691 110.84 374.507 111.16C375.211 111.464 375.771 111.744 376.187 112C376.619 112.24 376.987 112.6 377.291 113.08C377.595 113.544 377.747 114.144 377.747 114.88C377.747 115.76 377.579 116.44 377.243 116.92C376.923 117.4 376.419 117.744 375.731 117.952C375.043 118.144 374.115 118.24 372.947 118.24Z"
        fill="#ffffff"
      />
      <path
        d="M198.432 64.568C196.085 64.568 194.464 64.0987 193.568 63.16C192.672 62.264 192.203 61.0907 192.16 59.64C192.16 58.4027 192.395 56.9307 192.864 55.224C193.376 53.4747 193.888 51.8107 194.4 50.232C195.765 46.1787 197.195 42.232 198.688 38.392C200.224 34.552 201.717 30.9253 203.168 27.512C204.661 24.056 205.984 20.92 207.136 18.104C204.235 18.1467 201.717 18.232 199.584 18.36C197.493 18.488 195.573 18.6587 193.824 18.872C192.075 19.0427 190.261 19.2987 188.384 19.64C188.597 17.848 189.429 16.4827 190.88 15.544C192.373 14.5627 194.357 13.88 196.832 13.496C199.307 13.112 202.144 12.92 205.344 12.92C207.861 12.92 210.144 13.0053 212.192 13.176C214.283 13.304 216.288 13.4747 218.208 13.688C220.896 13.944 223.029 14.1147 224.608 14.2C226.229 14.2853 227.381 14.328 228.064 14.328C226.784 15.5227 225.163 16.3973 223.2 16.952C221.28 17.464 219.253 17.784 217.12 17.912C214.987 18.04 212.96 18.104 211.04 18.104C208.992 23.1387 207.115 28.3653 205.408 33.784C203.701 39.2027 202.123 44.5573 200.672 49.848C200.117 51.896 199.648 53.6453 199.264 55.096C198.923 56.504 198.667 57.8053 198.496 59C198.325 60.152 198.24 61.3893 198.24 62.712C198.24 62.9253 198.24 63.16 198.24 63.416C198.283 63.7147 198.347 64.0987 198.432 64.568ZM223.735 60.664C222.156 60.664 220.876 60.2373 219.895 59.384C218.914 58.5733 218.423 57.464 218.423 56.056C218.423 54.8613 218.722 53.5813 219.319 52.216C219.916 50.8507 220.514 49.5067 221.111 48.184C221.751 46.8613 222.071 45.688 222.071 44.664C222.071 43.6827 221.751 42.872 221.111 42.232C220.471 41.5493 219.724 40.9947 218.871 40.568C217.932 42.9147 216.866 45.1973 215.671 47.416C214.519 49.592 213.58 51.2987 212.855 52.536L211.895 50.68C212.492 49.5707 213.282 47.992 214.263 45.944C215.244 43.896 216.183 41.6133 217.079 39.096C216.652 38.6693 216.439 38.0933 216.439 37.368C216.439 36.2587 216.78 35.2133 217.463 34.232C218.146 33.2507 218.807 32.76 219.447 32.76C219.959 32.76 220.322 33.0587 220.535 33.656C220.791 34.2107 220.919 34.5947 220.919 34.808C220.919 35.0213 220.812 35.4053 220.599 35.96C220.428 36.5147 220.3 36.92 220.215 37.176C220.258 37.6453 220.62 38.1147 221.303 38.584C222.028 39.0107 222.839 39.5227 223.735 40.12C224.631 40.7173 225.42 41.464 226.103 42.36C226.786 43.256 227.127 44.3867 227.127 45.752C227.127 46.9893 226.85 48.248 226.295 49.528C225.74 50.808 225.186 52.0027 224.631 53.112C224.076 54.2213 223.799 55.1813 223.799 55.992C223.799 56.5893 223.948 56.9947 224.247 57.208C224.588 57.3787 224.972 57.464 225.399 57.464C226.423 57.464 227.49 57.1653 228.599 56.568C229.708 55.928 230.796 55.1173 231.863 54.136C232.93 53.1547 233.868 52.1307 234.679 51.064C235.49 49.9547 236.108 48.952 236.535 48.056L238.071 49.208C237.26 51.0427 236.087 52.856 234.551 54.648C233.015 56.3973 231.308 57.848 229.431 59C227.554 60.1093 225.655 60.664 223.735 60.664ZM238.729 62.008C237.321 62.008 236.105 61.5387 235.081 60.6C234.014 59.6613 233.481 58.2533 233.481 56.376C233.481 54.8827 233.822 53.2613 234.505 51.512C235.188 49.7627 236.126 48.0347 237.321 46.328C238.516 44.6213 239.881 43.0853 241.417 41.72C242.953 40.312 244.596 39.1813 246.345 38.328C248.094 37.4747 249.844 37.048 251.593 37.048C253.428 37.048 254.985 37.5173 256.265 38.456C257.545 39.3947 258.185 40.632 258.185 42.168C258.185 43.32 257.78 44.152 256.969 44.664C256.158 45.176 255.198 45.3253 254.089 45.112C254.174 44.728 254.238 44.344 254.281 43.96C254.366 43.576 254.409 43.1707 254.409 42.744C254.409 41.8907 254.238 41.1227 253.897 40.44C253.556 39.7573 252.83 39.416 251.721 39.416C250.526 39.416 249.31 39.8213 248.073 40.632C246.836 41.4427 245.641 42.5093 244.489 43.832C243.38 45.112 242.377 46.5413 241.481 48.12C240.585 49.656 239.881 51.1707 239.369 52.664C238.857 54.1573 238.601 55.5013 238.601 56.696C238.601 58.0613 239.092 58.744 240.073 58.744C241.054 58.744 242.142 58.2747 243.337 57.336C244.532 56.3547 245.726 55.1387 246.921 53.688C248.158 52.2373 249.332 50.7653 250.441 49.272C251.55 47.736 252.51 46.4347 253.321 45.368C253.449 45.1547 253.62 45.048 253.833 45.048C254.004 45.0907 254.324 45.1973 254.793 45.368C255.305 45.496 255.774 45.7093 256.201 46.008C256.628 46.3067 256.841 46.6907 256.841 47.16C256.841 47.7147 256.542 48.4827 255.945 49.464C255.348 50.4027 254.729 51.4267 254.089 52.536C253.492 53.6453 253.193 54.6693 253.193 55.608C253.193 56.1627 253.342 56.696 253.641 57.208C253.94 57.6773 254.43 57.912 255.113 57.912C256.137 57.912 257.566 57.1653 259.401 55.672C261.278 54.136 263.177 51.5547 265.097 47.928L266.313 49.144C264.734 52.6427 262.772 55.48 260.425 57.656C258.078 59.832 255.71 60.92 253.321 60.92C251.572 60.92 250.27 60.3653 249.417 59.256C248.564 58.1467 248.094 56.952 248.009 55.672V55.352C246.302 57.4 244.724 59.0213 243.273 60.216C241.865 61.4107 240.35 62.008 238.729 62.008ZM268.319 61.496C266.74 61.496 265.631 60.7707 264.991 59.32C264.393 57.912 264.095 56.0773 264.095 53.816C264.095 53.3467 264.116 52.5147 264.159 51.32C264.201 50.0827 264.265 48.376 264.351 46.2C264.393 44.92 264.521 44.0453 264.735 43.576C264.991 43.1067 265.673 42.872 266.783 42.872C267.807 42.872 268.404 43.0853 268.575 43.512C268.788 43.896 268.895 44.7067 268.895 45.944C268.895 47.224 268.831 48.5893 268.703 50.04C268.617 51.4907 268.575 52.8987 268.575 54.264C268.575 55.5867 268.639 56.568 268.767 57.208C268.895 57.8053 269.215 58.104 269.727 58.104C270.495 58.104 271.327 57.6987 272.223 56.888C273.119 56.0347 274.015 54.968 274.911 53.688C275.849 52.3653 276.724 50.9573 277.535 49.464C278.388 47.928 279.135 46.456 279.775 45.048C279.86 42.1467 280.201 40.2053 280.799 39.224C281.396 38.2427 282.164 37.752 283.103 37.752C284.169 37.752 284.895 38.0933 285.279 38.776C285.663 39.4587 285.855 40.056 285.855 40.568C285.855 41.208 285.684 41.784 285.343 42.296C285.001 42.808 284.66 43.512 284.319 44.408C283.977 45.304 283.807 46.6693 283.807 48.504C283.807 49.1013 283.849 49.7627 283.935 50.488C284.063 51.1707 284.319 51.768 284.703 52.28C285.129 52.7493 285.748 52.984 286.559 52.984C287.412 52.984 288.223 52.6427 288.991 51.96C289.801 51.2347 290.655 49.9973 291.551 48.248L292.255 48.824C291.273 51.1707 290.164 52.8133 288.927 53.752C287.732 54.6907 286.58 55.16 285.471 55.16C284.063 55.16 282.911 54.6053 282.015 53.496C281.161 52.344 280.5 50.9147 280.031 49.208C279.007 51.128 277.833 53.0267 276.511 54.904C275.231 56.7813 273.887 58.3387 272.479 59.576C271.071 60.856 269.684 61.496 268.319 61.496ZM297.257 61.816C294.526 61.816 292.414 61.0693 290.921 59.576C289.47 58.1253 288.745 56.2907 288.745 54.072C288.745 52.1947 289.214 50.2107 290.153 48.12C291.134 45.9867 292.435 44.0027 294.057 42.168C295.678 40.2907 297.47 38.776 299.433 37.624C301.395 36.472 303.358 35.896 305.321 35.896C306.43 35.896 307.475 36.1947 308.457 36.792C309.481 37.3467 309.993 38.4773 309.993 40.184C309.993 41.8053 309.523 43.32 308.585 44.728C307.646 46.136 306.387 47.3947 304.809 48.504C303.23 49.6133 301.481 50.5307 299.561 51.256C297.683 51.9387 295.785 52.3867 293.865 52.6C293.822 52.7707 293.779 52.9627 293.737 53.176C293.737 53.3467 293.737 53.6453 293.737 54.072C293.737 54.2853 293.758 54.6693 293.801 55.224C293.886 55.736 294.078 56.2907 294.377 56.888C294.675 57.4853 295.166 57.9973 295.849 58.424C296.531 58.8507 297.47 59.064 298.665 59.064C300.457 59.064 302.249 58.5733 304.041 57.592C305.875 56.568 307.582 55.224 309.161 53.56C310.782 51.896 312.126 50.04 313.193 47.992L314.473 49.016C313.321 51.576 311.827 53.816 309.993 55.736C308.201 57.656 306.195 59.1493 303.977 60.216C301.801 61.2827 299.561 61.816 297.257 61.816ZM294.569 50.232C295.678 50.104 296.915 49.72 298.281 49.08C299.646 48.44 300.947 47.6293 302.185 46.648C303.465 45.6667 304.51 44.6 305.321 43.448C306.131 42.2533 306.537 41.0587 306.537 39.864C306.537 39.3947 306.451 39.0747 306.281 38.904C306.11 38.7333 305.833 38.648 305.449 38.648C304.467 38.648 303.443 39.0107 302.377 39.736C301.31 40.4187 300.265 41.336 299.241 42.488C298.217 43.5973 297.299 44.8347 296.489 46.2C295.678 47.5653 295.038 48.9093 294.569 50.232ZM317.149 60.92C315.144 60.92 313.736 60.2587 312.925 58.936C312.157 57.5707 311.773 55.9707 311.773 54.136C311.773 52.0453 312.157 49.592 312.925 46.776C313.693 43.96 314.696 41.016 315.933 37.944C317.213 34.8293 318.6 31.8 320.093 28.856C321.629 25.8693 323.165 23.1813 324.701 20.792C326.237 18.4027 327.645 16.504 328.925 15.096C330.248 13.6453 331.314 12.92 332.125 12.92C332.68 12.92 333.149 13.2187 333.533 13.816C333.917 14.3707 334.216 15.0533 334.429 15.864C334.685 16.632 334.813 17.3573 334.813 18.04C334.813 19.192 334.514 20.7067 333.917 22.584C333.362 24.4187 332.552 26.4453 331.485 28.664C330.461 30.8827 329.224 33.1653 327.773 35.512C326.365 37.816 324.786 40.0133 323.037 42.104C321.33 44.1947 319.496 46.008 317.533 47.544C317.362 48.6107 317.192 49.6773 317.021 50.744C316.893 51.768 316.829 52.7067 316.829 53.56C316.829 55.096 317.085 56.2267 317.597 56.952C318.109 57.6347 318.77 57.976 319.581 57.976C320.648 57.976 321.736 57.4853 322.845 56.504C323.997 55.48 325.085 54.2 326.109 52.664C327.176 51.0853 328.093 49.464 328.861 47.8L330.397 48.632C328.562 52.4293 326.514 55.4373 324.253 57.656C321.992 59.832 319.624 60.92 317.149 60.92ZM318.685 43.576C320.477 41.6133 322.162 39.4373 323.741 37.048C325.32 34.6587 326.706 32.2907 327.901 29.944C329.138 27.5547 330.098 25.4 330.781 23.48C331.464 21.5173 331.826 20.0027 331.869 18.936V18.744C331.528 18.744 330.973 19.2347 330.205 20.216C329.48 21.1547 328.605 22.456 327.581 24.12C326.557 25.784 325.49 27.6827 324.381 29.816C323.314 31.9493 322.269 34.2107 321.245 36.6C320.264 38.9467 319.41 41.272 318.685 43.576ZM340.005 32.056C339.194 32.056 338.447 31.864 337.765 31.48C337.125 31.0533 336.805 30.4133 336.805 29.56C336.805 28.536 337.359 27.6613 338.469 26.936C339.578 26.2107 340.73 25.848 341.925 25.848C342.693 25.848 343.333 26.0187 343.845 26.36C344.399 26.7013 344.677 27.32 344.677 28.216C344.677 29.112 344.186 29.9867 343.205 30.84C342.223 31.6507 341.157 32.056 340.005 32.056ZM332.453 60.92C330.575 60.92 329.167 60.3653 328.229 59.256C327.29 58.1467 326.821 56.8027 326.821 55.224C326.821 54.2427 326.991 53.0053 327.333 51.512C327.674 50.0187 328.143 48.4613 328.741 46.84C329.381 45.176 330.106 43.6187 330.917 42.168C331.727 40.7173 332.602 39.544 333.541 38.648C334.479 37.7093 335.418 37.24 336.357 37.24C336.869 37.24 337.317 37.4107 337.701 37.752C338.085 38.0507 338.277 38.4987 338.277 39.096C338.277 39.6507 337.935 40.4827 337.253 41.592C336.613 42.7013 335.845 43.9813 334.949 45.432C334.095 46.8827 333.327 48.3973 332.645 49.976C332.005 51.512 331.685 52.984 331.685 54.392C331.685 55.7573 331.919 56.6747 332.389 57.144C332.901 57.5707 333.626 57.784 334.565 57.784C336.015 57.784 337.594 57.0587 339.301 55.608C341.007 54.1573 342.778 51.6187 344.613 47.992L345.573 49.016C344.079 52.7707 342.181 55.6933 339.877 57.784C337.573 59.8747 335.098 60.92 332.453 60.92ZM342.894 76.92C342.424 76.92 341.87 76.7707 341.23 76.472C340.547 76.1733 339.971 75.576 339.502 74.68C338.99 73.8267 338.734 72.5253 338.734 70.776C338.734 68.9413 339.054 66.5307 339.694 63.544C340.291 60.6 341.144 57.336 342.254 53.752C343.32 50.1253 344.579 46.4133 346.03 42.616C347.523 38.8187 349.102 35.1707 350.766 31.672C352.472 28.1307 354.222 24.952 356.014 22.136C357.848 19.32 359.662 17.08 361.454 15.416C363.246 13.752 364.974 12.92 366.638 12.92C367.747 12.92 368.472 13.2613 368.814 13.944C369.155 14.584 369.326 15.3307 369.326 16.184C369.326 18.0187 368.814 20.024 367.79 22.2C366.808 24.376 365.486 26.5733 363.822 28.792C362.158 30.968 360.28 33.0373 358.19 35C356.142 36.9627 354.03 38.648 351.854 40.056C351.683 40.4827 351.512 40.9093 351.342 41.336C351.171 41.7627 351 42.1893 350.83 42.616C351.299 42.7867 351.662 43.0853 351.918 43.512C352.216 43.9387 352.387 44.3867 352.43 44.856C352.771 46.6907 353.112 48.3333 353.454 49.784C353.795 51.192 354.307 52.3013 354.99 53.112C355.715 53.9227 356.739 54.328 358.062 54.328C359.555 54.328 360.878 53.7733 362.03 52.664C363.182 51.5547 364.355 49.9973 365.55 47.992L366.958 49.016C365.592 51.7467 364.056 53.752 362.35 55.032C360.643 56.2693 359.107 56.888 357.742 56.888C356.291 56.888 354.776 56.312 353.198 55.16C353.155 57.8053 352.835 60.408 352.238 62.968C351.683 65.5707 350.915 67.9173 349.934 70.008C348.952 72.0987 347.843 73.7627 346.606 75C345.411 76.28 344.174 76.92 342.894 76.92ZM353.71 35.576C356.312 33.144 358.531 30.776 360.366 28.472C362.2 26.168 363.587 24.1413 364.526 22.392C365.507 20.6 365.998 19.3413 365.998 18.616C365.998 18.2747 365.827 18.104 365.486 18.104C364.462 18.104 363.288 18.8933 361.966 20.472C360.643 22.008 359.278 24.0987 357.87 26.744C356.462 29.3893 355.075 32.3333 353.71 35.576ZM344.686 72.952C345.283 72.952 345.923 72.3333 346.606 71.096C347.288 69.8587 347.928 68.3013 348.526 66.424C349.123 64.5467 349.614 62.584 349.998 60.536C350.382 58.5307 350.574 56.7387 350.574 55.16C350.574 53.9227 350.424 52.8347 350.126 51.896C349.87 50.9147 349.4 49.8267 348.718 48.632C347.224 53.0693 346.008 57.208 345.07 61.048C344.131 64.888 343.662 67.9387 343.662 70.2C343.662 72.0347 344.003 72.952 344.686 72.952ZM367.155 76.92C366.088 76.92 365.085 76.5787 364.147 75.896C363.251 75.256 362.803 74.2107 362.803 72.76C362.803 71.3947 363.208 70.1573 364.019 69.048C364.829 67.9813 365.875 66.9787 367.155 66.04C368.435 65.144 369.8 64.312 371.251 63.544C372.744 62.8187 374.173 62.136 375.539 61.496C376.008 60.2587 376.52 58.7013 377.075 56.824C377.672 54.904 378.184 53.1333 378.611 51.512C377.288 53.3467 375.88 54.968 374.387 56.376C372.893 57.784 371.229 58.488 369.395 58.488C368.627 58.488 367.816 58.3387 366.963 58.04C366.109 57.6987 365.384 57.144 364.787 56.376C364.232 55.5653 363.955 54.4987 363.955 53.176C363.955 52.0667 364.147 50.7227 364.531 49.144C364.957 47.5653 365.469 46.0293 366.067 44.536C366.707 43 367.368 41.7413 368.051 40.76C368.733 39.736 369.331 39.224 369.843 39.224C370.099 39.224 370.461 39.3307 370.931 39.544C371.443 39.7147 371.933 39.9707 372.403 40.312C372.872 40.6107 373.171 40.952 373.299 41.336C372.915 41.848 372.488 42.5947 372.019 43.576C371.549 44.5147 371.101 45.5813 370.675 46.776C370.248 47.928 369.885 49.0587 369.587 50.168C369.331 51.2773 369.203 52.2373 369.203 53.048C369.203 53.688 369.331 54.2427 369.587 54.712C369.843 55.1813 370.333 55.416 371.059 55.416C371.997 55.416 372.957 55.032 373.939 54.264C374.963 53.496 375.944 52.5147 376.883 51.32C377.864 50.1253 378.739 48.9093 379.507 47.672C379.592 47.3733 379.677 46.904 379.763 46.264C379.848 45.624 379.997 44.9627 380.211 44.28C380.424 43.5547 380.787 42.8933 381.299 42.296C381.853 41.6987 382.621 41.4 383.603 41.4C383.944 41.4 384.264 41.4213 384.563 41.464C384.861 41.5067 385.224 41.5707 385.651 41.656C385.651 42.296 385.416 43.5547 384.947 45.432C384.52 47.2667 383.944 49.4 383.219 51.832C382.493 54.264 381.683 56.696 380.787 59.128C382.579 58.4027 384.435 57.208 386.355 55.544C388.317 53.8373 389.896 51.4267 391.091 48.312L392.179 49.208C391.539 51.3413 390.557 53.1973 389.235 54.776C387.955 56.3547 386.504 57.6987 384.883 58.808C383.261 59.9173 381.619 60.8347 379.955 61.56C378.803 64.3333 377.544 66.8933 376.179 69.24C374.856 71.5867 373.448 73.4427 371.955 74.808C370.461 76.216 368.861 76.92 367.155 76.92ZM366.515 74.552C367.325 74.552 368.456 73.6987 369.907 71.992C371.357 70.2853 372.829 67.7253 374.323 64.312C372.957 64.9947 371.571 65.784 370.163 66.68C368.797 67.6187 367.645 68.6 366.707 69.624C365.768 70.648 365.299 71.6933 365.299 72.76C365.299 73.1867 365.384 73.592 365.555 73.976C365.768 74.36 366.088 74.552 366.515 74.552Z"
        fill="#ffffff"
      />
      <path d="M141 83H432" stroke="#0FA3B1" strokeWidth="0.5" />
      <circle cx="62" cy="62" r="61" fill="#12BFCE" />
      <circle cx="62" cy="62" r="61" stroke="#12BFCE" strokeWidth="2" />
      <circle
        cx="62"
        cy="62"
        r="61"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
      />
      <path
        d="M71.2035 29.0659C69.8218 29.0659 68.7124 30.151 68.7124 31.5016V39.9454C68.7124 41.2964 69.8218 42.4214 71.2035 42.4214H75.7286V49.2414H29.9753C28.5946 49.2414 27.4849 50.3274 27.4849 51.6771V85.4121C27.4849 86.7631 28.5946 87.8478 29.9759 87.8478H92.2541C93.6344 87.8478 94.7438 86.7631 94.7438 85.4121V51.6771C94.7438 50.3274 93.6344 49.2414 92.2541 49.2414H87.7688V42.4214H92.2541C93.6344 42.4214 94.7438 41.2964 94.7438 39.9454V31.5016C94.7438 30.151 93.6344 29.0659 92.2541 29.0659H71.2042H71.2035ZM39.2341 41.7719C35.3812 41.7719 32.2594 44.8247 32.2594 48.5919H46.2094C46.2094 44.8247 43.0872 41.7719 39.2344 41.7719H39.2341Z"
        stroke="#12BFCE"
        strokeWidth="8.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.7641 40.8533V51.7107H75.7086V40.8533"
        fill="#12BFCE"
      />
      <path
        d="M87.7641 40.8533V51.7107H75.7086V40.8533"
        stroke="#F2F7F2"
        strokeWidth="3.125"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.2215 29.0647C69.8398 29.0647 68.7278 30.152 68.7278 31.5028V39.9661C68.7278 41.3171 69.8398 42.4044 71.2215 42.4044H92.2501C93.6319 42.4044 94.7439 41.3171 94.7439 39.9661V31.5028C94.7439 30.152 93.6319 29.0647 92.2501 29.0647H71.2215Z"
        fill="#12BFCE"
        stroke="#F2F7F2"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.2432 48.6084C32.2432 44.8412 35.3701 41.7832 39.2232 41.7832C43.0761 41.7832 46.2022 44.8412 46.2022 48.6084"
        fill="#F2F7F2"
      />
      <path
        d="M32.2432 48.6084C32.2432 44.8412 35.3701 41.7832 39.2232 41.7832C43.0761 41.7832 46.2022 44.8412 46.2022 48.6084"
        stroke="#F2F7F2"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9782 49.228C28.5969 49.228 27.4849 50.3153 27.4849 51.6663V85.4117C27.4849 86.7627 28.5969 87.85 29.9782 87.85H92.251C93.6327 87.85 94.7447 86.7627 94.7447 85.4117V51.6663C94.7447 50.3153 93.6327 49.228 92.251 49.228H29.9782Z"
        fill="#12BFCE"
        stroke="#F2F7F2"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.4716 68.5384C75.4716 76.2872 69.04 82.5759 61.1151 82.5759C53.1902 82.5759 46.7585 76.2872 46.7585 68.5384C46.7585 60.7909 53.1902 54.5022 61.1151 54.5022C69.04 54.5022 75.4716 60.7909 75.4716 68.5384Z"
        fill="#12BFCE"
        stroke="#F2F7F2"
        strokeWidth="1.875"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.9463 68.5381C67.9463 72.2261 64.8866 75.2191 61.1148 75.2191C57.343 75.2191 54.2833 72.2261 54.2833 68.5381C54.2833 64.8514 57.343 61.8584 61.1148 61.8584C64.8866 61.8584 67.9463 64.8514 67.9463 68.5381Z"
        fill="#F2F7F2"
        stroke="#F2F7F2"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="62"
          y1="0"
          x2="62"
          y2="124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.0001" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </Container>
);
export default Logo;
