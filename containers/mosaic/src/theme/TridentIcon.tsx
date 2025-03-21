import * as React from "react";
import type { ReactElement } from "react";

import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

function TridentIcon(props: SvgIconProps): ReactElement {
	return (
		<SvgIcon {...props}>
			<defs>
				<path
					d="M12.79 19.53c2.95 2.14 6.75 2.73 10.21 1.59-.73-3.58-3.15-6.6-6.5-8.08-.54 2.49-1.84 4.76-3.71 6.49z"
					id="trident_svg__a"
				/>
				<path
					d="M11.05 19.53c-1.88-1.73-3.18-4-3.72-6.49-3.35 1.49-5.77 4.5-6.5 8.09 3.47 1.14 7.27.54 10.22-1.6z"
					id="trident_svg__b"
				/>
				<path
					d="M11.92 18.58c1.68-1.55 2.84-3.59 3.32-5.82a10.94 10.94 0 00-6.65 0c.48 2.23 1.64 4.27 3.33 5.82z"
					id="trident_svg__c"
				/>
				<path
					d="M8.14 10.38c0 .38.02.77.06 1.15 2.42-.77 5.01-.77 7.43 0 .04-.38.07-.77.07-1.15 0-3.22-1.37-6.3-3.78-8.44a11.254 11.254 0 00-3.78 8.44z"
					id="trident_svg__d"
				/>
			</defs>
			<use xlinkHref="#trident_svg__a" fill="#8dc63f" />
			<use
				xlinkHref="#trident_svg__a"
				fillOpacity={0}
				stroke="#000"
				strokeOpacity={0}
			/>
			<use xlinkHref="#trident_svg__b" fill="#00a4e4" />
			<use
				xlinkHref="#trident_svg__b"
				fillOpacity={0}
				stroke="#000"
				strokeOpacity={0}
			/>
			<g>
				<use xlinkHref="#trident_svg__c" fill="#bebebe" />
				<use
					xlinkHref="#trident_svg__c"
					fillOpacity={0}
					stroke="#000"
					strokeOpacity={0}
				/>
			</g>
			<g>
				<use xlinkHref="#trident_svg__d" fill="#fdb924" />
				<use
					xlinkHref="#trident_svg__d"
					fillOpacity={0}
					stroke="#000"
					strokeOpacity={0}
				/>
			</g>
		</SvgIcon>
	);
}

export default TridentIcon;
