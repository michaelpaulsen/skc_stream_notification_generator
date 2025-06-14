
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

});
//Create the key for the emoji
let key = $("#emoji_key")
for(let x in emoji) {
	key.append(`:${x}:  => ${emoji[x]}<br>`)
}
