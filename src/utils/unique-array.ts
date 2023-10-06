const uniqueArray = <T>(
  array: Array<T>,
  shouldInclude: (array: Array<T>, item: T) => boolean,
): Array<T> => array.filter((item, index, self) => shouldInclude(self, item))

export default uniqueArray
