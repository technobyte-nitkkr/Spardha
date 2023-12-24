import { ReactNode } from "react";
import "./Button.css";

interface ButtonInterface{
    symbol?: string,
    btnText?: string,
    btnWidth?: number,
    btnHeight?: number,
    icon?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
//btnwidth and height
const Button = ({ symbol, btnText, icon, onClick }:ButtonInterface) => {
  return (
    <button
      style={{width: "200px"}}
      className="btnContainer"
      onClick={onClick}
    >
      <div style={{ marginTop: "10px"}}>
        <span className="btnTextSymbol"> {symbol} </span>
        <span className="reactIcon"> {icon} </span>
        <span className="btnText"> {btnText} </span>
      </div>
    </button>
  );
};

export default Button;