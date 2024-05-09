import {useState} from 'react';

export function Typing() {
  const [disabled, setDisabled] = useState(false);

  function handleGameClick() {
    setDisabled(!disabled);
  }

  return (
    <div>
      <input
        className='typing-container'
        placeholder=' type here '
        disabled={disabled}
      />
      <button type='submit' onClick={handleGameClick}> Start Game </button>
      <button> Fetch Data </button>
    </div>
  );
}