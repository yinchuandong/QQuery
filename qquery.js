
var $$ = 
(function(){

	var $$ = {};

	/**
	 * 内部对象的构造方法
	 */
	var QQuery = function(elem){
		console.log("elem type:" + typeof elem)
		this.elemList = [];
		elem = elem.trim();
		if(typeof elem == "string"){
			if(elem[0] == "#"){
				//将选中的节点放到elemList里面
				this.elemList.push(domUtil.selectId(elem.substr(1, elem.length)));
			} else if(elem[0] == '.'){
				//NodeList对象转换为数组
				var nodes = Array.prototype.slice.call(domUtil.selectClass((elem)),0);
				this.elemList.push(nodes);
			}
		}

		//向elemList的实例添加 QQuery的方法，注意一定要__proto__
		//自己看__proto__和prototype的区别
		this.elemList.__proto__ = QQuery.prototype;
		//返回elemList，里面既包含了QQuery的方法，又包含了原生js对象
		return this.elemList;
	};

	/**
	 * 外部接口的构造方法，返回QQuery对象；可以通过数组访问，则返回js对象
	 */
	$$ = function(elem){
		return new QQuery(elem);
	}

	//添加fn对QQuery.prototype的引用，写fn比写prototype方便多了吧
	$$.fn = QQuery.prototype;

	$$.extend = function(sub, super1){
		for(var key in super1){
			sub[key] = super1[key];
		}
		return sub;
	};

	//操作dom节点的静态方法
	var domUtil = {
		selectId: function(selector){
			return document.getElementById(selector);
		},
		selectClass: function(selector){
			//HTML5提供的接口，兼容性：IE8+/Chrome4.0+/FF3.5+/Safari3.1+
			return document.querySelectorAll(selector);
		}
	};

	/* -------------------定义属性操作方法-----------------------*/
	$$.extend($$.fn, {
		css: function(attr){
			console.log(attr)
		}
	});

	/* -------------------定义节点操作方法-----------------------*/
	$$.extend($$.fn, {
		appendChild: function(dom){
			var _this = this;
			console.log(dom)
			this.css("css")
		},

		insertBefore: function(dom){
			console.log(dom)
		}
	});

	//返回$$对象，供外部调用
	return $$;
})();