
function update(){
	let game = $("#game").val();
	let {non_discord, discord}  = template_parse(game);
	set_copy_value("#discord_copy", discord);
	set_copy_value("#twitter_copy", non_discord);


	//$("#discord_copy").attr("copy_value", discord)
	$("#discord_out").html(replace_new_lines(discord));
	$("#twitter_out").html(replace_new_lines(non_discord));
}
add_url_input("https://www.twitch.tv/skeleton_craft_gaming")
update();
$(".change").on("change", ()=>{
 update();
});

$("#addURL").on("click", () => {
	add_url_input()

	let id = `url${url_count+1}`;
	console.log(id);

});
