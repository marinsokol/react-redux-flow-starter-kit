// @flow
import { GAME } from '../../../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

export const openSlot = (data: Slot): SlotAction => ({
  type: GAME.open,
  payload: data,
});
