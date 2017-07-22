import { GAME } from '../constants/actionTypes';
import type { Slot, SlotAction } from '../types';

type Action = {
  type: string,
}

export const openSlot = (data: Slot): SlotAction => ({
  type: GAME.open,
  payload: data,
});

export const restartGame = (): Action => ({
  type: GAME.restart,
});

export const resetBoard = (): Action => ({
  type: GAME.resetBoard,
});
