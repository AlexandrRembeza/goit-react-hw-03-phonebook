import { DeleteButton, Item } from './Contact.styled';
import { CgClose } from 'react-icons/cg';
import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <DeleteButton data-id={id} onClick={deleteContact}>
        <CgClose size={17} />
      </DeleteButton>
    </Item>
  );
};

DeleteButton.propTypes = {
  'data-id': PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
