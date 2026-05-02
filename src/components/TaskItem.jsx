import minus from '../assets/images/minus.png';

function TaskItem({task, deleteTask}) {
    return(
        <li>
            <div class='minus'>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>
                <img src={minus} alt='Удалить' width={10} />
            </button>
            </div>
        </li>
    )
}

export default TaskItem;