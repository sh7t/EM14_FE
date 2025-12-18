import './style.css'
import type {Message} from '../../types/Message.ts'

const TelegramMessage = (props: Message) => {
    return (
        <div className="telegramMessage" style={{backgroundColor: props.isOwner ? "#315279" : "#1a2534"}}>
            <h5 className="telegramMessageAuthor" style={{color: props.isOwner ? "#e6933e" : "#a4f680"}}>{props.author}</h5>
            <p className="telegramMessageText">{props.text}</p>
            <p className="telegramMessageSentAt"> {props.time.getHours()}:{props.time.getMinutes()} </p>
        </div>
    );
};

export default TelegramMessage;
