/**
 * Cookie Notice JS
 * @author Alessandro Benoit
 */
;
(function () {

    "use strict";

    /**
     * Store current instance
     */
    var instance;

    /**
     * Defaults values
     * @type object
     */
    var defaults = {
        'messageLocales': {
            'en': 'To offer you the best service possible, this website uses cookies. By using our website, you agree to the use of cookies. <a href="/impressum">More information</a>',
            'es': 'Hacemos utilizo de cookies para asegurarnos que tengas la mejor experiencia en nuestro sitio. Continuando a navegar en el sitio asumimos que acepta el utilizo de cookies. <a href="/impressum">Mas información</a>',
            'it': 'Per offrirti il miglior servizio possibile questo sito utilizza cookies di terze parti, se vuoi saperne di più o negare il consenso ai cookies clicca qui. Se accedi a qualunque elemento del sito acconsenti il utilizzo dei cookie. <a href="/impressum">Più informazione</a>',
            'de': 'Wir verwenden Cookies, um sicherzustellen, dass Sie das beste Erlebnis auf unserer Website haben können. Indem Sie unsere Dienste stimmen Sie der Verwendung in Übereinstimmung mit unseren Cookies Richtlinien. <a href="/impressum">Mehr Informationen</a>'
        },
        'buttonLocales': {
            'en': 'Ok',
            'es': 'Acepto',
            'it': 'Ok',
            'de': 'Ok'
        },
        'expiresIn': 30,
        'buttonBgColor': '#2EA3F2',
        'buttonTextColor': '#fff',
        'noticeBgColor': '#000',
        'noticeTextColor': '#fff'
    };

    /**
     * Initialize cookie notice on DOMContentLoaded
     * if not already initialized with alt params
     */
    document.addEventListener('DOMContentLoaded', function () {
        if (!instance) {
            new cookieNoticeJS();
        }
    });

    /**
     * Constructor
     * @constructor
     */
    window.cookieNoticeJS = function () {

        // If an instance is already set stop here
        if (instance !== undefined) {
            return;
        }

        // Set current instance
        instance = this;

        // If cookies are not supported or notice cookie is already set
        if (!testCookie() || getNoticeCookie()) {
            return;
        }

        // Extend default params
        var params = extendDefaults(defaults, arguments[0] || {});

        // Get current locale for notice text
        var noticeText = getStringForCurrentLocale(params.messageLocales);

        // Create notice
        var notice = createNotice(noticeText, params.noticeBgColor, params.noticeTextColor);

        // Get current locale for button text
        var buttonText = getStringForCurrentLocale(params.buttonLocales);

        // Create dismiss button
        var dismissButton = createDismissButton(buttonText, params.buttonBgColor, params.buttonTextColor);

        // Dismiss button click event
        dismissButton.addEventListener('click', function (e) {
            e.preventDefault();
            setDismissNoticeCookie(parseInt(params.expiresIn + "", 10) * 60 * 1000 * 60 * 24);
            fadeElementOut(notice);
        });

        // Append notice to the DOM
        document.body.appendChild(notice).appendChild(dismissButton);

    };

    /**
     * Get the string for the current locale
     * and fallback to "en" if none provided
     * @param locales
     * @returns {*}
     */
    function getStringForCurrentLocale(locales) {
        var locale = (navigator.userLanguage || navigator.language).substr(0, 2);
        return (locales[locale]) ? locales[locale] : locales['en'];
    }

    /**
     * Test if cookies are enabled
     * @returns {boolean}
     */
    function testCookie() {
        document.cookie = 'testCookie=1';
        return document.cookie.indexOf('testCookie') != -1;
    }

    /**
     * Test if notice cookie is there
     * @returns {boolean}
     */
    function getNoticeCookie() {
        return document.cookie.indexOf('cookie_notice') != -1;
    }

    /**
     * Create notice
     * @param message
     * @param bgColor
     * @param textColor
     * @returns {HTMLElement}
     */
    function createNotice(message, bgColor, textColor) {

        var notice = document.createElement('div'),
            noticeStyle = notice.style;

        notice.innerHTML = message;
        notice.setAttribute('id', 'cookieNotice');

        noticeStyle.position = 'fixed';
        noticeStyle.bottom = 0;
        noticeStyle.left = 0;
        noticeStyle.right = 0;
        noticeStyle.background = bgColor;
        noticeStyle.color = textColor;
        noticeStyle["z-index"] = '999';
        noticeStyle.padding = '30px 15px';
        noticeStyle["text-align"] = 'center';
        noticeStyle["font-size"] = "16px";
        noticeStyle["line-height"] = "28px";
        noticeStyle.fontFamily = 'Helvetica neue, Helvetica, sans-serif';

        return notice;
    }

    /**
     * Create dismiss button
     * @param message
     * @param buttonColor
     * @param buttonTextColor
     * @returns {HTMLElement}
     */
    function createDismissButton(message, buttonColor, buttonTextColor) {

        var dismissButton = document.createElement('a'),
            dismissButtonStyle = dismissButton.style;

        // Dismiss button
        dismissButton.href = '#';
        dismissButton.innerHTML = message;

        // Dismiss button style
        dismissButtonStyle.background = buttonColor;
        dismissButtonStyle.color = buttonTextColor;
        dismissButtonStyle['text-decoration'] = 'none';
        dismissButtonStyle.display = 'inline-block';
        dismissButtonStyle.padding = '0 15px';
        dismissButtonStyle.margin = '0 0 0 10px';

        return dismissButton;

    }

    /**
     * Set sismiss notice cookie
     * @param expireIn
     */
    function setDismissNoticeCookie(expireIn) {
        var now = new Date(),
            cookieExpire = new Date();

        cookieExpire.setTime(now.getTime() + expireIn);
        document.cookie = "cookie_notice=1; expires=" + cookieExpire.toUTCString() + "; path=/;";
    }

    /**
     * Fade a given element out
     * @param element
     */
    function fadeElementOut(element) {
        element.style.opacity = 1;
        (function fade() {
            (element.style.opacity -= .1) < 0.01 ? document.body.removeChild(element) : setTimeout(fade, 40)
        })();
    }

    /**
     * Utility method to extend defaults with user options
     * @param source
     * @param properties
     * @returns {*}
     */
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                if (typeof source[property] === 'object') {
                    source[property] = extendDefaults(source[property], properties[property]);
                } else {
                    source[property] = properties[property];
                }
            }
        }
        return source;
    }

    /* test-code */
    cookieNoticeJS.extendDefaults = extendDefaults;
    cookieNoticeJS.clearInstance = function () {
        instance = undefined;
    };
    /* end-test-code */

}());
