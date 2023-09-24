import PropTypes from 'prop-types';

export default function ResetButton({resetBase}){
  return <button onClick={resetBase}>Clear all</button>;
}

ResetButton.propTypes = {
  resetBase: PropTypes.func
}
