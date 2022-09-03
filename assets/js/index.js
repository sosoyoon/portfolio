// 배경
const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 1600;
	canvas.height = 1200;
	const frameCount = 36;
	const currentFrame = (idx) => {
		return `./assets/images/scene${idx.toString().padStart(5, '0')}.jpg` ;
	};

	const images = [];
	const card = {
		frame: 0,
	};
	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = currentFrame(i + 1);
		images.push(img);
	}
	gsap.to(card, {
		frame: frameCount - 1,
		snap: 'frame',
		ease: 'none',
		scrollTrigger: {
			trigger: '.wrapper',
			scrub: 1,
			start: 'top top',
			end: 'bottom bottom',
            // markers:true,
		},
		onUpdate: render,
	});
	images[0].onload = render;
	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.drawImage(images[card.frame], 0, 0 ,1600,1200)
	}

// 글자
visualTl = gsap.timeline({
    defaults:{
        duration:0.5,
    }
})
.from('.wrap .txt' ,{y:100, opacity:1, stagger: 0.5})   



// 버튼
$(function(){
        arrow = gsap.timeline({
            paused:true,
        })

        arrow.addLabel('a')
        .to('.arrow .first', {left: "100%", top: "-50%"}, 'a')
        .to('.arrow .second', {left: "50%", bottom: "50%"}, 'a')
        .to('.arrow', {background: "#d2b4db"}, 'a')
        .to('.contact', {border: "2px solid #d2b4db", color: "#d2b4db"}, 'a')

        $('.button_box').mouseenter(function(){
            arrow.play()
        })
        $('.button_box').mouseleave(function(){
            arrow.reverse()
        })

    // project img
    $('.project .img_box').mouseenter(function(){
        $(this).find('.img_hover').css('display', 'block')
    })
    $('.project .img_box').mouseleave(function(){
        $(this).find('.img_hover').css('display', 'none')
    })
})

    