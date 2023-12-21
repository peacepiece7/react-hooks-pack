'use strict';

var react = require('react');

// prettier-ignore
var useClick = function (onClick) {
    var element = react.useRef(null);
    react.useEffect(function () {
        if (element.current)
            element.current.addEventListener('click', onClick);
        return function () {
            if (element.current)
                element.current.removeEventListener('click', onClick);
        };
    }, []);
    return element;
};

function useBeforeLeaveMouse(cb) {
    // 전역으로 선언하기엔 이름이 너무 흔합니다.
    var html = react.useMemo(function () {
        var _a;
        return typeof document !== 'undefined'
            ? (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()
            : null;
    }, []);
    if (!html) {
        throw new Error('only supported in browser, plz check your env');
    }
    var handler = react.useCallback(function (ev) {
        if (ev.clientY <= 0 ||
            ev.clientY >= html.bottom ||
            ev.clientX <= 0 ||
            ev.clientX >= html.right)
            cb();
    }, [cb]);
    react.useEffect(function () {
        window.addEventListener('mouseout', handler);
        return function () { return window.removeEventListener('mouseout', handler); };
    }, []);
}

/**
 * @description React 18의 automatic batching으로 최소 delay 100ms가 주어집니다.
 */
function useFadeIn(duration, delay) {
    if (duration === void 0) { duration = 0; }
    if (delay === void 0) { delay = 100; }
    var ref = react.useRef(null);
    react.useEffect(function () {
        setTimeout(function () {
            if (ref.current) {
                ref.current.style.opacity = '1';
                ref.current.style.transition = "opacity ".concat(duration, "s ease-in-out");
            }
        }, delay);
    }, []);
    return {
        ref: ref,
        style: { opacity: '0' },
    };
}

function useFullscreen() {
    var ref = react.useRef(null);
    var _a = react.useState(false), isFull = _a[0], setIsFull = _a[1];
    var triggerFull = react.useCallback(function () {
        if (ref.current) {
            ref.current.requestFullscreen();
            setIsFull(true);
            // TODO : 브러우저 호환성 고려하기
            // if (ref.current.webkitReqeustFullscreen) {
            // ref.current.webkitReqeustFullscreen()
            // }
            // if (ref.current.mozReqeustFullscreen) {
            // ref.current.mozReqeustFullscreen()
            // if(ref.current.msReqeustFullscreen) {
            // ref.current.msReqeustFullscreen()
        }
    }, []);
    var exitFull = react.useCallback(function () {
        document.exitFullscreen();
        setIsFull(false);
    }, []);
    return { ref: ref, triggerFull: triggerFull, exitFull: exitFull, isFull: isFull };
}

function useInput(init, validator) {
    var _a = react.useState(init), state = _a[0], setState = _a[1];
    var onChange = react.useCallback(function (value) {
        if (typeof validator !== 'function')
            return;
        var willUpdate = validator(value);
        if (willUpdate)
            setState(value);
    }, [validator]);
    return [state, setState, onChange];
}

function useNetwork(onChange) {
    var _a = react.useState(navigator.onLine), status = _a[0], setStatus = _a[1];
    var handleChange = function () {
        if (typeof onChange === 'function') {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    react.useEffect(function () {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);
        return function () {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        };
    }, []);
    return status;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function useNotification(title, options) {
    var _this = this;
    var fireNotif = react.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Notification.requestPermission()];
                case 1:
                    _a.sent();
                    if (Notification.permission !== 'granted') {
                        return [2 /*return*/];
                    }
                    new Notification(title, options);
                    return [2 /*return*/];
            }
        });
    }); }, [title, options]);
    return { fireNotif: fireNotif };
}

function useScroll() {
    var _a = react.useState({ x: 0, y: 0 }), state = _a[0], setState = _a[1];
    var onScroll = react.useCallback(function () {
        if (typeof window === 'undefined')
            return;
        setState({ x: window.scrollX, y: window.scrollY });
    }, []);
    react.useEffect(function () {
        window.addEventListener('scroll', onScroll);
        return function () { return window.removeEventListener('scroll', onScroll); };
    }, []);
    return state;
}

function useTabs(initTab, allTabs) {
    var _a = react.useState(initTab), currentIndex = _a[0], setCurrentIndex = _a[1];
    return { currentItem: allTabs[currentIndex], setCurrentItem: setCurrentIndex };
}

var isBrowser = typeof window !== 'undefined';
function useTitle(initTitle) {
    var _a = react.useState(initTitle), title = _a[0], setTitle = _a[1];
    react.useEffect(function () {
        if (!isBrowser)
            return;
        var el = document.querySelector('title');
        el && el.setAttribute('title', title);
        setTitle(initTitle);
    }, [initTitle, title]);
    return { title: title, setTitle: setTitle };
}

/**
 * useWillUnmount hook
 * 컴포넌트가 언마운트 될 때 함수를 호출합니다.
 * @param {Function} callback 컴포넌트가 언마운트 될 때 호출 할 콜백 함수
 */
function useWillUnmount(callback) {
    react.useEffect(function () {
        return callback;
    }, []);
}

exports.useBeforeLeaveMouse = useBeforeLeaveMouse;
exports.useClick = useClick;
exports.useFadeIn = useFadeIn;
exports.useFullscreen = useFullscreen;
exports.useInput = useInput;
exports.useNetwork = useNetwork;
exports.useNotification = useNotification;
exports.useScroll = useScroll;
exports.useTabs = useTabs;
exports.useTitle = useTitle;
exports.useWillUnmount = useWillUnmount;
