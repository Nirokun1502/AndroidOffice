import { Box, Spinner } from 'native-base';
import React from 'react';

const FooterLoadMore = React.memo(
  ({ isFetchingNextPage }: { isFetchingNextPage: boolean }) => {
    return (
      <>
        {isFetchingNextPage ? (
          <>
            <Spinner mt="10px" />
            <Box height="150px"></Box>
          </>
        ) : (
          <Box height="20px"></Box>
        )}
      </>
    );
  },
);

export default FooterLoadMore;
