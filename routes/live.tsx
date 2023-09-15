import Anties from "../islands/Anties.tsx";
import { Signal } from "@preact/signals";
import { PlayerDTO } from "../services/dto/playerDTO.ts";

export interface PlayerProps {
  players: Signal<PlayerDTO[]>;
}
export default function LiveScorer(props: PlayerProps) {
  return (
    <>
      <Anties players={props.players} />
    </>
  );
}
