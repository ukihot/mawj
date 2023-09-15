import { assert } from "https://deno.land/std@0.201.0/assert/mod.ts";
import PlayerEntity from "../../models/entities/player.ts";

Deno.test("PlayerEntity setStatus Valid", () => {
  const player = new PlayerEntity({
    id: "some-id",
    status: "IN",
    profile: {
      name: "John",
      gender: "MALE",
      height: 180,
      weight: 75,
      uniform_number: "5",
    },
  });

  player.status = "OUT";
  assert(player.status === "OUT");
});
