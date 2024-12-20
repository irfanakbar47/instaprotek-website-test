import React, { ReactNode } from 'react';

export interface IButtonProps {
	type?: "button" | "submit";
	label?: string;
	icon?: React.ReactNode;
	iconPos?: "left" | "right";
	bgColor?: string;
	customStyle?: string;
	onClick?: () => void;
}

export type ICustomImageProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
	sizes?: string;
	style?: React.CSSProperties;
	className?: string;
	priority: boolean;
	loading?: "eager" | "lazy";
	onError?: React.ReactEventHandler<HTMLImageElement>;
	onLoad?: React.ReactEventHandler<HTMLImageElement>;
}