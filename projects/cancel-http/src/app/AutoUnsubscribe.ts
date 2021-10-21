export function AutoUnsubscribe(constructor: any) {
  const original = constructor.prototype.ngOnDestroy;
  console.log()
  constructor.prototype.ngOnDestroy = function () {
    console.log(this)
    for (const prop in this) {
      if (prop) {
        const property = this[prop];
        if (property && (typeof property.unsubscribe === 'function')) {
          property.unsubscribe();
        }
      }
    }

    if (original && typeof original === 'function') {
      original.apply(this, arguments)
    };
  };
}
