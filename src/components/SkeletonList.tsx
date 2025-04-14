import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

export const SkeletonList = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize={"32px"} borderRadius={8}></Skeleton>
          <SkeletonText noOfLines={2} width="80px"></SkeletonText>
        </HStack>
      </ListItem>
    </List>
  );
};
