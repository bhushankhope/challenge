import { Box } from "@chakra-ui/react";

export interface ChallengeProps {
  /**
   * The maximum number of domains the user is allowed to have
   * in their cart. Invalid domains count toward this limit as well.
   */
  maxDomains: number;
}

export function Challenge(props: ChallengeProps) {
  const { maxDomains } = props;

  return (
    <>
      <Box>Your code here</Box>
    </>
  );
}
