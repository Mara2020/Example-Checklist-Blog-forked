import {
  Box,
  Button,
  TextInput,
  Group,
  Stack,
  MantineProvider,
  DEFAULT_THEME,
} from "@mantine/core";
import { useState, FC } from "react";
import { ChecklistItemType } from "./types";
import ChecklistItem from "./ChecklistItem";
import "@mantine/core/styles.css";

type Props = {
  items?: ChecklistItemType[];
};

function sortItems(a: ChecklistItemType, b: ChecklistItemType) {
  if (a.isChecked && !b.isChecked) {
    return 1;
  } else if (!a.isChecked && b.isChecked) {
    return -1;
  } else {
    return 0;
  }
}

const Checklist: FC<Props> = (props) => {
  const [newItem, setNewItem] = useState<string>("");
  const [items, _setItems] = useState<Array<ChecklistItemType>>(
    props.items || []
  );
  const setItems = (newItems: Array<ChecklistItemType>) => {
    _setItems(newItems.sort(sortItems));
  };

  return (
    <MantineProvider theme={DEFAULT_THEME}>
      <Box>
        <Group gap="md" mb="md">
          <TextInput
            label="Add checklist item"
            value={newItem}
            onChange={(e) => setNewItem(e.currentTarget.value)}
            placeholder="Enter item text"
          />
          <Button
            onClick={() => {
              setItems([...items, { label: newItem, isChecked: false }]);
              setNewItem("");
            }}
          >
            Add
          </Button>
        </Group>
        <Stack>
          {items.map((item, index) => (
            <ChecklistItem
              key={item.label}
              item={item}
              onChange={() => {
                const newItems = [...items];
                newItems[index] = { ...item, isChecked: !item.isChecked };
                setItems(newItems);
              }}
            />
          ))}
        </Stack>
      </Box>
    </MantineProvider>
  );
};

export default Checklist;
