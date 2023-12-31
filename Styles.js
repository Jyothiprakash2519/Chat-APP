import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';


export const Container = styled.div`
  height: 100%;
  min-height: 600px;
  justify-content: space-between;
  min-width: 250px;
  box-sizing: border-box;
  margin-right: 20px;
  margin-left: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const Scroll = styled(ScrollToBottom)`
  padding: 5% 0;
  border: 2px solid white;
  border-radius: 5px;
  overflow: auto;
  height: 400px;
`
export const InputChat = styled.input`
  border: 1px solid #ddd;
  height: 50px;
  align-self: flex-end;
  width: 100%;
  padding: 0;
  font-size: 14px;
`
export const ButtonSend = styled.button`
  min-height: 50px;
  font-size: 14px;
  width: 100%;
  background: #201A23;
  text-align: center;
  line-height: 50px;
  align-self: flex-end;
  font-weight: bold;
  color: #FFF;
  margin-top: 10px;
`