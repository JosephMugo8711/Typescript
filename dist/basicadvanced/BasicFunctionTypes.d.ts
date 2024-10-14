declare function add(x: number, y: number): number | string;
declare const addResult: string | number;
declare function makeName(firstName: string, lastName: string, middleName?: string): string;
declare const fullName: string;
declare function callFunc(func: (f: string, l: string, m?: string) => string, parma1: string, param2: string): void;
declare function mul(x: number, y: number): number;
declare function div(x: number, y: number): number;
declare function applyFunc(funcs: ((a: number, b: number) => number)[], values: [number, number][]): number[];
