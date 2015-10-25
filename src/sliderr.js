export default class {
    /**
     * @constructor
     **/
    constructor(i, el, opts) {
        this._index = (Number.isInteger(i)) ? i : 0;
        this._el = document.getElementById(el);
        this.slides = this._el.children;
        this.lastSlide = i;
        this.slideWidth = this.slides[0].offsetWidth;
        this.len = this.slides.length;
        this.container = this._el.parentNode; 
        this.slideshow = null;
        this.defaults = {
            slideshow: true,
            slidetime: 3000
        };

        // let's take advantage of Object.assign to merge the two objects
        this.opts = (!!opts) ? Object.assign({}, this.defaults, opts) : this.defaults;
    }
    cssSetup(config) {
            console.log(this);
            ((config, sliderr) => {
                var cssUtils = {
                    "addClassName": function addClassName(classes = ['sliderr']) {
                        sliderr._el.className += ' ' + classes.join(' ');
                    }
                }

                for (var fn of Object.keys(config)) {
                    console.log(fn);
                    cssUtils[fn](config[fn]);
                }
        })(config, this);
    }
    /**
    * @method: slideNext
    **/
    slideNext() {
        this._increment();
        console.log("Sliderr slideNext");
    }

    slidePrev() {
        this._decrement();
    }

    slidePause() {
        clearTimeout(this.slideshow);
    }

    slideShow() {
        let timer = () => {
            this.slideNext();
            this.slideshow = setTimeout(timer, 4000);
        };

        this.slideshow = setTimeout( timer, 1000);
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
