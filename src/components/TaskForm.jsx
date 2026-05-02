import { useState } from 'react';
import plus from '../assets/images/plus.png';


function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === '') return;
    addTask(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder=" Введите задачу"
      />
      <button type="submit">
        <img src={plus} alt='Добавить' width={20} />
      </button>
    </form>
  );
}

export default TaskForm;