
function make_templated_template(mode) {
    let html ="";
    console.log(mode);
    if(mode == "new_video") {
        html  = `hey #mode\n`
        html += `:video: new video:video::`
        html +=  `\n#title`;
        html += `#url1\n`;

    }else if(mode == "stream"){

        html  = `:live: hey #mode\n`
        html += `I am live\n`
        html += `#title #episode_number\n`;
        html += `#url1\n:live:\n`;
    }else{
        let error_string = `ERROR: mode : ${mode}, isn't valid`;
        console.error(error_string);
        return error_string;
    }
     return `${html}you should sub to my YT : #url2`;

}
function replace_new_lines(str){
    return str.replace(/\n/gm,"<br>");
}
let url_count = 0;

function add_url_input(defualt_val = ""){
    let id = `url${url_count+1}`;
    let $label = $(`<label>`);
    let $input = $(`<input>`);

    $label.attr('for', id).append(`Url ${url_count+1} :`);

    $input.attr('id', id).attr("class", 'change');

    $input.val(defualt_val);

    $input.on("change", ()=> {update()});

    $("#addURL").before($(`<p>`).append($label).append($input));
    ++url_count+1;
};
