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
