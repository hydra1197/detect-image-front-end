import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Card, Button, Image } from 'semantic-ui-react';
import cls from './image-card.module.scss';

const ImageCard = ({ url, labels, createdAt }) => {
  const showLabelList = labels => {
    if (labels && Array.isArray(labels) && labels.length > 0) {
      return _.map(labels, (item, index) => {
        return <p key={index}>{`- ${item.description}`}</p>;
      });
    }

    return null;
  };

  return (
    <Card className={cls.wrapper}>
      <Image src={url} wrapped ui={false} className={cls.image} />
      <Card.Content>
        <Card.Meta>
          <span className='date'>{moment(createdAt).format('LLLL')}</span>
        </Card.Meta>
        <Card.Description>{showLabelList(labels)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button fluid color='teal' onClick={() => window.open(url, '_blank')}>
          View full image size
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ImageCard;
