import { Signal } from "@preact/signals";
import { PlayerDTO } from "../services/dto/playerDTO.ts";

interface PlayerProps {
  players: Signal<PlayerDTO[]>;
}

export default function Anties(props: PlayerProps) {
  return (
    <div>
    </div>
  );
}
