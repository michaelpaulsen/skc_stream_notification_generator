let Command = (...n) => {
	var del = "#";
	let regstr = `${del}`;
	for (x of n) {
		regstr += x;
	}
	return new RegExp(regstr, "gm");
}

let urlreg =  Command("(url\\d*)");
let modereg =  Command("mode");
let gamereg =  Command("title");
let ep_num =  Command("episode_number");
		