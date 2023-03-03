import { User } from "../types/posts.types";

const totalUsers: User[] = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];


export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return totalUsers;
}

export function addNewUser(username: string): boolean {

	const maxUserID = totalUsers.length;

	try {
		const newUser: User = {
			id: (maxUserID + 1).toString(),
			name: username,
			creationDate: new Date(),
		};

		totalUsers.push(newUser);
		return true;

	} catch (e) {

		return false;
	}
}
