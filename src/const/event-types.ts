import { icons } from '../const/icons';

export const eventType = [
	{ id: 'park', title: 'Park', icon: 'playground' },
	{ id: 'coffee', title: 'Coffee', icon: 'coffeeShop' },
	{ id: 'playground', title: 'Playground', icon: 'playground' },
	{ id: 'dog-park', title: 'Dog Park', icon: 'dogPark' },
	{ id: 'dinner', title: 'Dinner', icon: 'restaurant' },
	{ id: 'splash-pad', title: 'Splash Pad', icon: 'waterslide' },
	{ id: 'other', title: 'Other', checked: true, icon: 'party' },
];

export function getIcon(id: string): keyof typeof icons {
	const event = eventType.find((e) => e.id === id);
	return (event?.icon || 'party') as keyof typeof icons;
}
