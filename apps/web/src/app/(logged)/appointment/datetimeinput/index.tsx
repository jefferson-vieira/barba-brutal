import DateInput, { type Props as DateInputProps } from './DateInput';
import TimeInput, { type Props as TimeInputProps } from './TimeInput';

type Props = DateInputProps & TimeInputProps;

export default function DateTimeInput(props: Props) {
  return (
    <div className="flex flex-col gap-10">
      <DateInput {...props} />

      <TimeInput {...props} />
    </div>
  );
}
