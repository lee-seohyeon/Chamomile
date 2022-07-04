import styles from './css/Realtest.module.css'
import { useState } from 'react';

function Realtest(){
    const [ei,setei]=useState(0);
    function eiclick(){
        setei(ei=>ei+1);
        console.log(ei);
    }

    const [sn,setsn]=useState(0);
    function snclick(){
        setsn(sn=>sn+1);
        console.log(sn);
    }

    return(
        <>
            <div className={styles.box}>

                <article className={styles.question}>
                    <p className={styles.text}> Q1. 쿠키 먹을래?</p>
                    <p className={styles.text}> A. 좋아</p>
                    <p className={styles.text}> B. 싫어</p>
                    <button id="A" onClick={eiclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                    </article>

                <article className={styles.question}>
                    <p className={styles.text}> Q2. 메론 먹을래?</p>
                    <p className={styles.text}> A. 좋아</p>
                    <p className={styles.text}> B. 싫어</p>
                    <button id="A" onClick={eiclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.text}> Q3. 메론 먹을래?</p>
                    <p className={styles.text}> A. 좋아</p>
                    <p className={styles.text}> B. 싫어</p>
                    <button id="A" onClick={eiclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.text}> Q4. 아메리카노 먹을래?</p>
                    <p className={styles.text}> A. 좋아</p>
                    <p className={styles.text}> B. 싫어</p>
                    <button id="A" onClick={snclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.text}> Q5. 푸딩 먹을래?</p>
                    <p className={styles.text}> A. 좋아</p>
                    <p className={styles.text}> B. 싫어</p>
                    <button id="A" onClick={snclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.text}> Q6. 치즈 먹을래?</p>
                    <p className={styles.text}> A. 좋아</p>
                    <p className={styles.text}> B. 싫어</p>
                    <button id="A" onClick={snclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

            </div>


        </>
);

}


export default Realtest;