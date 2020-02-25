var main, clickable;

function init(){
	console.log("INIT")
	//SET ELEMENT VARIABLES FOR ACCESS (NOT ALWAYS NEEDED FOR SIMPLE EXECUTIONS WHEN USING TweenMax)
	main = document.getElementById("viewport");
	clickable = document.getElementById("clickable");
	console.log(main);
	eventListeners();
  	trackClips();
}

function trackClips(){
	// SET ELEMENT INITIAL PROPERTY VALUES HERE
	TweenMax.set(border, {alpha:1})
	TweenMax.set(background, {alpha:1})
	frameOne();
}

function eventListeners(){
	console.log("Setting Buttons");
   clickable.style.cursor = "pointer"
   clickable.addEventListener('mouseover', mouseover)
	mouseover()
}

function frameOne(){
	TweenMax.set([
      liveLegal_container,
      legal,
      liveText1_container,
      liveText1,
      liveText2_container,
      liveText2,
		logo,
		phone,
		phone_container,
		phone_ui_container,
		phone_ui,
		phone_ui_clip,
		gradient,
		cover,
      cta,
      cta_container,
	], {autoAlpha: 1, force3D: false, rotation: 0.01})

   TweenMax.set([sheen], {opacity: 0})
	tl = new TimelineMax();
	phoneTL = new TimelineMax();
   
   TweenMax.set([sheen], {x: -20})
	phoneTL
		.from([phone_container], 1, {y: 300, ease: Power3.easeOut})
		.from([cover], 1, {opacity: 0}, "-=.8")
		.to([phone_ui, cover], 1, {delay: .2, y: -129, ease: Power3.easeOut}, "-=.3")
		.to([phone_ui, cover], .8, {delay: .2, y: -23, ease: Power3.easeOut}, "sync")
		.to([phone_container], .8, {delay: .2, scale: .475, x: -54.5, y: -75, ease: Power3.easeOut}, "sync")
		.from([liveLegal_container], .8, {delay: .2, y: -50, ease: Power3.easeOut}, "sync")
		.from([liveText1_container], 2.6, {delay: .2, autoAlpha: 0}, "-=.8")
		.from([liveText2_container], 2.6, {autoAlpha: 0}, "-=2.55")
		.from([cta_container], 2.3, { autoAlpha: 0}, "-=2.55")
		.fromTo([sheen], 1, {x: -20}, {x: 100, opacity: 0.5, onComplete: getTime}, "-=1.45")
}

function getTime() {
	var total_time = phoneTL.totalTime()
	console.log(total_time)
}

function mouseover() {
	TweenMax.fromTo(sheen, 1, { opacity: .5, x: -20}, {opacity: .5, x: 100 })
}







