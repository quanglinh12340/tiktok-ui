import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/713c394d66b28f5b71e952928211da3d~c5_100x100.jpeg?lk3s=a5d48078&nonce=16552&refresh_token=642791471d1bd7f6ed6b703f32070a6a&x-expires=1717128000&x-signature=ceGU3QtxSFmFDxQvpHcqzLKIvNU%3D&shp=a5d48078&shcp=81f88b70' alt='Hoaa' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem