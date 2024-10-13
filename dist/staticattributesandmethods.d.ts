declare class Puppy {
    static instanceCount: number;
    name: string;
    constructor(name: string);
    static decreaseCount(): void;
}
declare const puppy1: Puppy;
declare const puppy2: Puppy;
