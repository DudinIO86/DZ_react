import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/style.css'

export function TodoList() {
    const [tema, setTema] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [arr, setArr] = useState([]);
    const [id, setId] = useState(1);
    const [DeleteComment, setDeleteComment] = useState([]);



    function updateId() {
        setId(id + 1);
    }

    function Add(event) {
        event.preventDefault();
        if (!tema.trim()) {
            return;
        }
        setArr([...arr, { ID: id, TEMA: tema, DATA: date, description: text }]);
        updateId();
        setTema("");
        setDate("");
        setText("");
    }

    const Delete = (ids) => {
        setDeleteComment((Deletes) => {
            return [...Deletes, ids];
        });
    }

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
            noValidate
            autoComplete="off"
        >
            <div className="card">
                <TextField
                    id="outlined"
                    type="text"
                    label="Тема задачи"
                    defaultValue="Введите текст"
                    onChange={(event) => setTema(event.target.value)}
                    value={tema}
                    size="small"
                    variant="filled"
                    color="success"

                />
                <TextField
                    id="outlined-required"
                    type="text"
                    label="Срок исполнения"
                    defaultValue="Введите текст"
                    onChange={(event) => setDate(event.target.value)}
                    value={date}
                    size="small"
                    variant="filled"
                    color="success"
                />
                <TextField
                    id="outlined-required"
                    type="text"
                    label="Описание задачи"
                    defaultValue="Введите текст"
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    size="small"
                    variant="filled"
                    color="success"
                />


                <Button
                    sx={{ m: 1, width: '50ch' }}
                    variant="contained"
                    color="success"
                    onClick={Add}>Добавить задачу
                </Button>


                {arr.filter((task)=>!DeleteComment.includes(task.ID)).map((task) => (

                    <Card sx={{ m: 5, border: 1, color: "green" }}>
                        <CardMedia

                            component="img"
                            src={require("../img/fon.jpg")}
                            alt="task"


                        />

                        <CardContent>

                            <Typography gutterBottom sx={{ color: 'black', fontSize: 14, textAlign: "left" }}>
                                {task.TEMA}
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, textAlign: "left" }}>
                                Срок задачи: {task.DATA}
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, textAlign: "left" }}>
                                Описание задачи: {task.description}
                            </Typography>
                            <IconButton sx={{ alignItems: "end", color: "red" }}
                                aria-label="delete"
                                onClick={() => Delete(task.ID)}
                                >
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>

                    </Card>))}

            </div>
        </Box>
    )
}
