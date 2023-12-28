import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <input
      type="checkbox"
      name="check"
      onChange={function noRefCheck() {}}
    />
  );
}
