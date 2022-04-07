namespace App {
  // Autobind Decorator
  export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };

    return adjDescriptor;
  }
}