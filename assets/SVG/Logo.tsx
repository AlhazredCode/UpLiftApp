import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

interface SvgComponentProps extends SvgProps {
  size?: number;
  fill?: "black" | "white"; 
}

const Logo = (props: SvgComponentProps) => {
  const { size = 1, fill = "black", ...otherProps } = props;

  const baseWidth = 134;
  const baseHeight = 65;

  const viewBox = `0 0 ${baseWidth} ${baseHeight}`;

  return (
    <Svg
      width={baseWidth * size}
      height={baseHeight * size}
      viewBox={viewBox}
      {...otherProps} 
    >
 <G clipPath="url(#clip0_1271_2)">
        <Path
          d="M10.768 38.206c-2.794 0-5.183-.994-7.17-2.978C1.615 33.241.621 30.85.621 28.055V.641h41.39v27.414c0 2.794-.993 5.186-2.98 7.17-1.984 1.987-4.373 2.977-7.17 2.977H10.768v.004zM90.312 14.717c0 2.406-.852 4.458-2.552 6.158-1.703 1.704-3.746 2.555-6.13 2.555H67.164v14.19h-18.24V.108h32.708c2.385 0 4.431.852 6.13 2.555 1.704 1.704 2.552 3.746 2.552 6.135v5.923l-.003-.003z"
          fill="#EEE"
        />
        <Path
          d="M39.138 64.107H7.808c-3.573 0-6.495-2.922-6.495-6.494V42.45h4.328v15.163a2.18 2.18 0 002.167 2.167h31.33v4.327zM47.312 42.45v21.657h-4.328V42.45h4.328zM53.241 42.45h37.825v4.334H53.24V42.45zm37.825 8.665v4.327h-31.33a2.182 2.182 0 00-2.167 2.167v6.495H53.24v-6.495c0-3.572 2.922-6.494 6.495-6.494h31.33zM95.951 42.45h37.825v4.334h-16.749v17.323H112.7V46.784H95.951V42.45z"
          fill="#B1B1B1"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.936.8h32.192c.426 0 .578.29.578.723V33.71c0 .432-.152.578-.578.578h-7.111V13.99l-23.482 23.627-5.508-5.511 23.486-23.482H99.205v-7.1c0-.43.305-.724.734-.724h-.003z"
          fill="#E20000"
          stroke="#E20000"
          strokeWidth={1.38476}
          strokeMiterlimit={10}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1271_2">
          <Path
            fill="#fff"
            transform="translate(.621 .107)"
            d="M0 0H133.155V64H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Logo;