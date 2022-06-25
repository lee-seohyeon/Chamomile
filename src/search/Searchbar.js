import { useEffect, useState } from 'react';
import styles from './css/Searchbar.module.css';
import {Link} from 'react-router-dom';
function Searchbar({place}){
    if (place===""){
        place="지금먹고싶은디저트는?";
    }
    const [text,settext]=useState('');
    useEffect(()=>{
        console.log(text);
    },[text]);
    const change=(e)=>{
        settext(e.target.value);
    }
    return (
        <div className={styles.container}>
        <div className={styles.searchbar}>
        <input className={styles.search}
        placeholder={place}
        value={text}
        onChange={change}
        autoFocus></input>
        <Link to={`/result/${text}`} className={styles.link}>
        <button className={styles.submit}>Submit</button></Link></div>
    </div>
    );
}
export default Searchbar;