export default class {
    /**
     * @constructor
     **/
    constructor(i, el, opts) {
        this._index = (Number.isInteger(i)) ? i : 0;
        this._el = document.getElementById(el);
        this.slides = this._el.children;
        this.lastSlide = i;
        this.slideWidth = this.slides[0].offsetWidth,
            this.len = this.slides.length;
        this.container = document.getElementsByTagName("body")[0]; // change this ASAP
        this.slideshow = null;
        this.defaults = {
            slideshow: true,
            slidetime: 3000
        };

        // let's take advantage of Object.assign to merge the two objects
        this.opts = (!!opts) ? Object.assign({}, this.defaults, opts) : this.defaults;
    }

    /**
     * @method: setAnimation
     **/
    slideNext() {
        this._increment();
    }

    slidePrev() {
        this._decrement();
    }

    slidePause() {
        clearTimeout(this.slideshow);
    }

    slideShow() {
        this.slideshow = setTimeout( timer => {
            this.slideNext();
            this.slideshow = setTimeout(timer, 4000);
        }, 1000);
    }

    _increment() {
        this.lastSlide = this._index;
        this._index = (this._index < (this.len - 1)) ? this._index + 1 : 0;
    }

    _decrement() {
        this.lastSlide = this._index;
        this._index = (this._index > 0) ? this._index - 1 : (this.len - 1);
    }
}
