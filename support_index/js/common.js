//surprise colour!
//Referenced to in  home.js and viz.js also
var colourArray = ["#52bc69", "#ed5a7d", "#2ebbd1", "#d9513c", "#fec515", "#4b65ba", "#ff8a27", "#a7d41e"];
					//green, pink, blue, red, yellow, indigo, orange, lime
function getColours() {
	var generatedColours = new Array();
	while(generatedColours.length < 4) {
		var n = (Math.floor(Math.random()*colourArray.length));
		if(generatedColours.indexOf(n) == -1) {
			generatedColours.push(n);
		}
	}
	return generatedColours;
}
var generatedColours = getColours();
var surpriseColour = colourArray[generatedColours[0]];
var colourTheSecond = colourArray[generatedColours[1]];
var colourTheThird = colourArray[generatedColours[2]];
var colourTheFourth = colourArray[generatedColours[3]];

$( document ).ready(function() {
	
	$('#about').html('<h4>About the project</h4><img class="close-overlay" src="https://img.icons8.com/small/16/000000/delete-sign.png" /><div class="content"><p>Visualization-My Website was conceptualised in 2019 by X-MEN team as a tool to help students of Bach Khoa University better understand data structures and algorithms, by allowing them to learn the basics on their own and at their own pace.</p><p>Visualization contains four algorithms such as Selection Sort, Bubble Sort, Binary Search Tree and Linked List.</p><p>Though specifically designed for computer science faculty of Bach Khoa Universitys students as advocators of online learning, we hope my website more and more develop in the future.</p><p>Visualization is not designed to work well on small touch screens (e.g. smartphones) from the outset due to the need to cater for many complex algorithm visualizations that require lots of pixels and click-and-drag gestures for interaction. We recommend you use your laptop or computer to work the best.</p><p>Visualization is an ongoing project and more complex visualizations are still being developed.</p><p>Visualization is a user friendly website and suitable for many components to work.</p></div>');
	
	$('#team').html('<h4>The team</h4><img class="close-overlay" src="https://img.icons8.com/small/16/000000/delete-sign.png" /><div class="content"><p><strong><span style="line-height: 200%;">Product Owner</span></strong><br/>Dao Manh Hung</p><p><strong><span style="line-height: 200%;">Scrum Master</span></strong><br/>Doan Thi Ngoc Minh<br/></p><p><strong><span style="line-height: 200%;">Dev Team</span></strong><br/>Tran Gia Truong<br/>Duong Vong<br/>Le Nguyen Nhu Cuong<br/>Le Trong Tuan </br>Nguyen Hoang Hai Trieu </br>Pham Thao </br>Tran Thi Ngoc Anh </br>Tran Thi Anh</div>');
	
	$('#termsofuse').html('<h4>Terms of use</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><p>If you are a data structure and algorithm teacher, you are allowed to use this website for your classes. You can take screen shots from this website and use the screen shots elsewhere as long as you cite this website as a reference.</p><!--I think we need a better copyright/terms of use statement--></div>');
	
	$('.colour').css("color", surpriseColour); //name
	$('h4').css("background-color", surpriseColour); //about, contact us etc. button background
	
	//overlays stuff
	$('#trigger-about').click(function(){
		$('#dark-overlay').fadeIn(function(){
			$('#about').fadeIn();
		});
	});
	$('#trigger-team').click(function(){
		$('#dark-overlay').fadeIn(function(){
			$('#team').fadeIn();
		});
	});
	$('#trigger-terms').click(function(){
		$('#dark-overlay').fadeIn(function(){
			$('#termsofuse').fadeIn();
		});
	});
	
	$('.close-overlay').click(function() {
		$('.overlays').fadeOut(function(){
			$('#dark-overlay').fadeOut();
		});
	});
	
	//facebook login stuff
	$('#fb-login').hide();
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '192228707604746', // App ID
			channelUrl : '//www.rosemarietan.com/fyp/channel.html', // Channel File
			status     : true, // check login status
			cookie     : true, // enable cookies to allow the server to access the session
			xfbml      : true  // parse XFBML
		});
	
		// Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
		// for any authentication related change, such as login, logout or session refresh. This means that
		// whenever someone who was previously logged out tries to log in again, the correct case below 
		// will be handled. 
		FB.Event.subscribe('auth.authResponseChange', function(response) {
		// Here we specify what we do with the response anytime this event occurs. 
			if (response.status === 'connected') {
				FB.api('/me', function(resp) {
					$('#fb-login').show();
					$('#fb-login').html(resp.name);
					$('#fb-login').attr('href', resp.link);
					$('#trick').hide();
				});
			} else if (response.status === 'not_authorized') {
				FB.login();
			} else {
				FB.login();
			}
		});
	};
	
});