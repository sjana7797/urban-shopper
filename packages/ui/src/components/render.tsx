import type { ReactNode } from "react";

type Props = {
  renderIf: boolean;
  children: ReactNode;
};

function Render({ renderIf, children }: Props) {
  return renderIf ? children : <></>;
}

export default Render;
