function Swipe(a,b){"use strict";function c(){p=t.children,s=p.length,p.length<2&&(b.continuous=!1),o.transitions&&b.continuous&&p.length<3&&(t.appendChild(p[0].cloneNode(!0)),t.appendChild(t.children[1].cloneNode(!0)),p=t.children),q=new Array(p.length),r=a.getBoundingClientRect().width||a.offsetWidth,t.style.width=p.length*r+"px";for(var c=p.length;c--;){var d=p[c];d.style.width=r+"px",d.setAttribute("data-index",c),o.transitions&&(d.style.left=c*-r+"px",h(c,u>c?-r:c>u?r:0,0))}b.continuous&&o.transitions&&(h(f(u-1),-r,0),h(f(u+1),r,0)),o.transitions||(t.style.left=u*-r+"px"),a.style.visibility="visible"}function d(){b.continuous?g(u-1):u&&g(u-1)}function e(){b.continuous?g(u+1):u<p.length-1&&g(u+1)}function f(a){return(p.length+a%p.length)%p.length}function g(a,c){if(u!=a){if(o.transitions){var d=Math.abs(u-a)/(u-a);if(b.continuous){var e=d;d=-q[f(a)]/r,d!==e&&(a=-d*p.length+a)}for(var g=Math.abs(u-a)-1;g--;)h(f((a>u?a:u)-g-1),r*d,0);a=f(a),h(u,r*d,c||v),h(a,0,c||v),b.continuous&&h(f(a-d),-(r*d),0)}else a=f(a),j(u*-r,a*-r,c||v);u=a,n(b.callback&&b.callback(u,p[u]))}}function h(a,b,c){i(a,b,c),q[a]=b}function i(a,b,c){var d=p[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function j(a,c,d){if(!d)return void(t.style.left=c+"px");var e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(t.style.left=c+"px",y&&k(),b.transitionEnd&&b.transitionEnd.call(event,u,p[u]),void clearInterval(f)):void(t.style.left=(c-a)*(Math.floor(g/d*100)/100)+a+"px")},4)}function k(){w=setTimeout(e,y)}function l(){y=0,clearTimeout(w)}var m=function(){},n=function(a){setTimeout(a||m,0)},o={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var c in b)if(void 0!==a.style[b[c]])return!0;return!1}(document.createElement("swipe"))};if(a){var p,q,r,s,t=a.children[0];b=b||{};var u=parseInt(b.startSlide,10)||0,v=b.speed||300;b.continuous=void 0!==b.continuous?b.continuous:!0;var w,x,y=b.auto||0,z={},A={},B={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":n(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":n(this.transitionEnd(a));break;case"resize":n(c)}b.stopPropagation&&a.stopPropagation()},start:function(a){var b=a.touches[0];z={x:b.pageX,y:b.pageY,time:+new Date},x=void 0,A={},t.addEventListener("touchmove",this,!1),t.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];A={x:c.pageX-z.x,y:c.pageY-z.y},"undefined"==typeof x&&(x=!!(x||Math.abs(A.x)<Math.abs(A.y))),x||(a.preventDefault(),l(),b.continuous?(i(f(u-1),A.x+q[f(u-1)],0),i(u,A.x+q[u],0),i(f(u+1),A.x+q[f(u+1)],0)):(A.x=A.x/(!u&&A.x>0||u==p.length-1&&A.x<0?Math.abs(A.x)/r+1:1),i(u-1,A.x+q[u-1],0),i(u,A.x+q[u],0),i(u+1,A.x+q[u+1],0)))}},end:function(){var a=+new Date-z.time,c=Number(a)<250&&Math.abs(A.x)>20||Math.abs(A.x)>r/2,d=!u&&A.x>0||u==p.length-1&&A.x<0;b.continuous&&(d=!1);var e=A.x<0;x||(c&&!d?(e?(b.continuous?(h(f(u-1),-r,0),h(f(u+2),r,0)):h(u-1,-r,0),h(u,q[u]-r,v),h(f(u+1),q[f(u+1)]-r,v),u=f(u+1)):(b.continuous?(h(f(u+1),r,0),h(f(u-2),-r,0)):h(u+1,r,0),h(u,q[u]+r,v),h(f(u-1),q[f(u-1)]+r,v),u=f(u-1)),b.callback&&b.callback(u,p[u])):b.continuous?(h(f(u-1),-r,v),h(u,0,v),h(f(u+1),r,v)):(h(u-1,-r,v),h(u,0,v),h(u+1,r,v))),t.removeEventListener("touchmove",B,!1),t.removeEventListener("touchend",B,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==u&&(y&&k(),b.transitionEnd&&b.transitionEnd.call(a,u,p[u]))}};return c(),y&&k(),o.addEventListener?(o.touch&&t.addEventListener("touchstart",B,!1),o.transitions&&(t.addEventListener("webkitTransitionEnd",B,!1),t.addEventListener("msTransitionEnd",B,!1),t.addEventListener("oTransitionEnd",B,!1),t.addEventListener("otransitionend",B,!1),t.addEventListener("transitionend",B,!1)),window.addEventListener("resize",B,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){l(),g(a,b)},prev:function(){l(),d()},next:function(){l(),e()},stop:function(){l()},getPos:function(){return u},getNumSlides:function(){return s},kill:function(){l(),t.style.width="",t.style.left="";for(var a=p.length;a--;){var b=p[a];b.style.width="",b.style.left="",o.transitions&&i(a,0,0)}o.addEventListener?(t.removeEventListener("touchstart",B,!1),t.removeEventListener("webkitTransitionEnd",B,!1),t.removeEventListener("msTransitionEnd",B,!1),t.removeEventListener("oTransitionEnd",B,!1),t.removeEventListener("otransitionend",B,!1),t.removeEventListener("transitionend",B,!1),window.removeEventListener("resize",B,!1)):window.onresize=null}}}}(window.jQuery||window.Zepto)&&!function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto),function(a,b){function c(){this.swipe=null,this.tablePanels=null}function d(a,b){if(a&&b){if(2==b)return a%4==0&&a%100!=0||a%400==0?29:28;var c=[1,3,5,7,8,10,12],d=[4,6,9,11];for(var e in c)if(c[e]==b)return 31;for(var e in d)if(d[e]==b)return 30}}function e(b,c){if(b&&c){for(var e=new Date(b,c-1,1),f=e.getDay(),g=d(b,c),h=Math.floor((g+f)/7),k=(g+f)%7==0?h:h+1,l=1,m=a('<ul class="jdate-table table"></ul>'),n=1;k>=n;n++){for(var o=a('<li class="row"></li>'),p=1;7>=p;p++)if(1==n&&f>=p||l>g)o.append('<span class="col"></span>');else{var q="col jdate-col ",r="",s='data-year="'+b+'" data-month="'+c+'" data-date="'+l+'"';i.date==l&&i.month==c&&i.year==b?(q+="col-today ",r="今天"):r=l,j.year==b&&j.month==c&&j.date==l&&(q+="selected "),o.append('<span class="'+q+'" '+s+">"+r+"</span>"),l++}m.append(o)}return m.find(".jdate-col").tap(function(){var b=a(this);a("#jdate-container .jdate-col").removeClass("selected"),b.toggleClass("selected"),j.year=b.data("year"),j.month=b.data("month"),j.date=b.data("date")}),m}}function f(b){j={year:i.year,month:i.month,date:i.date},b.fadeOut(300,function(){a(this).remove()}),a("#jdate-overlay").fadeOut(300)}function g(b){b.fadeIn(300);var c=a("#jdate-overlay");c.length<1&&a("body").append('<div id="jdate-overlay"></div>'),c.fadeIn(300)}var h=new Date,i={year:h.getFullYear(),month:h.getMonth()+1,date:h.getDate()},j={year:i.year,month:i.month,date:i.date};c.prototype.init=function(b,c,d){var e=a("#jdate")||null;if(e.length<1){e=a('<section id="jdate"></section>');var h=a('<header id="jdate-header"></header>'),i=a('<i class="icon icon-check ftsize20" id="jdate-btn-check"></i>'),k=a('<i class="icon icon-remove" id="jdate-btn-remove"></i>'),l=a('<section class="jdate-header-info"></section>'),m=a('<i class="icon-arrowleft" id="jdate-btn-prev"></i>'),n=a('<i class="icon-arrowright" id="jdate-btn-next"></i>'),o=a("<span></span>"),p=a('<section class="jdate-week table"></section>'),q=a('<div class="swipe" id="slider"></div>'),r=a('<ul class="swipe-wrap" id="jdate-container"></ul>'),s=this;m.tap(function(){s.swipe.prev()}),n.tap(function(){s.swipe.next()}),k.click(function(){f(e)}),i.click(function(){b.val(j.year+"-"+j.month+"-"+j.date),f(e)}),o.text(c+"年"+d+"月"),l.append(m,n,o),h.append(i,k,l),p.append('<span class="col">日</span>','<span class="col">一</span>','<span class="col">二</span>','<span class="col">三</span>','<span class="col">四</span>','<span class="col">五</span>','<span class="col">六</span>');var t=[a('<li data-year="" data-month=""></li>'),a('<li data-year="" data-month=""></li>'),a('<li data-year="" data-month=""></li>')];this.tablePanels=t;for(var u=0;u<t.length;u++)r.append(t[u]);q.append(r),e.append(h,p,q),a("body").append(e),this.createSwipe()}this.updateTable(0,c,d),this.updateTable(1,c,d+1),this.updateTable(2,c,d-1),g(e)},c.prototype.createSwipe=function(){var c=this;this.swipe=new Swipe(b.getElementById("slider"),{startSlide:0,speed:400,auto:!1,continuous:!0,disableScroll:!1,stopPropagation:!1,transitionEnd:function(){},callback:function(b,d){var e=a(d),f=e.data("year"),g=e.data("month");switch(a("#jdate-header .jdate-header-info>span").text(f+"年"+g+"月"),b){case 0:c.updateTable(1,f,g+1),c.updateTable(2,f,g-1);break;case 1:c.updateTable(0,f,g-1),c.updateTable(2,f,g+1);break;case 2:c.updateTable(1,f,g-1),c.updateTable(0,f,g+1)}}})},c.prototype.updateTable=function(a,b,c){var d=this.tablePanels[a];if(c>12)var b=b+1,c=1;else if(1>c)var b=b-1,c=12;d.data("month",c),d.data("year",b),d.empty().append(e(b,c))},a.fn.jdate=function(){return a(this).each(function(){var b=a(this),d=function(){var a=""==b.val()?null:b.val(),d=new c;if(a){var e=new Date(a);j.year=e.getFullYear(),j.month=e.getMonth()+1,j.date=e.getDate(),d.init(b,j.year,j.month)}else d.init(b,i.year,i.month,i.date)};b.focus(d)})}}(Zepto,document,window);