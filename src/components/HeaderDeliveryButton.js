const HeaderDeliveryButton = (props) => {
  return (
    <button className="delivery" onClick={props.onClick}>
      <span className="icon">
        <i className="fas fa-shipping-fast"></i>
      </span>
      <span>Dostava</span>
    </button>
  );
};

export default HeaderDeliveryButton;
