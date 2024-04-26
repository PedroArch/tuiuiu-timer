import { CountdownContainer, Separator } from "./styles";

export function Countdown() {
  return (
    <CountdownContainer>
      <span>0</span>
      <span>0</span>
      <Separator>:</Separator>
      <span>0</span>
      <span>0</span>
    </CountdownContainer>
  );
}