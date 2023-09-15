import React, { useState } from 'react'
import styles from './ToDoForm.module.css'

export const ToDoForm = ({ addTodo }) => {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value || !category) return

        addTodo(value, category)

        setValue('')
        setCategory('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <input
                type="text"
                placeholder='Crie uma tarefa'
                name='todo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    )
}
