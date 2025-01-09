import './message.css'

function Message(props) {
    return (
        <div>
            <p className="Text">{props.text}</p>
        </div>
      );
}

export default Message;