
function update(){
	let game = $("#game").val();
	let {non_discord, discord}  = template_parse(game);
	set_copy_value("#discord_copy", discord);
	set_copy_value("#twitter_copy", non_discord);
	$("#discord_out").html(replace_new_lines(discord));
	$("#twitter_out").html(replace_new_lines(non_discord));
}

add_url_input("")
update();


$(".change").on("input", ()=>{
 update();
});


$("#addURL").on("click", () => {
	add_url_input()
});
//show and hide the key
let hidden = false;
let btn_toggle_keys = $("#key_hide_btn");
btn_toggle_keys.on("click", ()=>{
	hidden = !hidden;
	$(`#emoji_key`).toggle();
	if(hidden){
		btn_toggle_keys.html("show keys");
	}else{
		btn_toggle_keys.html("hide keys");

	}
});

//change the template when the user selects a new template.
let opt_template_preset = $("#template_preset");
opt_template_preset.on("input",()=>{
	let mode = 	opt_template_preset.val();
	let html ="";
	if(mode == "new_video") {
		html  = `hey #mode\n`
		html += `:video: new video:video::`
		html +=  `\n#title`;
		html += `#url1\n`;

	}
	if(mode == "stream"){

		html  = `:live: hey #mode\n`
		html += `I am live\n`
		html += `#title #episode_number\n`;
		html += `#url1\n:live:\n`;
	}
	html += `you should sub to my YT : #url2`;
	$("#tmpl").val(html);
	update();
});
//Create the key for the emoji
let key = $("#emoji_key")
for(let x in emoji) {
	key.append(`:${x}:  => ${emoji[x]}<br>`)
}
