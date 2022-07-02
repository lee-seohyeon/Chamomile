import Navbar from "../nav/Navbar";
import styles from "./css/Announce.module.css";
import Back from "../back/Back";


function Announce() {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.header}>
                <Back className={styles.fake}></Back>
                <div className={styles.title}>공지사항</div>
                <div className={styles.fake}></div>
            </div>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>개인정보처리방침 개정 안내</p>
                <p className={styles.postdate}>2022.06.23</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>서비스 이용약관 개정 안내</p>
                <p className={styles.postdate}>2022.06.20</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>9.6.5 업데이트 안내</p>
                <p className={styles.postdate}>2022.06.15</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>가게 홍보 메뉴얼 안내</p>
                <p className={styles.postdate}>2022.06.03</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>9.6.0 업데이트 안내</p>
                <p className={styles.postdate}>2022.06.01</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>서버 점검 알림 (5.29 AM 01:00~03:00)</p>
                <p className={styles.postdate}>2022.05.28</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>


            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>카모마일 4행시 이벤트 당첨자 안내</p>
                <p className={styles.postdate}>2022.05.20</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>운영정책 개정 안내</p>
                <p className={styles.postdate}>2022.05.02</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>고객센터 전화상담 일시 중단 안내</p>
                <p className={styles.postdate}>2022.04.23</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

            {/* 이게 포스트 하나임*/}
            <div className={styles.postcontainer}>
            <div className={styles.posttextcontainer}>
                <p className={styles.posttitle}>9.5.3 업데이트 안내</p>
                <p className={styles.postdate}>2022.03.14</p>
            </div>
            <div className={styles.postgo}>  >  </div>
            </div>
            <hr className={styles.postline}></hr>

        </div>
        <Navbar></Navbar>
    </div>
  );
}
export default Announce;