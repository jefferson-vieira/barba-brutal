interface Props {
  name: string;
  testimony: string;
}

export default function Client({ name, testimony }: Props) {
  return (
    <div>
      <p className="text-4xl font-bold text-white">{name}</p>

      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        {testimony}
      </p>
    </div>
  );
}
