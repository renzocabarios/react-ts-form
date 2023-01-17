interface ButtonProps {
  onClick: () => void;
  title?: string;
}

function Button(props: ButtonProps) {
  const { onClick, title = "Untitled" } = props;
  return (
    <>
      <button onClick={onClick}>{title}</button>
    </>
  );
}

export default Button;
