    // 防抖函数
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args)
                };
            }
            var callnow = immediate && !timeout;

            clearInterval(timeout);
            timeout = setTimeout(later, wait)
            if (callnow) func.apply(context, args)
        }
    }
    //节流
    function throttle(func, wait, mustRun) {
        var timeout, startTIme = new Date();
        return function () {
            var content = this,
                args = arguments,
                curTime = new Date();
            clearTimeout(timeout);
            if (curTime - startTIme >= mustRun) {
                func.apply(content, args);
                startTIme = curTime;
            } else {
                timeout = setTimeout(func, wait)
            }
        }
    }