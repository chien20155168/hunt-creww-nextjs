import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';

// import ActionType from 'constants/ActionType';

import styles from '../styles/components/BottomMenu.module.scss';

// import Modal from "react-awesome-modal";

class BottomMenu extends Component {

    constructor(_props) {
        super(_props);
        //
        //     this.state = {
        //         // visible: localStorage.getItem('first-login')
        //     };
        //
        //     this._navigate = this._navigate.bind(this);
        //     this._handleClickStartups = this._handleClickStartups.bind(this);
        //     this._handleClickNotif = this._handleClickNotif.bind(this);
        //     this._handleClickPost = this._handleClickPost.bind(this);
        //     this._handleClickMyPage = this._handleClickMyPage.bind(this);
        //     this._handleClickSearch = this._handleClickSearch.bind(this);
    }

    closeModal() {
        //     this.setState({
        //         visible: false
        //     });
        //     localStorage.setItem('first-login','false');
    }


    _navigate(path) {
        //     if (this.props.history) {
        //         this.props.history.push(path);
        //     }
    }

    _handleClickStartups() {
        //     const {
        //         login
        //     } = this.props;
        //
        //     if (!login || !login.user) {
        //         this._navigate('/login');
        //         return;
        //     }
        //
        //     this._navigate("/home");
    }

    _handleClickNotif() {
        //     const {
        //         login
        //     } = this.props;
        //
        //     if (!login || !login.user) {
        //         this._navigate('/login');
        //         return;
        //     }
        //
        //     this._navigate("/notification");
    }

    _handleClickPost() {
        //     const {
        //         dispatch,
        //         login
        //     } = this.props;
        //
        //     if (!login || !login.user) {
        //         // 未ログイン時はログイン画面へ遷移させる
        //         this.props.history.push('/login');
        //         return;
        //     }
        //
        //     if (dispatch) {
        //         dispatch({
        //             type: ActionType.SCORE_SET_SUCCESS,
        //             success: null
        //         });
        //         dispatch({
        //             type: ActionType.NAVIGATE_TO_SCOREPAGE_REQUEST,
        //             payload: {
        //                 user_id: login.user.id,
        //                 isShowServiceAndIndustry:true
        //             }
        //         });
        //     }
    }

    _handleClickMyPage() {
        //     const {
        //         login
        //     } = this.props;
        //
        //     if (!login || !login.user) {
        //         this._navigate('/login');
        //         return;
        //     }
        //
        //     this.props.dispatch({
        //         type: ActionType.NAVIGATE_TO_MYPAGE_REQUEST,
        //         payload: {
        //             user_id: login.user.id
        //         }
        //     });
    }

    _handleClickSearch() {
        //     this._navigate("/search");
    }

    render() {
        // if ((this.props.score || {}).isOpen === true) {
        //     // 評価入力ページ表示中は下段メニューを表示しない
        //     return null;
        // }
        //
        let haveUnreadNotification = false
        // const {
        //     notification
        // } = this.props;
        // if (notification && notification.notifications) {
        //     const unReadCount = notification.notifications.filter((notif) => {
        //         return (notif._read === false)
        //     }).length;
        //     haveUnreadNotification = (unReadCount > 0);
        // }


        return (
            <footer className={styles["bottom-menu"]}>
                <div className={styles["contents"]}>
                    <div className={styles["menu-list"]}>

                        <a className={styles["menu"]} onClick={() => this._handleClickStartups()}>
                            {this._createMyPageSvg()}
                            <div className={styles["label"]}>ホーム</div>
                        </a>

                        <a className={styles["menu"]} onClick={() => this._handleClickMyPage()}>
                            {this._createHomeSvg()}
                            <div className={styles["label"]}>マイページ</div>
                        </a>

                        <a className={styles["menu"]}>
                            <div onClick={() => this._handleClickPost()} className={styles["highlight"]}>
                                {this._createEvaluationSvg()}
                                <div className={`${styles["label"]} ${styles["white"]} ${styles["highlight"]}`}>評価を投稿</div>
                                <div className={styles["base-circle"]}/>
                            </div>
                            {/*{*/}
                            {/*    (this.state.visible =='true') ?*/}
                            {/*        <Modal style={slideStyle} visible={this.state.visible} width="90%" effect="fadeInUp"*/}
                            {/*               onClickAway={() => this.closeModal()}>*/}
                            {/*            <div className="model">*/}
                            {/*                <div className="close" onClick={() => this.closeModal()}>*/}
                            {/*                    <span className="icon">{this._getCloseIconWelcomeDialog()}</span>*/}
                            {/*                </div>*/}
                            {/*                <div className="content">*/}
                            {/*                    <div className="icon"> {this._getHeartIconWelcomeDialog()}</div>*/}
                            {/*                    <div className="title">*/}
                            {/*                        まずは応援してみましょう！*/}
                            {/*                    </div>*/}
                            {/*                    <div className="text-main">*/}
                            {/*                        スタートアップハントへようこそ。 あなたの好きなスタートアップをここから投稿して、応援をしてみましょう。*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="down">*/}
                            {/*                    <span className="icon">{this._getDownIconWelcomeDialog()}</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </Modal>*/}
                            {/*        : null*/}
                            {/*}*/}
                        </a>

                        {/*<div className="menu" onClick={() => this._handleClickGuide()}>*/}
                        {/*    {this._createHelpSvg()}*/}
                        {/*    <div className="label">使い方</div>*/}
                        {/*</div>*/}

                        <a className={styles["menu"]} onClick={() => this._handleClickSearch()}>
                            {this._createSearchSvg()}
                            <div className={styles["label"]}>検索</div>
                        </a>

                        <a className={styles["menu"]} onClick={() => this._handleClickNotif()}>
                            {this._createNotificationSvg()}
                            <div className={styles["label"]}>お知らせ</div>
                            {(haveUnreadNotification) ? <div className={styles["marker"]}/> : null}
                        </a>

                    </div>
                </div>
            </footer>
        );
    }


    _getHeartIconWelcomeDialog() {
        return (
            <svg width="60" height="69" viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xlink="http://www.w3.org/1999/xlink">
                <rect width="60" height="68.4" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0" transform="scale(0.005 0.00438596)"/>
                    </pattern>
                    <image id="image0" width="200" height="228"
                           href="data:image/png;base64,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"/>
                </defs>
            </svg>

        );
    }

    _getDownIconWelcomeDialog() {
        return (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.30625 0.5271L9 7.20627L15.6938 0.5271L17.75 2.58335L9 11.3334L0.25 2.58335L2.30625 0.5271Z"
                      fill="#B4B4B4"/>
            </svg>
        )

    }

    _getCloseIconWelcomeDialog() {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#C4C4C4"/>
            </svg>
        )

    }

    _createHomeSvg() {
        return (
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.5 7.375C16.95 7.375 18.125 8.55 18.125 10C18.125 11.45 16.95 12.625 15.5 12.625C14.05 12.625 12.875 11.45 12.875 10C12.875 8.55 14.05 7.375 15.5 7.375ZM15.5 18.625C19.2125 18.625 23.125 20.45 23.125 21.25V22.625H7.875V21.25C7.875 20.45 11.7875 18.625 15.5 18.625ZM15.5 5C12.7375 5 10.5 7.2375 10.5 10C10.5 12.7625 12.7375 15 15.5 15C18.2625 15 20.5 12.7625 20.5 10C20.5 7.2375 18.2625 5 15.5 5ZM15.5 16.25C12.1625 16.25 5.5 17.925 5.5 21.25V25H25.5V21.25C25.5 17.925 18.8375 16.25 15.5 16.25Z"
                    fill="#838383"/>
            </svg>
        );
    }

    _createNotificationSvg() {
        return (
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.5 27.375C16.875 27.375 18 26.25 18 24.875H13C13 26.25 14.125 27.375 15.5 27.375ZM23 19.875V13.625C23 9.7875 20.9625 6.575 17.375 5.725V4.875C17.375 3.8375 16.5375 3 15.5 3C14.4625 3 13.625 3.8375 13.625 4.875V5.725C10.05 6.575 8 9.775 8 13.625V19.875L5.5 22.375V23.625H25.5V22.375L23 19.875ZM20.5 21.125H10.5V13.625C10.5 10.525 12.3875 8 15.5 8C18.6125 8 20.5 10.525 20.5 13.625V21.125Z"
                    fill="#838383"/>
            </svg>
        );
    }

    _createEvaluationSvg() {
        return (
            <svg className={styles["highlight"]} width="30" height="30" viewBox="0 0 30 30" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.7619 22.9048H8.09524V8.2381H17.5238V6.14286H8.09524C6.94286 6.14286 6 7.08571 6 8.2381V22.9048C6 24.0571 6.94286 25 8.09524 25H22.7619C23.9143 25 24.8571 24.0571 24.8571 22.9048V13.4762H22.7619V22.9048ZM24.8571 6.14286V3H22.7619V6.14286H19.619C19.6295 6.15333 19.619 8.2381 19.619 8.2381H22.7619V11.3705C22.7724 11.381 24.8571 11.3705 24.8571 11.3705V8.2381H28V6.14286H24.8571Z"
                    fill="white"/>
            </svg>
        );
    }

    _createMyPageSvg() {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.8938 6.6738L21.4075 12.7263V23.2313H18.8025V15.1601H10.9863V23.2313H8.38002V12.7263L14.8938 6.6738ZM14.8938 3.05505L1.86627 15.1613H5.77502V25.9226H13.5913V17.8513H16.1963V25.9226H24.0125V15.1613H27.9213L14.8938 3.05505Z"
                    fill="#838383"/>
            </svg>
        );
    }

    _createSearchSvg() {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.375 17.5H18.3875L18.0375 17.1625C19.2625 15.7375 20 13.8875 20 11.875C20 7.3875 16.3625 3.75 11.875 3.75C7.3875 3.75 3.75 7.3875 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8875 20 15.7375 19.2625 17.1625 18.0375L17.5 18.3875V19.375L23.75 25.6125L25.6125 23.75L19.375 17.5ZM11.875 17.5C8.7625 17.5 6.25 14.9875 6.25 11.875C6.25 8.7625 8.7625 6.25 11.875 6.25C14.9875 6.25 17.5 8.7625 17.5 11.875C17.5 14.9875 14.9875 17.5 11.875 17.5Z"
                    fill="#838383"/>
            </svg>
        );
    }
}

export default BottomMenu;