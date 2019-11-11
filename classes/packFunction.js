module.exports = class InTR {
    formatDate(dates, lang = 'en-US', data = {}, replace = '-') {
        let date = new Intl.DateTimeFormat(lang, data).format(dates)
        let T = date.replace(/\d/g, '')[0]
        let exp = new RegExp(T, 'g')
        return date.replace(exp, replace)
    }

    reverse(text) {
        var newStr = '', i;
        for (i = text.length - 1; i >= 0; i--) {
            newStr += text.charAt(i);
        }
        return newStr;
    }
}