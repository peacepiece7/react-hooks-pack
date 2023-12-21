/// <reference types="react" />
/**
 * @description React 18의 automatic batching으로 최소 delay 100ms가 주어집니다.
 */
export declare function useFadeIn<T extends HTMLElement>(duration?: number, delay?: number): {
    ref: import("react").RefObject<T>;
    style: {
        opacity: string;
    };
};
