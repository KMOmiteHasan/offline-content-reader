jQuery.anchorScroll = function (elem1, elem2) {
	var currObj,
		offsetTop = 0,
		h2List = new Array(),
		positonList = new Array();



	var addNav = function () {
		var i1 = 0,
			i2 = 0,
			n1 = 0,
			n2 = 0;
		var temp = '<dl style="">';
		//注意正则表达式写法：/(<h[2-3].*>.*?<\/h[2-3]>)/ig 在量词后面直接加上一个问号？就是非贪婪模式
		var cateList = $(elem1).html().match(/(<h[2-3].*>.*?<\/h[2-3]>)/ig);
		for (var i = 0; i < cateList.length; i++) {
			if (/(<h2.*>.*?<\/h2>)/ig.test(cateList[i])) {
				n1++;
				n2 = 0;
				//去掉html标签正则表达式：/<.*?>/g
				temp += '<dd class="cate-item1"><a href="#' + n1 + '">' + cateList[i].replace(/<.*?>/g, "") + '</a></dd>';
				h2List[i1] = n1;
				i1++;
			} else {
				n2++;
				//去掉html标签正则表达式：/<.*?>/g
				temp += '<dd class="cate-item2"><a href="#' + n1 + '_' + n2 + '">' + cateList[i].replace(/<.*?>/g, "") + '</a></dd>';
				h3List[i2] = n1 + '_' + n2;
				i2++;
			}
		}
		temp += '</dl>';
		$(elem2).append(temp);
	};


	var addPoint = function () {
		var i1 = 0;
		$(elem1).find('h2').each(function () {
			$(this).prepend('<a name="' + h2List[i1] + '"></a>');
			i1++;
		});
		$(elem1).find('a[name]').each(function () {
			positonList.push($(this).parent().position().top);
		});
	};

	var clickPoint = function () {
		$(elem2 + ' a').click(function (e) {
			// e.preventDefault();
			$(elem2 + ' dd').removeClass('active');
			$(this).parent('dd').addClass('active');
			currObj = $("[name='" + $(this).attr('href').replace(/#/, '') + "']");

			$(elem1).scrollTop(0);
			offsetTop = currObj.parent().position().top;
			$(elem1).scrollTop(offsetTop);
		});
	};


	var scrollWin = function () {
		var windowTop = 0;
		$(elem1).scroll(function () {
			windowTop = $(elem1).scrollTop();
			console.log(windowTop)
			for (var i = 0; i < positonList.length; i++) {
				if (windowTop >= positonList[i]) {
					$(elem2 + ' dd').removeClass('active');
					$(elem2).find('a').eq(i).parent().addClass('active');
				}
			}
		});
	};


	var init = function () {
		// addNav()
		addPoint();
		clickPoint();
		scrollWin();
		$(elem2 + ' a').first().click();
	}
	init();
}
