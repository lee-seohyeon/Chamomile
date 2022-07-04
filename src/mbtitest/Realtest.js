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

    const [tf,settf]=useState(0);
    function tfclick(){
        settf(tf=>tf+1);
        console.log(tf);
    }

    const [jp,setjp]=useState(0);
    function jpclick(){
        setjp(jp=>jp+1);
        console.log(jp);
    }

    return(
        <>
            <div className={styles.box}>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q1. 친구와 디저트를 먹으러 가자고 했다. 근데 갑자기 약속이 취소되었다면?</p>
                    <p className={styles.text}> A. 아쉬워하며 다른 친구에게 연락해서 나오라고 한다.</p>
                    <input type="checkbox" id="A" onClick={eiclick} ></input>
                    <p className={styles.text}> B. 아싸를 외치며 혼자 집에서 뒹굴 거린다.</p>
                    <input type="checkbox" id="B"></input>
                    {/* <button id="A" onClick={eiclick} type="button">A</button>
                    <button id="B" type="button">B</button> */}
                    
                    <hr></hr>
                    </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q2. 회사에서 점심 먹고 항상 디저트를 먹었는데.. 오늘은 아무말도 없네? 나는 어떻게 할까?</p>
                    <p className={styles.text}> A. 디저트 안 먹냐고 옆 사람에게 한 번 물어본다. </p>
                    <p className={styles.text}> B. 눈치 보다가 누가 말하기 전까지 가만히 있는다.  </p>
                    <button id="A" onClick={eiclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q3. 디저트를 담다 실수로 넘어져버린 나 ..</p>
                    <p className={styles.text}> A. “아이쿠,, 바닥이 미끄럽네”라며 괜히 큰소리를 내본다.</p>
                    <p className={styles.text}> B. 아무도 못봤길 바라며 조용히 일어선다.</p>
                    <button id="A" onClick={eiclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q4. 디저트 원데이 클래스를 하게 되었다. 내가 만들고 싶은 디저트는?</p>
                    <p className={styles.text}> A. 어떻게 만드는지 가이드 라인이 있는 디저트</p>
                    <p className={styles.text}> B. 자유롭게 내 맘대로 만들 수 있는 디저트</p>
                    <button id="A" onClick={snclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q5. 내 최애 디저트에 대해 설명할 때 나는?</p>
                    <p className={styles.text}> A. “정말 맛있음”을 심플하게 설명한다.</p>
                    <p className={styles.text}> B. “그 빵은 말이야..”로 시작하며 구구절절 설명한다.</p>
                    <button id="A" onClick={snclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q6. 내일 디저트 맛집을 뿌시기로 했다. 나라면?</p>
                    <p className={styles.text}> A. 디저트 맛집을 한번 확인하고 설레이는 마음으로 잠든다.</p>
                    <p className={styles.text}> B. 아침에 일어났는데 비가 오면 어떡하지 걱정하다 잠든다.</p>
                    <button id="A" onClick={snclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q7. 우울해서 디저트를 먹을거라며 전화를 한 친구, 친구에게 할 말은?</p>
                    <p className={styles.text}> A. 어떤 디저트 먹을거야 ? 달달한 건 쿠키가 최고던데.</p>
                    <p className={styles.text}> B. 무슨 일이야 ? 왜 우울해 ㅠㅠ</p>
                    <button id="A" onClick={tfclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q8. 친구와 사이좋게 케이크를 나눠먹던 중 한조각이 남았을 때 나는</p>
                    <p className={styles.text}> A. “가위바위보로 정할래?” 정정당당하게 맞선다</p>
                    <p className={styles.text}> B. “너 먹어!”라며 훈훈하게 양보한다</p>
                    <button id="A" onClick={tfclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q9. 내 최애 디저트가 맛없다는 후기를 봤을 때 나는</p>
                    <p className={styles.text}> A. “음~~ 냠냠 ~” 신경쓰지 않고 계속 먹는다</p>
                    <p className={styles.text}> B. “맛이 변했나..?” 괜히 맛없게 느껴진다</p>
                    <button id="A" onClick={tfclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q10. 갑자기 디저트가 먹고 싶어진 당신!</p>
                    <p className={styles.text}> A. 카모마일에서 꼼꼼히 살펴본 후 뭘 살지 정하고 카페로 출발한다.</p>
                    <p className={styles.text}> B. 카모마일에서 가장 가까운 곳으로 우선 출발, 가서 끌리는대로 산다</p>
                    <button id="A" onClick={jpclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

                <article className={styles.question}>
                    <p className={styles.qtext}> Q11. 디저트 카페에서 일하게 되어 레시피를 다 외워야한다. 어떻게 외울 것인가?</p>
                    <p className={styles.text}> A. 인기 메뉴부터 우선순위를 정하여 매일 정해진 분량을 외운다. </p>
                    <p className={styles.text}> B. 눈에 보이는 대로, 하다보며 자연스럽게 외운다.</p>
                    <button id="A" onClick={jpclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>


                <article className={styles.question}>
                    <p className={styles.qtext}> Q12. 오프닝을 노려야 하는 디저트 맛집. 그런데 눈떠보니 오프닝 5분 전이다. 나라면</p>
                    <p className={styles.text}> A. “꼭 가고 싶었는데 ,, 오늘 하루 시작부터 최악이야 .. “ 라며 스트레스 받는다.</p>
                    <p className={styles.text}> B. “어떻게 사람이 계획한 대로 매일이 완벽하겠어 ,, 다른 곳 갈까?” 라며 여유를 가진다.</p>
                    <button id="A" onClick={jpclick} type="button">A</button>
                    <button id="B" type="button">B</button>
                    <hr></hr>
                </article>

            </div>


        </>
);

}


export default Realtest;