add_url_input("")
update();


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
	template_input.val(create_template_string(mode));
	update();
});

$("body").on("input",".change", ()=>{update())} );
$("#addURL").on("click",  ()=>{add_url_input()});

//Create the key for the emoji
let key = $("#emoji_key")
for(let x in emoji) {
	key.append(`:${x}:  => ${emoji[x]}<br>`)
}
