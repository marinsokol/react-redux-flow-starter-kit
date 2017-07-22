// @flow
import { GAME } from '../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

export const openSlot = (data: Slot): SlotAction => ({
  type: GAME.open,
  payload: data,
});

export const restartGame = (): SlotAction => ({
  type: GAME.restart,
});

export const resetBoard = (): SlotAction => ({
  type: GAME.resetBoard,
});
