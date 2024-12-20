export type TInputFieldProps = {
	label: string;
	icon: React.ReactNode;
	id: string;
	type: string;
	ref?: string;
	value: string;
	rows?: number;
	isPhone?: boolean;
	required?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}