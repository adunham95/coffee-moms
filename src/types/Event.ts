import type { EStatus } from './EStatus';

export interface Event {
	id: number;
	title: string;
	recipient: string;
	type: string;
	status: EStatus;
}
