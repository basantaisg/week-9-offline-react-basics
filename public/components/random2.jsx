const random2 = () => {
  return (
    <div>
      <Card>
        <div>
          <h2>Card Title</h2>
          <p>This is some content inside the card</p>
        </div>
      </Card>
      <Card>
        <div>
          <h2>Spiderman Homecoming</h2>
          <textarea name='Comment' id='comment'></textarea>
          <p>Spiderman came home but left within first few hours....</p>
        </div>
      </Card>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
        padding: '20px',
        margin: '10px',
        color: 'black',
      }}
    >
      {children}
    </div>
  );
};

export default random2;
