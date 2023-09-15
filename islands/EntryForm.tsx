import { JSX } from "preact";
import { PlayerDTO } from "../services/dto/playerDTO.ts";
import { signal } from "@preact/signals";
import { router } from "$fresh/src/server/router.ts";

export function EntryForm(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const players = signal<PlayerDTO[]>([{
    id: "",
    uniform_number: "",
    status: true,
    name: "",
    gender: true,
    height: undefined,
    weight: undefined,
  }]);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const playerDTOs: PlayerDTO[] = Array.from({ length: 18 }, (_, index) => {
      const id = index < 9 ? `dog${index + 1}` : `cat${index - 8}`;
      const uniform_number = formData.get(`uniform_number_${id}`) as string;
      const name = formData.get(`name_${id}`) as string;
      const height = parseFloat(formData.get(`height_${id}`) as string);
      const weight = parseFloat(formData.get(`weight_${id}`) as string);

      return {
        id,
        uniform_number,
        status: true,
        name,
        gender: true,
        height,
        weight,
      };
    });
    console.log(playerDTOs);
    players.value = playerDTOs;
    //Live Scorerに遷移したい
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>背番号</td>
          <td>氏名</td>
          <td>身長</td>
          <td>体重</td>
        </tr>
        {Array.from({ length: 18 }, (_, index) => {
          const id = index < 9 ? `dog${index + 1}` : `cat${index - 8}`;
          return (
            <tr key={id}>
              <td>
                <input
                  type="text"
                  name={`uniform_number_${id}`}
                  defaultValue=""
                  placeholder="背番号"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`name_${id}`}
                  defaultValue=""
                  placeholder="氏名"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`height_${id}`}
                  defaultValue=""
                  placeholder="身長"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`weight_${id}`}
                  defaultValue=""
                  placeholder="体重"
                />
              </td>
            </tr>
          );
        })}
      </table>
      <button type="submit">登録</button>
    </form>
  );
}
