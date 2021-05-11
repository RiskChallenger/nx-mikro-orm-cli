class ModuleClass {
  private readonly bitIndex: number;
  public readonly name: string;

  constructor(bitIndex: number, name: string) {
    this.bitIndex = bitIndex;
    this.name = name;
  }

  public get value(): number {
    // Must do bitwise operation
    // tslint:disable-next-line:no-bitwise
    return 1 << this.bitIndex;
  }

  public toJSON(): Record<string, unknown> {
    return {
      value: this.value,
      name: this.name
    };
  }
}

export const SunRoof = new ModuleClass(0, 'Sun roof');
export const Pool = new ModuleClass(1, 'Swimming pool');

export const moduleClasses = [
  SunRoof,
  Pool,
];

export type Module = typeof moduleClasses[number];
