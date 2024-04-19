import './DeleteComponent.scss';
import closeIcon from '../../assets/icons/close-24px.svg'

const DeleteComponent = (props) => {
    return (
        <div className="delete-container" id='delete-modal'>
            <div className="delete-wrapper" id="modal-wrapper">
                <div className="delete-wrapper__close-div">
                    <img src={closeIcon} className="delete-wrapper__close-icon" onClick={props.handleCancelClick}></img>
                </div>
                <div className="delete-content">
                    <h1>Delete {props.itemName} {props.itemType} item?</h1>
                    <p className="delete-content__message">
                        Please confirm that you'd like to delete {props.itemName} from the {props.itemType} list.
                        You won't be able to undo this action.
                    </p>
                    <div className="delete-button">
                        <button className="delete-button__cancel" onClick={props.handleCancelClick}>Cancel</button>
                        <button className="delete-button__delete" onClick={() => props.handleDeleteClick(props.itemId)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteComponent;