import * as React from 'react';

declare module 'react-icons/lib' {
	export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
		children?: React.ReactNode;
		size?: string | number;
		color?: string;
		title?: string;
	}
	export type IconType = (props: IconBaseProps) => JSX.Element;
}

declare module 'react-icons/*' {
	import { IconType } from 'react-icons/lib';
	export const __esModule: any;
	export = {} as { [key: string]: IconType };
}
// react-icons type override removed. No custom declarations here.

