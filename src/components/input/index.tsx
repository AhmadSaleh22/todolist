import React, { useEffect, useState } from 'react';
import { Button, Input, Item } from './style';


const InputItem = () => {
    const listItem: string[] = [];
    const [inputValue, setInputValue] = useState<string>("");
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value as string);
        // console.log(e.currentTarget.value);
    }
    const handleAdd = () => {
        listItem.push(inputValue)
        console.log("add button", inputValue)
    }

    // useEffect(() => {

    // }, [listItem]);


    return (
        <>
            <form>
                <Button onClick={handleAdd}>Add Item</Button>
                <Button>Delete Item</Button>
                <Input placeholder='please Add your item list here' type={"text"} onChange={handleChange} value={inputValue} />
            </form>
            {
                listItem.map(n => {

                    (<Item key={n}>{n}</Item>)
                }
                )
            }
        </>

    );
};

export default InputItem;