import { Group, Checkbox } from "@mantine/core";
import { ChecklistItemType } from "./types";

export default function ChecklistItem({
  item,
  onChange,
}: {
  item: ChecklistItemType;
  onChange: (item: ChecklistItemType) => void;
}): JSX.Element {
  return (
    <Group gap="md">
      <Checkbox
        label={item.label}
        checked={item.isChecked}
        onChange={() => onChange({ ...item, isChecked: !item.isChecked })}
      />
    </Group>
  );
}
