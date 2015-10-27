var Utils = {
    /**  
     * getBoundingClientRect()
     * helper function adapted from 'Pro Javascript for Web Developers ' 
     * by Nicolas Zakas
     **/
    getBoundingClientRect: function getBoundingClientRect(element) {
        var scrollTop = document.documentElement.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft;
        if (element.getBoundingClientRect) {
            if (typeof getBoundingClientRect.offset != "number") {
                var temp = document.createElement("div");
                temp.style.cssText = "position:absolute;left:0;top:0;";
                document.body.appendChild(temp);
                getBoundingClientRect.offset = -temp.getBoundingClientRect().top -
                    scrollTop;
                document.body.removeChild(temp);
                temp = null;
            }
            var rect = element.getBoundingClientRect();
            var offset = getBoundingClientRect.offset;
            return {
                left: rect.left + offset,
                right: rect.right + offset,
                top: rect.top + offset,
                bottom: rect.bottom + offset,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
            };
        } else {
            var actualLeft = getElementLeft(element);
            var actualTop = getElementTop(element);
            return {
                left: actualLeft - scrollLeft,
                right: actualLeft + element.offsetWidth - scrollLeft,
                top: actualTop - scrollTop,
                bottom: actualTop + element.offsetHeight - scrollTop,
                width: element.offsetWidth - scrollLeft,
                height: element.offsetHeight - scrollTop
            };
        }
    }
}

export default Utils;
