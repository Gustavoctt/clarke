import * as S from "./styles";
import Small from "../Typography/Small";

interface IProps {
  message: string;
  isVisible: boolean;
  onClick: () => void;
  type: "error" | "success";
}

const Snackbar: React.FC<IProps> = ({ type, message, onClick, isVisible }) => {
  if (!isVisible) return null;

  const color = {
    success: "#86C257",
    error: "#F94144",
  };

  return (
    <S.Snackbar onClick={onClick}>
      <S.Container backgroundColor={color[type]}>
        <Small color="#FAFAFA">{message}</Small>
      </S.Container>
    </S.Snackbar>
  );
};

export default Snackbar;
