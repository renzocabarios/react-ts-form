interface InputProps {
  onChange: (value: string) => void;
  type?: string;
}

function Input(props: InputProps) {
  const { onChange, type = "text" } = props;
  return (
    <>
      <input
        type={type}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
