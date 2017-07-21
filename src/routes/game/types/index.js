export type Slot = {
  src: number,
  selected: boolean,
  id: number,
}

export type SlotAction = {
  type: string,
  payload: Slot,
}
