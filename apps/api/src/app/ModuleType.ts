import { Type, ValidationError } from '@mikro-orm/core';
// Does not work
// says cannot find the module
// but it cannot find moduleClasses in the module
import { Module, moduleClasses } from '@test-mikro-orm/shared';

// this variant does work
// import { Module, Modules } from '../../../../libs/shared/src/index';


// combination of these 2 imports also work
// so strangely it can find the module @test-mikro-orm/shared and the Module type
// but the const moduleClasses it cannot find
// import { Module } from '@test-mikro-orm/shared';
// import { moduleClasses } from '../../../../libs/shared/src/index';


export class ModuleType extends Type<Module[], number> {
  convertToDatabaseValue(value: Module[] | number | undefined): number {
    if (
      Array.isArray(value) &&
      value.every(module => moduleClasses.includes(module))
    ) {
      return (value as Module[])
        .map(module => module.value)
        .reduce((sum, current) => sum + current, 0);
    }

    if (Number.isInteger(value)) {
      return value as number;
    }

    throw ValidationError.invalidType(ModuleType, value, 'JS');
  }

  convertToJSValue(value: Module[] | number | undefined): Module[] {
    if (
      Array.isArray(value) &&
      value.every(module => moduleClasses.includes(module))
    ) {
      return value as Module[];
    }

    if (value instanceof String) {
      value = Number(value);
    }

    if (Number.isInteger(value)) {
      const modules: Module[] = [];
      for (const module of moduleClasses) {
        if ((value as number) & module.value) {
          modules.push(module);
        }
      }
      return modules;
    }

    throw ValidationError.invalidType(ModuleType, value, 'database');
  }

  toJSON(value: Module[]): Module[] | number {
    return this.convertToDatabaseValue(value);
  }

  getColumnType(): string {
    return `int`;
  }
}
