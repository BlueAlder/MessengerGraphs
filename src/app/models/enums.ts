export enum GraphType {
  Contribution,
  MessageRate,
  WordTree,
  MessageLength
}

export namespace GraphType {
  export function values() {
    return Object.keys(GraphType).filter(
      (type) => isNaN(type as any) && type !== 'values'
    );
  }
}


