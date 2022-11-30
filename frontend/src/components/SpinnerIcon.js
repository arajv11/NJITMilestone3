import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerIcon() {
  return (
    <Spinner animation="grow" variant="warning">
      <span className="visually-hidden">Loading data...</span>
    </Spinner>
  );
}
