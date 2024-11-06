import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface AppLogoProps extends SvgProps {
  size?: number;
  
}

const AppLogo = (props: AppLogoProps) => {
  const { size = 1, ...otherProps } = props;

  const baseWidth = 221;
  const baseHeight = 64;

  const viewBox = `0 0 ${baseWidth} ${baseHeight}`;

  return (
    <Svg
      width={baseWidth * size}
      height={baseHeight * size}
      viewBox={viewBox}
      {...otherProps}
    >
   <Path
        d="M17.051 64.694c-4.693 0-8.706-1.669-12.044-5.001C1.675 56.355.006 52.336.006 47.643V1.59h69.53v46.053c0 4.693-1.669 8.712-5.007 12.044-3.332 3.338-7.345 5.001-12.044 5.001H17.051v.006zM150.675 25.236c0 4.042-1.43 7.49-4.286 10.346-2.861 2.86-6.292 4.291-10.299 4.291h-24.298v23.838H81.15V.694h54.946c4.006 0 7.443 1.43 10.299 4.292 2.861 2.861 4.286 6.292 4.286 10.305v9.95l-.006-.005z"
        fill="#EEE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.842 1.857h54.079c.715 0 .971.489.971 1.216V57.14c0 .727-.256.971-.971.971h-11.945V24.015l-39.447 39.69-9.253-9.258L199.729 15h-34.114V3.074c0-.721.512-1.216 1.233-1.216h-.006z"
        fill="#E20000"
        stroke="#E20000"
        strokeWidth={2.32621}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export default AppLogo;