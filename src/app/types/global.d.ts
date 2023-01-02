declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.gif'

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const _IS_DEV: boolean;
declare const __API__: string;
declare const __PROJECT: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
