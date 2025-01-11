import { useState } from 'react';

function CommentList() {
    const [comment, setInputText] = useState("");
    const [arr, setArr] = useState([]);
    const [DeleteComment, setDeleteComment] = useState([]);
    const [id, setId] = useState(1);

    function updateId() {
        setId(id + 1);
    }

    function Add(event) {
        event.preventDefault();
        if (!comment.trim()) {
            return;
        }
        setArr([...arr, { ID: id, text: comment }]);
        updateId();
        setInputText("");
    }

    const Delete = (ids) => {
        setDeleteComment((Deletes) => {
            return [...Deletes, ids];
        });
    }



        return (
            <div>
                <label htmlFor="input">Введите текст комментария: </label>
                <input
                    onChange={(event) => setInputText(event.target.value)}
                    type="text"
                    id="input"
                    value={comment}
                    maxLenhth="10"
                >
                </input>

                <button onClick={Add}>Добавить комментарий</button>

                <ul>
                    {arr.filter((comment)=>!DeleteComment.includes(comment.ID)).map((comment) => (
                        <li key={comment.ID}>
                            <p>{comment.text}</p>
                            <button onClick={() => Delete(comment.ID)}> Удалить комментарий</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    export default CommentList;