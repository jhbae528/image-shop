import React from "react";
import { Link } from "react-router-dom";

function MenuBar({ isAuthorized, isAdmin }) {
    return (
        <div align="center">
            <table>
                <tbody>
                    <tr>
                        {isAuthorized && isAdmin && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                                <td width="120"><Link to="/codegroup">코드그룹관리</Link></td>
                                <td width="120"><Link to="/codedetail">코드관리</Link></td>
                                <td width="120"><Link to="/member">회원관리</Link></td>
                            </>
                        )}
                        {isAuthorized && !isAdmin && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                            </>
                        )}
                        {!isAuthorized && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                            </>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MenuBar;