import styled from "styled-components/native";

export const ScreenContainer = styled.View<{
  $marginTop: number;
  $marginBottom: number;
}>`
  flex: 1;
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
`;
