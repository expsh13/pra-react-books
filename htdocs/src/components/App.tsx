import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from 'styled-components';
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックス State
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // 追加押下時
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  }

  // 削除押下時
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  },[deleteTodo]);

  return(
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText}/>
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}/>
    </div>
  );
}

const SButton = styled.button`
  margin-left: 16px;
`;