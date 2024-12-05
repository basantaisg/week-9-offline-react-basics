import React from 'react';

const PostComponent = ({ name, subtitle, time, image, description }) => {
  const style = {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: '20px',
    marginTop: '20px',
  };
  return (
    <div style={style}>
      <div style={{ display: 'flex' }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />

        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined && (
            <div style={{ display: 'flex' }}>
              <div>{time}</div>
              <img
                src={
                  'https://i.pinimg.com/originals/33/0c/14/330c1457150dcef1fadc78405a762b01.jpg'
                }
                style={{ width: 12, height: 12 }}
              />
            </div>
          )}{' '}
          {/* // we can also use ternary operator */}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{description}</div>
    </div>
  );
};

export default PostComponent;
