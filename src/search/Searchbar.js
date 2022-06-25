import { useEffect, useState } from 'react';
import styles from './css/Searchbar.module.css';
function Searchbar(){
    const [text,settext]=useState('');
    useEffect(()=>{
        console.log(text);
    },[text]);
    const change=(e)=>{
        settext(e.target.value);
    }
    return (
        <div className={styles.container}>
        <form className={styles.searchbar}>
        <input className={styles.search}
        placeholder="지금먹고싶은디저트는?"
        value={text}
        onChange={change}
        autoFocus></input>
        <input
        className={styles.submit}
        value="search"
        type="submit"></input></form>
    </div>
    );
}
export default Searchbar;