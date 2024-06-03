interface Toast {
	id: string;
	type: string;
	message: string;
	dismissible?: boolean;
	timeout?: number;
}
