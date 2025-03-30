
let url_parse = (urls, match) => {

	let ret = $(match).val();
	if (!ret) return "";
	return ret;
}
function template_parse() {
	let pre_mode =  $("#tmpl").val().toLowerCase();

	pre_mode = pre_mode.replaceAll(/\:(.*?)\:/gm,
		(match, ...reg_info)=> {
			let emoji_name = reg_info[0];
			let emoji_symbol = emoji[emoji_name];
			if(!emoji_symbol) return match;
			return  emoji_symbol;
		}
	);

	pre_mode =pre_mode.replace(urlreg, (match) => {
		return url_parse(urls, match);
	});
	pre_mode = pre_mode.replace(gamereg,
		()=> {
			return  $("#game").val();
		}
	);
	pre_mode = pre_mode.replace(ep_num,
		()=> {
			return  $("#in_ep_number").val();
		}
	);

	pre_mode = pre_mode.replace(/\si\s/gm, " I ");
	let non_discord = pre_mode.replace(modereg, "every one").trim();
	let discord = pre_mode.replace(modereg, "@here").trim();

	return {non_discord, discord};
}
