import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './WeekChart.module.scss';
import { NavLink } from 'react-router-dom';
import request from '~/utils/axios';
import WeekChartContent from './WeekChartContent';
import Loading from '../Loading';

const cx = classNames.bind(styles);

function WeekChart() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        request.get('/chart/home').then((res) => {
            setData(res.data.weekChart);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h3 className={cx('title')}>Bảng Xếp Hạng Tuần</h3>
                </div>
                <div className={cx('navbar')}>
                    <ul className={cx('menu')}>
                        <li>
                            <NavLink
                                state={{ id: data.vn.playlistId }}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                to={data.vn.link}
                            >
                                Việt Nam
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                state={{ id: data.us.playlistId }}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                to={data.us.link}
                            >
                                US-UK
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                state={{ id: data.korea.playlistId }}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                to={data.korea.link}
                            >
                                k-pop
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={cx('time')}>
                    <p>Tuần {data.vn.latestWeek + '(' + data.vn.startDate + ' - ' + data.vn.endDate + ')'}</p>
                </div>
                <div className={cx('content')}>
                    <WeekChartContent />
                </div>
            </div>
        );
    }
}

export default WeekChart;
