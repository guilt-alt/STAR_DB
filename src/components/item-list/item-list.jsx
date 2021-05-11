import './item-list.css';

import PropTypes from 'prop-types';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {

    const { id } = item;
    const value = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {value}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
}

export default ItemList;
