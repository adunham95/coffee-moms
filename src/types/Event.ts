import type { EStatus } from './EStatus';

export interface Event {
	title: string;
	recipient: string;
	type: string;
	status: EStatus;
}
