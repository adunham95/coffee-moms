import { icons } from '../const/icons';

export const eventType = [
	{ id: 'park', title: 'Park', icon: 'playground', checked: true },
	{ id: 'coffee', title: 'Coffee', icon: 'coffeeShop' },
	{ id: 'playground', title: 'Playground', icon: 'playground' },
	{ id: 'dog-park', title: 'Dog Park', icon: 'dogPark' },
	{ id: 'dinner', title: 'Dinner', icon: 'restaurant' },
	{ id: 'splash-pad', title: 'Splash Pad', icon: 'waterslide' },
	{ id: 'other', title: 'Other', icon: 'party' },
];

export function getIcon(id: string): keyof typeof icons {
	const event = eventType.find((e) => e.id === id);
	return (event?.icon || 'party') as keyof typeof icons;
}

export function getEventName(id: string): keyof typeof icons {
	const event = eventType.find((e) => e.id === id);
	return (event?.title || 'Other') as keyof typeof icons;
}
