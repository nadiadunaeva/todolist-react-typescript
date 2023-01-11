//Компонента которая превращается из спан в инпут
import React, {ChangeEvent, useState} from "react";

type EditableTitlePropsType = {
    title: string
    onChange:(newValue:string)=> void
}

export function EditableSpan(props: EditableTitlePropsType) {
    //добавляем функцию отображения
    let [editMode, setEditMode] = useState(false)
    //со страта тайт - тот который в пропсах
    let [title, setTitle] = useState("")


    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    };

    const activateViewMode = () => {

        setEditMode(false)
            props.onChange(title)
    };
    //достаем то значение кот пытается напечататься и отдаем в setTitle, который изменит title и инпут перерисуется
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editMode
        ? <input value={props.title} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>

}

