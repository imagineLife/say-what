export type PropsTypes = {
	source: string,
	type: string,
	minInputLength?: number,
	placeholder: string,
	onChangeProp: (event: SyntheticEvent<HTMLButtonElement>) => void
}