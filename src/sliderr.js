import Utils from './Utils';

export default class {
    /**
     * @constructor
     **/
    constructor(i, el, opts) {
        this._index = (Number.isInteger(i)) ? i : 0;
        this._el = document.getElementById(el);
        this.slides = this._el.children;
        this.lastSlide = i;
        this.slideWidth = null;
        this.slideHeight = null;
        this.len = this.slides.length;
        this.container = this._el.parentNode;
        this.slideshow = null;
        this.defaults = {
            slideshow: false,
            slidetime: 3000
        };

        // let's take advantage of Object.assign to merge the two objects
        this.opts = (!!opts) ? Object.assign({}, this.defaults, opts) : this.defaults;
        this.init();
    }
    init() {
        if (!!this.opts.slideshow) {
            setTimeout( () => {
                this.slideShow();
            }, this.opts.slidetime);
        }

        let elBounds = Utils.getBoundingClientRect(this.slides[0]);

        this._el.style['height'] = elBounds.height + "px";
        this._el.style['width'] = elBounds.width + "px";
    }
    // Todo: Move this to Utils
    cssSetup(config) {
        ((config, sliderr) => {
            var cssUtils = {
                "addClassName": function addClassName(classes = ['sliderr']) {
                    sliderr._el.className += ' ' + classes.join(' ');
                },
                "removeClassName": function removeClassName(classes = ['sliderr-loader']) {
                    console.log(this);
                    let _length = classes.length;
                    let _removeClass = (classname) => {
                        sliderr._el.classList.remove(classname); // classList not supported on IE 9 and below
                    }
                    if(_length > 1) {
                        classes.map( function(classname) {
                            _removeClass(classname);
                        });
                    }
                    else {
                        _removeClass(classes[0]);
                    }    
                }
            }

            for (var fn of Object.keys(config)) {
                cssUtils[fn](config[fn]);
            }
        })(config, this);
    }
    /**
    * @method: slideNext
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
        let timer = () => {
            this.slideNext();
            this.slideshow = setTimeout(timer, 4000);
        };

        this.slideshow = setTimeout(timer, 1000);
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
