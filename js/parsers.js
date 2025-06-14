let colon_string = "!!colon!!";
let colon_regex = new RegExp(colon_string,"gm");
let url_parse = ( match) => {
	return !!$(match).val()?$(match).val():match;
}
function template_parse() {
	let pre_mode =  $("#tmpl").val();
	pre_mode = pre_mode.replaceAll(/\\:/gm,colon_string );
	pre_mode = pre_mode.replaceAll(/:(.*?):/gm,
		(match, ...reg_info)=> {
			let emoji_name = reg_info[0].toLowerCase();
			let emoji_symbol = emoji[emoji_name];
			if(!emoji_symbol) return match;
			return  emoji_symbol;
		}
	);
	pre_mode = pre_mode.replaceAll(colon_regex, ":").trim();
	pre_mode =pre_mode.replace(urlreg, (match) => {
		return url_parse(match);
	});
	pre_mode = pre_mode.replace(gamereg,()=> {return $("#game").val();});
	pre_mode = pre_mode.replace(ep_num,()=> {return $("#in_ep_number").val();});

	let non_discord = pre_mode.replace(modereg, "every one").trim();
	let discord = pre_mode.replace(modereg, "@here").trim();

	return {non_discord, discord};
}
