import { z } from "zod/mod.ts";

export default class PlayerEntity {
  /**
   * カバディストエンティティ
   */
  private _id: PlayerId;
  private _status: PlayerStatus;
  private _profile: PlayerProfile;

  constructor(props: Player) {
    this._id = props.id;
    this._status = props.status;
    this._profile = props.profile;
  }

  get id(): PlayerId {
    return this._id;
  }

  get profile(): PlayerProfile {
    return this._profile;
  }

  get status(): PlayerStatus {
    return this._status;
  }

  set status(newStatus: PlayerStatus) {
    try {
      this._status = newStatus;
    } catch (e) {
      throw new Error(e);
    }
  }
}

// Player型の定義
type Player = {
  id: z.infer<typeof id>;
  status: z.infer<typeof status>;
  profile: z.infer<typeof profile>;
};

// PlayerId型の定義
export type PlayerId = z.infer<typeof id>;
const id = z.string().uuid();

// PlayerStatus型の定義
export type PlayerStatus = z.infer<typeof status>;
const status = z.enum(["IN", "OUT"]);

// PlayerProfile型の定義
type PlayerProfile = z.infer<typeof profile>;
const profile = z.object({
  name: z.string(),
  gender: z.enum(["FEMALE", "MALE"]),
  height: z.number().min(140).max(210).optional(),
  weight: z.number().min(40).max(85).optional(),
  uniform_number: z.string().min(1).max(3),
});
