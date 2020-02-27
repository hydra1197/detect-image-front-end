import React, { useState } from 'react';
import { Step, Icon } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import configs from '../../configs';
import cls from './detector-form.module.scss';

const DetectForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  function toDataURL(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      let reader = new FileReader();

      reader.onloadend = function() {
        callback(reader.result);
      };

      reader.readAsDataURL(xhr.response);
    };

    xhr.addEventListener('error', () => {
      toast.error(
        'Access to XMLHttpRequest at Image URL has been blocked by CORS policy'
      );
    });

    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  const handleSubmit = () => {
    if (!url) {
      return setError('Image URL is invalid');
    }

    toDataURL(url, dataUrl => {
      const base64 = dataUrl.split('data:image/jpeg;base64,')[1];

      const data = {
        requests: [
          {
            image: { content: base64 },
            features: [
              {
                maxResults: configs.DETECT_MAX_LABEL_RESULT,
                type: configs.DETECT_LABEL_TYPE,
              },
            ],
          },
        ],
      };

      onSubmit(data, url);
      setError('');
    });
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.box}>
        <p>
          The Vision API can detect and extract information about entities in an
          image, across a broad group of categories.
        </p>

        <div className={cls.step}>
          <Step.Group size='small'>
            <Step link>
              <Icon name='search' />
              <Step.Content>
                <Step.Title>Find image</Step.Title>
              </Step.Content>
            </Step>
            <Step link>
              <Icon name='paste' />
              <Step.Content>
                <Step.Title>Enter image URL</Step.Title>
              </Step.Content>
            </Step>
            <Step link>
              <Icon name='check' />
              <Step.Content>
                <Step.Title>Get result</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        </div>

        <div className='ui action input'>
          <input
            type='text'
            placeholder='Paste or enter Image URL'
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <button className='ui icon button' onClick={handleSubmit}>
            <i aria-hidden='true' className='search icon' />
          </button>
        </div>

        {error && <p className={cls.error}>{error}</p>}
      </div>
    </div>
  );
};

export default DetectForm;
