import { useEffect, useState } from 'react';
import styles from './css/Searchbar.module.css';
import {Link} from 'react-router-dom';
function Searchbar({place}){
    if (place===""){
        place="지금 먹고 싶은 디저트는?";
    }
// 나중에 실시간 추천 검색어 뜨게 할려면 필요할 것 같아서 두기
    const [text,settext]=useState('');
    useEffect(()=>{
        console.log(text);
    },[text]);
    const change=(e)=>{
        settext(e.target.value);
    }
// 
    const enter=(e)=>{
        if (e.key==='Enter'){
            window.location.href=`/result/${text}`;
        }
    }
    // 이거 일케 해도되나?
    return (
        <div className={styles.container}>
        <div className={styles.searchbar}>
        <input className={styles.search}
        placeholder={place}
        value={text}
        onChange={change}
        onKeyDown={enter}
        autoFocus></input>
        <Link to={`/result/${text}`} className={styles.link}>
        <button className={styles.submit}>🔍</button></Link></div>
    </div>
    );
}
export default Searchbar;