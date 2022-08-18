/// <reference types="react" />
declare function countRenders(name: any): void;
declare function useStateRef<T>(state: T): import("react").MutableRefObject<T>;
declare function useStoryBookCssReset(): void;
export { countRenders, useStateRef, useStoryBookCssReset };
