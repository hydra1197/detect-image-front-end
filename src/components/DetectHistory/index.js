import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Container, Grid, Divider, Select, Button } from 'semantic-ui-react';
import { ImageCard } from '..';

const DetectHistory = ({ list, loading, isLoadMore, getDetectList }) => {
  const [orderBy, setOrderBy] = useState('desc');
  const LIMIT_QUERY = 8;

  useEffect(() => {
    getDetectList({
      limit: LIMIT_QUERY,
      orderBy,
    });
  }, [getDetectList, orderBy]);

  const showDetectHistory = list => {
    if (list && Array.isArray(list) && list.length > 0) {
      return _.map(list, (item, index) => (
        <Grid.Column key={index} mobile={16} tablet={8} computer={4}>
          <ImageCard
            url={item.url}
            labels={item.labels}
            createdAt={item.createdAt}
          />
        </Grid.Column>
      ));
    }

    return <Grid.Column>Empty !!!</Grid.Column>;
  };

  return (
    <Container>
      <Grid>
        <Grid.Column mobile={16} tablet={10} computer={12}>
          <h2>Detect History</h2>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={4}>
          <Select
            style={{ width: '100%' }}
            placeholder='Sort'
            options={[
              { key: '1', value: 'desc', text: 'New to old' },
              { key: '2', value: 'asc', text: 'Old to new' },
            ]}
            value={orderBy}
            onChange={(e, data) => setOrderBy(data.value)}
          />
        </Grid.Column>
      </Grid>

      <Divider />

      <Grid relaxed>
        {loading && !isLoadMore ? (
          <Grid.Column>Waiting ...</Grid.Column>
        ) : (
          showDetectHistory(list)
        )}
      </Grid>

      {isLoadMore && (
        <Grid centered>
          <Button
            primary
            loading={loading}
            onClick={() =>
              getDetectList(
                {
                  limit: LIMIT_QUERY,
                  orderBy,
                  startAfter: list[list.length - 1].createdAt,
                },
                true
              )
            }
          >
            Load more ...
          </Button>
        </Grid>
      )}
    </Container>
  );
};

export default DetectHistory;
