import styles from "./css/Tag.module.css";
function Tag({tag}){
    console.log(tag);
    let tagcolor;
    if (tag==="꾸덕"){
        tagcolor="#A37B4B";
    }
    else if(tag==="촉촉"){
        tagcolor="#9BB2D4";
    }
    else if(tag==="비건"){
        tagcolor="#7D9248";
    }
    else if(tag==="하동"){
        tagcolor="#4FAD5B";
    }
    else if(tag==="유기농"){
        tagcolor="#9FCE63";
    }
    else if(tag==="수제"){
        tagcolor="#EDBF96";
    }
    else if(tag==="다크"){
        tagcolor="#2A1A08";
    }
    else if(tag==="피칸"){
        tagcolor="#643D13";
    }
    else{
        tagcolor="#A7A7A7";
    }
    return (
        <div className={styles.tag}
        style={{backgroundColor:`${tagcolor}`}}>#{tag}</div>
    );
}

export default Tag;