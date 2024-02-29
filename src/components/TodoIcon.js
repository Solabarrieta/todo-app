import { ReactComponent as CheckSvg } from "../check.svg";
import { ReactComponent as DeleteSvg } from "../delete.svg";
import '../Styles/TodoIcon.css'

const iconType = {
  "check": (color) => <CheckSvg className="Icon-svg" fill={color}/>,
  "delete": (color) => <DeleteSvg className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return <span
    className={`Icon-container Icon-svg Icon-container-${type}`}
    onClick={onClick}
  >
    {iconType[type](color)}
  </span>;
}

export { TodoIcon };
