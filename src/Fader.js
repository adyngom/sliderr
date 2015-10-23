import Sliderr from './Sliderr';

export default class Fader extends Sliderr {
    constructor(i, el, opts) {
        // config the slides using the Sliderr constructor
        super(i, el, opts);
        console.log(opts);
    }

    // override the slideNext method to add the fade effect
    slideNext() {
        super.slideNext();
        this.slides[this.lastSlide].style.opacity = 0;
        this.slides[this._index].style.opacity = 1;
    }

    slidePrev() {
    	super.slidePrev();
    	this.slides[this.lastSlide].style.opacity = 0;
        this.slides[this._index].style.opacity = 1;
    }
}
