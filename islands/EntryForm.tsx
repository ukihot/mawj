import { JSX } from "preact";

export function EntryForm(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    formData.forEach((value, name) => {
      console.log(`${name}: ${value}`);
    });
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
