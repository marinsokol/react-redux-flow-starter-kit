// @flow
import { GAME } from '../../../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

export const toggleSlot = (data: Slot): SlotAction => ({
  type: GAME.toggle,
  payload: data,
});
