export default class {
	/**
	* @constructor
	**/
    constructor(i, el, opts) {
        this._index = (isNumber(i)) ? Math.floor(i) : 0;
        this._el = document.getElementByid(el);
        this.slides = this._el.children;
        this.lastSlide = i;
        this.slideWidth = this.slides[0].offsetWidth,
        this.len = this.slides.length;
        this.container = document.getElementsByTagName("body")[0]; // change this ASAP
        this.slideshow = null;
        this.animations = {};
        this.defaults = {
            slideshow: true,
            slidetime: 3000
        };
    }
}