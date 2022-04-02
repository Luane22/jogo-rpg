import styled from "styled-components";

export const Container = styled.div<{
  size: number;
  left: number;
  top: number;
  sidePos: number;
}>`
  width: ${(props: { size: any }) => props.size}px;
  height: ${(props: { size: any }) => props.size}px;
  position: absolute;
  left: ${(props: { left: any }) => props.left}px;
  top: ${(props: { top: any }) => props.top}px;
  background-image: url("/assets/char.png");
  background-position: 0px ${(props: { sidePos: any }) => props.sidePos}px;
`;

export const NameBox = styled.div`
  background-color: #000;
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  font-size: 10px;
  text-align: center;
  margin-top: -20px;
`;
