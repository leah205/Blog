interface Props {
  label: string;
  type: string;
  value: string;

  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField(props: Props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        onChange={props.onChange}
        id={props.name}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}
