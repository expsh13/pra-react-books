import { memo, useCallback, useState } from "react";
import { text } from "stream/consumers";
import { IndentStyle } from "typescript";

// メモ一覧カスタムフック
export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback((text: string) =>{
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
  },[memos]);

  const deleteTodo = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index,1);
    setMemos(newMemos);
  },[memos]);

  return { memos, addTodo, deleteTodo};
}
