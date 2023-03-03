import { sendUserToServer } from "../../../api/send_adduser_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addNewUser() {
	clear();

	const username = await prompt("What is the user name? ");
    
	printNewLine();
	print(`📨 Adding a user "${username}"...`);

	const success = await sendUserToServer(username);

	if (success === true) print("🥳 user added successfully!");
	else print("😵 user WAS NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
