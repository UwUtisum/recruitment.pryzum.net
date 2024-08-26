const commands = String.raw`root@recruitment.pryzum.net/:~ cd HAX
root@recruitment.pryzum.net/HAX/:~ ls`;

const beep = String.raw`


██╗      ██████╗  █████╗ ██████╗ ██╗███╗   ██╗ ██████╗          
██║     ██╔═══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔════╝          
██║     ██║   ██║███████║██║  ██║██║██╔██╗ ██║██║  ███╗         
██║     ██║   ██║██╔══██║██║  ██║██║██║╚██╗██║██║   ██║         
███████╗╚██████╔╝██║  ██║██████╔╝██║██║ ╚████║╚██████╔╝██╗██╗██╗
╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝╚═╝
                                                                


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #`;

const samurai = String.raw`


██▓███   ██▀███ ▓██   ██▓▒███████▒ █    ██  ███▄ ▄███▓
▓██░  ██▒▓██ ▒ ██▒▒██  ██▒▒ ▒ ▒ ▄▀░ ██  ▓██▒▓██▒▀█▀ ██▒
▓██░ ██▓▒▓██ ░▄█ ▒ ▒██ ██░░ ▒ ▄▀▒░ ▓██  ▒██░▓██    ▓██░
▒██▄█▓▒ ▒▒██▀▀█▄   ░ ▐██▓░  ▄▀▒   ░▓▓█  ░██░▒██    ▒██ 
▒██▒ ░  ░░██▓ ▒██▒ ░ ██▒▓░▒███████▒▒▒█████▓ ▒██▒   ░██▒
▒▓▒░ ░  ░░ ▒▓ ░▒▓░  ██▒▒▒ ░▒▒ ▓░▒░▒░▒▓▒ ▒ ▒ ░ ▒░   ░  ░
░▒ ░       ░▒ ░ ▒░▓██ ░▒░ ░░▒ ▒ ░ ▒░░▒░ ░ ░ ░  ░      ░
░░         ░░   ░ ▒ ▒ ░░  ░ ░ ░ ░ ░ ░░░ ░ ░ ░      ░   
            ░     ░ ░       ░ ░       ░            ░   
                  ░ ░     ░                            
`;

let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
	code.innerHTML = '<span class="blink">█</span>';
	blink = document.querySelector('.blink');
};

const RenderString = characters => {
	blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
	for(const character of characters.split('')) {
		await Delay(RandomNumber(100, 200));
		RenderString(character);
	}
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
	for(const line of characters.split('\n')) {
		await Delay(RandomNumber(min, max));
		RenderString(`${line}\n`);
	}
}

const DrawCommands = async commands => {
	for( const line of commands.split('\n')){
		// Seperate the directory and the command
		const [currentDir, command] = line.split(':~ ');

		// Print the directory, type the command and finish with new line
		RenderString(`${currentDir}:~ `);
		await TypeString(command);
		RenderString('\n');
	}
}


// Start the code
(async()=> {
	await DrawCommands("/:~ ssh root@recruitment.pryzum.net -p 2000");
	await Delay(1000);
	RenderString("root@recruitment.pryzum.net password: *****************");
	await Delay(5000);
	RenderString("\n");
	await DrawCommands(commands);
	RenderString('\nbeep.js    samurai.js\n\n');
	await DrawCommands('root@recruitment.pryzum.net/HAX:~ node beep.js');
	await DrawLines( beep );
	await TypeString("\n\nSeems you're not among the sheep after all. Wanna play a game? Watch for the beeps.");
	await Delay(3000);
	ResetTerminal();
	await DrawCommands('root@recruitment.pryzum.net:~ KEY=3db7ca618243da1ba3bc76ab14bcf07b node samurai.js');
	await DrawLines(samurai);
	await Delay(2000);
	ResetTerminal();
	await DrawLines(form);
})();

const form = String.raw`
<h1>Feedback Form</h1>
	<h2>(do not put identifiable info in this form)</h2>
    <form id="feedbackForm">
        <label for="name">Name/Alias: (make sure pryzum is aware of ur alias after you submit this form)</label><br>
        <input type="text" id="name" class="password-input" name="name" required><br><br>

        <label for="email">Email: (Example: XYZ@discord.com)</label><br>
        <input type="email" class="password-input" id="email" name="email" required><br><br>

        <label for="feedback">Tell us About Your Self</label><br>
        <textarea id="feedback" class="password-input" name="feedback" required></textarea><br><br>

        <button class="password-button" type="submit">Submit</button>
    </form>
`;