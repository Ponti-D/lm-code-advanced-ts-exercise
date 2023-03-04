import { Post } from "../../../../types/post";
import { sendPostToServer } from "../../../api/send_addpost_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addNewPost() {
	clear();

	const title = await prompt("What is the post title? ");
    const posttext =await prompt("What is the post text? ");
    const authorid =await prompt("What is the author ID?");
    
	printNewLine();
	print(`📨 Adding post "${title}"...`);
    
    const post: Post = {title: title, text: posttext, authorid: authorid};
    
	const success = await sendPostToServer(post);

	if (success === true) print("🥳 post added successfully!");
	else print("😵 post WAS NOT added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
