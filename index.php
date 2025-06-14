<!DOCTYPE html>
<html lang = "en-us">
	<head>
		<title>skeleton_craft's notification generator</title>
		<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>


		<style>
			@import url("./css/main.css");
		</style>
	</head>
	<body>
	<h1> skeleton_craft's notification generator</h1>
	<div id = "Urls">
		<h2 class = "title"> URLS </h2>
		<input type = "button" id = "addURL" value = "+ url" />
	</div>
	<div id = "template">
		<h2 class = "title"> template input </h2>
		<p>
			<label for="game"> stream title : </label>
			<input id="game" class="change" type="text"/>
		</p>
		<p>
			<label for="in_ep_number">episode number: </label>
			<input type = "number" class = "change" value ="296" id ="in_ep_number"/>
		</p>
		<div id="template_section">
			<label for = "tmpl"> template : </label>
			<textarea class="change" id="tmpl">:live: hey #mode I am live
skeleshow #episode_number #title
#url1 :live:
			</textarea>
		</div>
	</div>
	<div id = "outdiv">
		<h2 class = "title"> output </h2>
		<p id = "discord_label">Discord notification : </p>
		<pre
		aria-describedby ="discord_label"
		id="discord_out">
		</pre>
		<button
		id ="discord_copy"
		class="copy"
		>copy discord notification</button>

		<p id = "X_label">every where else</p>
		<pre aria-describedby ="X_label"
		id = "twitter_out"></pre>
		<button class="copy"
		id="twitter_copy">copy X notification</button>
	</div>
		<!-- the pre-init stuff -->
		<script src="./js/constants.js"></script>
		<script src="./js/functions.js"></script>

		<!-- a regex wrapper for helping with making commands-->
		<script src="./js/Command.js"></script>

		<!-- the stuff to do with parsing -->
		<script src="./js/parsers.js"></script>
		<!-- a few helpers to do with copying things dircetly to the clipboard -->
		<script src="./js/copy.js"></script>
		<!-- the main JS file -->
		<script src="./js/main.js"></script>
	</body>
</html>
