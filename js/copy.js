function set_copy_value(selector, value){
    $(selector).attr("copy_value", value);
}
$("button.copy").on("click", async (e) => {

    let $this = $(e.target);
    let copy_value = $this.attr("copy_value");
    try{
       await navigator.clipboard.writeText(copy_value);
    }catch(e){
        console.error(e);
    }
});
