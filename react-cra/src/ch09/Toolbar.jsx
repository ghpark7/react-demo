import React from 'react';

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedin, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedin && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedin ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;