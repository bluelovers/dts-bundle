// Generated by dts-bundle v0.3.0

declare module 'foo-mx' {
    export * from "__foo-mx/sub";
    import * as subB from "__foo-mx/sub";
    import { A } from "__foo-mx/lib/subC";
    import { bar } from "__foo-mx/lib/subD";
    import { foo as buzz } from "__foo-mx/lib/subE";
    export function indexA(): subB.A;
    export function indexB(): subB.B;
    export function indexC(): A;
    export function indexD(): typeof bar;
    export function indexE(): typeof buzz;
}

declare module '__foo-mx/sub' {
    export interface A {
        name: string;
    }
    export class B {
        name: string;
    }
    export default function test(): A;
    export function foo(): A;
    export function bar(): A;
}

declare module '__foo-mx/lib/subC' {
    export interface A {
        name: string;
    }
    export class B {
        name: string;
    }
    export default function test(): A;
    export function foo(): A;
    export function bar(): A;
}

declare module '__foo-mx/lib/subD' {
    export interface A {
        name: string;
    }
    export class B {
        name: string;
    }
    export default function test(): A;
    export function foo(): A;
    export function bar(): A;
}

declare module '__foo-mx/lib/subE' {
    export interface A {
        name: string;
    }
    export class B {
        name: string;
    }
    export default function test(): A;
    export function foo(): A;
    export function bar(): A;
}

