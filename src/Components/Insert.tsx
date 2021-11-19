import styled from "styled-components";
import useInput from "../Hooks/useInput";
import palette from "../styles/palette";

const InsertBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0px 8px 10px ${palette.shadow};
  background-color: ${palette.white};
  width: 97%;
  height: 7rem;
  position: fixed;
  bottom: 0;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 23rem;
  height: 3rem;
  margin: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.yellow};
  height: 3rem;
  width: 4rem;
  margin: 1rem 3rem 1rem 1rem;
  border: none;
  outline: none;
  &:hover {
    background: ${palette.gold};
  }
`;

type onInsertProps = {
  onInsert: (text: string) => void;
};

function Insert({ onInsert }: onInsertProps) {
  const result = useInput("");
  // const [value, setValue] = useState("");
  // const onChange = useCallback((e) => {
  //   setValue(e.target.value);
  // }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    result ? onInsert(result.value) : alert("공백 입력은 불가합니다.");

    result.setValue("");
    e.preventDefault();
  };

  // const onSubmit = useCallback(
  //   (e) => {
  //     value ? onInsert(value) : alert("공백 입력은 불가합니다.");

  //     setValue("");
  //     e.preventDefault();
  //   },
  //   [onInsert, value]
  // );

  return (
    <InsertBox onSubmit={onSubmit}>
      <Input
        placeholder="메시지를 입력하세요"
        value={result.value}
        onChange={result.onChange}
      />
      <Button type="submit">전송</Button>
    </InsertBox>
  );
}

export default Insert;
