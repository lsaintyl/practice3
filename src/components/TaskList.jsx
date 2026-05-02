import { useEffect, useState } from 'react'


function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((responce) => {
            if (!responce.ok) {
                throw new Error('Ошибка сети');
            }
            return responce.json();
        })
        .then((data) => {
            setTasks(data);
            setLoading(false);
        })
    .catch(() => {
        setError('Ошибка загрузки данных');
        setLoading(false);
    });
    }, []);

    if (loading) {
        return<p>Загрузка...</p>;
    }

    if (error) {
        return<p>{error}</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title} - {task.completed ? '✓' : '×'}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
