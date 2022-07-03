import styles from './css/Realtest.module.css'



// function start() {
//     $(".start").hide();
// }



function Realtest(){
    return(
        <>
            <div className={styles.start}>
                <h3> 고고? </h3>
                <button onclick='start();'>테스트 
                시작하기</button>
            </div>


        </>
);

}

export default Realtest;