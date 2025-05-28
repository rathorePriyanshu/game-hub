import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: String;
}

const Expandable = ({ children }: Props) => {
  const [expanded, setExpandable] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        fontWeight="bold"
        fontSize="xs"
        onClick={() => setExpandable(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default Expandable;
