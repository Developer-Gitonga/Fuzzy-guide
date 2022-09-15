import { Fragment } from "react";
import Link from "next/link"

const ProfileDefault = () => {
    return (
        <Fragment>
                <h1>Profile</h1>
                <ul>
                    <li>
                        <Link href='/profile/profile-detail'>Profile Detail</Link>
                    </li>
                    <li>Contact</li>
                </ul>
        </Fragment>
    );
};

export default ProfileDefault;