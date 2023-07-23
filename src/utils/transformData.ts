type Props = {
  label: string
  value: string
  children?: Props[]
}

export const transformData = (data: any): Props[] => {
  const result: Props[] = []

  for (let key in data) {
    const item = data[key]

    const transformedItem: Props = {
      label: item.name || item,
      value: item.name || item
    }

    if (item.child) {
      transformedItem.children = transformData(item.child)
    }

    result.push(transformedItem)
  }

  return result
}
