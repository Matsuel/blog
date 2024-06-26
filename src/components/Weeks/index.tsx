import React, { useState } from 'react';

import styles from './Weeks.module.scss';
import { Week } from '@/types/Weeks';
import Link from 'next/link';

const WeeksDatas: Week[] = [
    {
        title: 'Week 1',
        href: 'week1'
    },
    {
        title: 'Week 2',
        href: 'week2'
    },
    {
        title: 'Week 3',
        href: 'week3'
    },
    {
        title: 'Week 4',
        href: 'week4'
    },
    {
        title: 'Week 5',
        href: 'week5'
    },
    {
        title: 'Week 6',
        href: 'week6'
    },
    {
        title: 'Week 7',
        href: 'week7'
    },
    {
        title: 'Week 8',
        href: 'week8'
    }
];


const Weeks = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className={styles.Weeks} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} onClick={() => setShowMenu(!showMenu)} role='button' tabIndex={0}>
            <button className={styles.Week}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap='round' strokeLinejoin='round' d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                Weeks
            </button>

            {showMenu && <div className={styles.Week_menu}>
                    {WeeksDatas.map((week) => (
                        <Link key={week.title} href={week.href} className={styles.Week_menu_item}>
                            {week.title}
                        </Link>
                    ))}
                </div>}
        </div>
    );
};

export default Weeks;
